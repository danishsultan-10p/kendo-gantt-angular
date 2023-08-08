import { Component } from '@angular/core';
import {
  GanttDependency,
  TimelineViewType,
} from '@progress/kendo-angular-gantt';
import { Task, tasks, dependencies } from './hierarchical-data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public data: Task[] = tasks;
  public dependencies: GanttDependency[] = dependencies;
  public activeView: TimelineViewType = 'month';
}
