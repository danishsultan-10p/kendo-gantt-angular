import { GanttDependency } from '@progress/kendo-angular-gantt';
import { DependencyType } from '@progress/kendo-angular-gantt';

export interface Task {
  id: number;
  title: string;
  start: Date;
  end: Date;
  completionRatio?: number;
  subtasks?: Task[];
}

export const tasks: Task[] = [
  {
    id: 685,
    title: 'Event 1 hours',
    start: new Date('2023-08-07T00:42:00.000Z'),
    end: new Date('2023-08-17T01:01:00.000Z'),
    completionRatio: 1,
  },
  {
    id: 192,
    title: 'Event 8 hours',
    start: new Date('2023-08-07T01:19:00.000Z'),
    end: new Date('2023-08-17T09:04:00.000Z'),
    completionRatio: 0.4171647222918522,
  },
  {
    id: 377,
    title: 'Event 1 hours',
    start: new Date('2023-08-08T09:05:00.000Z'),
    end: new Date('2023-08-17T10:32:00.000Z'),
    completionRatio: 0.07977614148910961,
  },
  {
    id: 471,
    title: 'Event 8 hours',
    start: new Date('2023-08-08T11:45:00.000Z'),
    end: new Date('2023-08-17T19:24:00.000Z'),
    completionRatio: 0.5255170546548822,
  },
  {
    id: 881,
    title: 'Event 1 hours',
    start: new Date('2023-08-09T19:21:00.000Z'),
    end: new Date('2023-08-17T20:31:00.000Z'),
    completionRatio: 0.9953772632602778,
  },
  {
    id: 210,
    title: 'Event 5 hours',
    start: new Date('2023-08-09T21:26:00.000Z'),
    end: new Date('2023-08-18T02:05:00.000Z'),
    completionRatio: 0.951636175274901,
  },
  {
    id: 1040,
    title: 'Event 2 hours',
    start: new Date('2023-08-10T02:32:00.000Z'),
    end: new Date('2023-08-17T04:47:00.000Z'),
    completionRatio: 0.3200051054232085,
  },
  {
    id: 810,
    title: 'Event 1 hours',
    start: new Date('2023-08-10T05:38:00.000Z'),
    end: new Date('2023-08-17T06:03:00.000Z'),
    completionRatio: 0.11723337494863095,
  },
  {
    id: 1050,
    title: 'Event 9 hours',
    start: new Date('2023-08-11T06:27:00.000Z'),
    end: new Date('2023-08-17T15:43:00.000Z'),
    completionRatio: 0.19672709340406258,
  },
  {
    id: 1034,
    title: 'Event 7 hours',
    start: new Date('2023-08-11T16:39:00.000Z'),
    end: new Date('2023-08-17T23:02:00.000Z'),
    completionRatio: 0.3380838208484285,
  },
  {
    id: 251,
    title: 'Event 10 hours',
    start: new Date('2023-08-12T23:23:00.000Z'),
    end: new Date('2023-08-18T09:53:00.000Z'),
    completionRatio: 0.48079951226827755,
  },
  {
    id: 514,
    title: 'Event 2 hours',
    start: new Date('2023-08-12T10:19:00.000Z'),
    end: new Date('2023-08-17T12:56:00.000Z'),
    completionRatio: 0.11471433487507787,
  },
  {
    id: 381,
    title: 'Event 1 hours',
    start: new Date('2023-08-13T13:34:00.000Z'),
    end: new Date('2023-08-17T14:21:00.000Z'),
    completionRatio: 0.9760732256720717,
  },
  {
    id: 105,
    title: 'Event 9 hours',
    start: new Date('2023-08-13T14:04:00.000Z'),
    end: new Date('2023-08-17T23:53:00.000Z'),
    completionRatio: 0.7691331162856776,
  },
  {
    id: 144,
    title: 'Event 7 hours',
    start: new Date('2023-08-15T00:07:00.000Z'),
    end: new Date('2023-08-17T07:54:00.000Z'),
    completionRatio: 0.4073601581457438,
  },
  {
    id: 823,
    title: 'Event 8 hours',
    start: new Date('2023-08-15T08:00:00.000Z'),
    end: new Date('2023-08-17T16:46:00.000Z'),
    completionRatio: 0.25953868082220266,
  },
  {
    id: 47,
    title: 'Event 7 hours',
    start: new Date('2023-08-16T17:42:00.000Z'),
    end: new Date('2023-08-18T00:06:00.000Z'),
    completionRatio: 0.824661943353934,
  },
  {
    id: 290,
    title: 'Event 9 hours',
    start: new Date('2023-08-16T00:29:00.000Z'),
    end: new Date('2023-08-17T09:30:00.000Z'),
    completionRatio: 0.755588415683065,
  },
];

