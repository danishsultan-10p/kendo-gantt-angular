import { Component } from '@angular/core';
import {
  CellClickEvent,
  CellCloseEvent,
  GanttDependency,
  TimelineViewType,
  GanttComponent,
  TaskClickEvent,
  TaskEditEvent,
} from '@progress/kendo-angular-gantt';
import { DateFormatOptions } from '@progress/kendo-angular-intl';
import { Task, tasks, dependencies } from './hierarchical-data';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public data: Task[] = tasks;
  public dependencies: GanttDependency[] = dependencies;
  public activeView: TimelineViewType = 'week';

  timelineHeadersDateFormat: DateFormatOptions = {
    groupHeaderDateFormat: 'E', // hh:mm a',
    columnHeaderDateFormat: 'E',
  };
  public dateTimeFormat = 'E HH:mm';

  //////////

  public handleCellClick({
    sender,
    columnIndex,
    dataItem,
    isEdited,
  }: CellClickEvent): void {
    console.log('handleCellClick');
    if (!isEdited) {
      sender.editCell(dataItem, columnIndex, this.createFormGroup(dataItem));
    }
  }

  public handleCellClose(e: CellCloseEvent): void {
    console.log('handleCellClose');
    const { formGroup: taskFormGroup, item } = e;

    if (!taskFormGroup.valid) {
      // Prevent closing the edited cell if the form is invalid.
      e.preventDefault();
    } else {
      const editedItem: Task = taskFormGroup.value;
      const originalItem = { ...e.dataItem };

      if (editedItem.start > editedItem.end) {
        taskFormGroup.value.end = originalItem.end;
        console.log(taskFormGroup);
        taskFormGroup.value = originalItem;
        // e.dataItem
        alert('start cannot be greater than end');
        // editedItem = originalItem;
        e.preventDefault();
      }

      // Update the edited item
      Object.assign(e.dataItem, editedItem);

      // Edit the ancestor items accordingly if necessary
      if (this.anyChanged(originalItem, editedItem)) {
        let currentItem = item.parent;

        while (currentItem) {
          const dataItem = currentItem.dataItem;
          const subtasks = dataItem.subtasks;

          dataItem.completionRatio =
            subtasks.reduce((acc, curr) => acc + curr.completionRatio, 0) /
            subtasks.length;
          dataItem.start = new Date(Math.min(...subtasks.map((t) => t.start)));
          dataItem.end = new Date(Math.max(...subtasks.map((t) => t.end)));

          currentItem = currentItem.parent;
        }
      }
    }
  }

  private createFormGroup(dataItem: Task): FormGroup {
    return new FormGroup({
      id: new FormControl(dataItem.id),
      start: new FormControl(dataItem.start),
      end: new FormControl(dataItem.end),
      completionRatio: new FormControl(dataItem.completionRatio),
      title: new FormControl(dataItem.title),
    });
  }

  private anyChanged(item: Task, editedItem: Task) {
    return (
      item.start !== editedItem.start ||
      item.end !== editedItem.end ||
      item.completionRatio !== editedItem.completionRatio
    );
  }

  // private anyChanged(item: Task, editedItem: Task) {
  //   return item.start !== editedItem.start ||
  //       item.end !== editedItem.end ||
  //       item.completionRatio !== editedItem.completionRatio;
  // }

  public onDblClick(e: TaskClickEvent): void {
    const taskFormGroup = this.createFormGroup(e.dataItem);

    e.sender.editTask(e.dataItem, taskFormGroup);
  }

  public confirm(gantt: GanttComponent): void {
    gantt.openConfirmationDialog();
  }

  public saveTask({
    taskFormGroup,
    item,
    sender,
    dependencies: updatedDependencies,
  }: TaskEditEvent): void {
    if (!taskFormGroup.valid) {
      // Keep the dialog open for editing if the form is invalid.
      return;
    } else {
      const editedItem = taskFormGroup.value;
      const originalItem = { ...item.dataItem };

      // Update the edited item
      Object.assign(item.dataItem, editedItem);

      // Update the ancestor items accordingly if necessary
      if (this.anyChanged(originalItem, editedItem)) {
        let currentItem = item.parent;

        while (currentItem) {
          const dataItem = currentItem.dataItem;
          const subtasks = dataItem.subtasks;

          dataItem.completionRatio =
            subtasks.reduce((acc, curr) => acc + curr.completionRatio, 0) /
            subtasks.length;
          dataItem.start = new Date(Math.min(...subtasks.map((t) => t.start)));
          dataItem.end = new Date(Math.max(...subtasks.map((t) => t.end)));

          currentItem = currentItem.parent;
        }
      }

      // Update dependencies
      const processedDependencies = [...this.dependencies]; // Create new array reference

      // Add newly created dependencies
      if (updatedDependencies.createdItems.length) {
        updatedDependencies.createdItems.map(
          (dependency) =>
            (dependency.id = Math.floor(Math.random() * 1000) + 100)
        );
        processedDependencies.push(...updatedDependencies.createdItems);
      }

      // Update existing dependencies
      if (updatedDependencies.updatedItems.length) {
        updatedDependencies.updatedItems.forEach((dependency) => {
          const positionIndex = processedDependencies.findIndex(
            (dep) => dep.id === dependency.id
          );
          if (positionIndex > -1) {
            processedDependencies.splice(positionIndex, 1, dependency);
          }
        });
      }

      // Handle removed dependencies
      if (updatedDependencies.deletedItems) {
        updatedDependencies.deletedItems.forEach((dependency) => {
          const positionIndex = processedDependencies.findIndex(
            (dep) => dep.id === dependency.id
          );
          if (positionIndex > -1) {
            processedDependencies.splice(positionIndex, 1);
          }
        });
      }

      this.dependencies = processedDependencies;

      sender.closeTaskDialog();
    }
  }

  public removeTask({ item }: TaskEditEvent): void {
    // Remove the deleted item from its parent's children
    const parentChildren = item.parent
      ? item.parent.dataItem.subtasks
      : this.data;
    const indexOfItemToDelete = parentChildren.findIndex(
      (t) => t === item.dataItem
    );
    parentChildren.splice(indexOfItemToDelete, 1);

    let currentItem = item.parent;

    // Update the ancestor items accordingly
    while (currentItem) {
      const dataItem = currentItem.dataItem;
      const subtasks = dataItem.subtasks;

      dataItem.completionRatio =
        subtasks.reduce((acc, curr) => acc + curr.completionRatio, 0) /
        subtasks.length;
      dataItem.start = new Date(Math.min(...subtasks.map((t) => t.start)));
      dataItem.end = new Date(Math.max(...subtasks.map((t) => t.end)));

      currentItem = currentItem.parent;
    }
  }

  public cancelEditing(e: TaskEditEvent): void {
    e.sender.closeTaskDialog();
  }
}