export const dependencies: GanttDependency[] = [
  {
    id: 528,
    fromId: 18,
    toId: 19,
    type: DependencyType.FS,
  },
  {
    id: 533,
    fromId: 22,
    toId: 23,
    type: DependencyType.FS,
  },
  {
    id: 534,
    fromId: 23,
    toId: 24,
    type: DependencyType.FS,
  },
  {
    id: 535,
    fromId: 24,
    toId: 26,
    type: DependencyType.FS,
  },
  {
    id: 536,
    fromId: 26,
    toId: 27,
    type: DependencyType.FS,
  },
  {
    id: 537,
    fromId: 26,
    toId: 28,
    type: DependencyType.FS,
  },
  {
    id: 538,
    fromId: 27,
    toId: 29,
    type: DependencyType.FS,
  },
  {
    id: 539,
    fromId: 28,
    toId: 29,
    type: DependencyType.FF,
  },
  {
    id: 540,
    fromId: 29,
    toId: 32,
    type: DependencyType.FS,
  },
  {
    id: 541,
    fromId: 29,
    toId: 33,
    type: DependencyType.FS,
  },
  {
    id: 543,
    fromId: 29,
    toId: 36,
    type: DependencyType.FS,
  },
  {
    id: 551,
    fromId: 13,
    toId: 29,
    type: DependencyType.FF,
  },
  {
    id: 544,
    fromId: 34,
    toId: 35,
    type: DependencyType.FS,
  },
  {
    id: 545,
    fromId: 32,
    toId: 33,
    type: DependencyType.FF,
  },
  {
    id: 546,
    fromId: 33,
    toId: 17,
    type: DependencyType.FS,
  },
  {
    id: 547,
    fromId: 35,
    toId: 17,
    type: DependencyType.FS,
  },
  {
    id: 548,
    fromId: 38,
    toId: 17,
    type: DependencyType.FS,
  },
  {
    id: 549,
    fromId: 36,
    toId: 37,
    type: DependencyType.FS,
  },
  {
    id: 550,
    fromId: 37,
    toId: 38,
    type: DependencyType.FS,
  },
  {
    id: 553,
    fromId: 18,
    toId: 20,
    type: DependencyType.FS,
  },
  {
    id: 554,
    fromId: 20,
    toId: 39,
    type: DependencyType.FS,
  },
  {
    id: 555,
    fromId: 19,
    toId: 39,
    type: DependencyType.FS,
  },
  {
    id: 556,
    fromId: 39,
    toId: 22,
    type: DependencyType.FS,
  },
  {
    id: 888,
    fromId: 29,
    toId: 28,
    type: DependencyType.SS,
  },
  {
    id: 777,
    fromId: 7,
    toId: 11,
    type: DependencyType.SF,
  },
];

export const simpleDependencies: GanttDependency[] = [
  {
    id: 528,
    fromId: 18,
    toId: 19,
    type: DependencyType.FS,
  },
  {
    id: 529,
    fromId: 19,
    toId: 39,
    type: DependencyType.FS,
  },
  {
    id: 535,
    fromId: 24,
    toId: 29,
    type: DependencyType.FS,
  },
  {
    id: 551,
    fromId: 13,
    toId: 29,
    type: DependencyType.FF,
  },
  {
    id: 777,
    fromId: 7,
    toId: 11,
    type: DependencyType.SF,
  },
  {
    id: 556,
    fromId: 39,
    toId: 24,
    type: DependencyType.FS,
  },
  {
    id: 546,
    fromId: 29,
    toId: 17,
    type: DependencyType.FS,
  },
];
