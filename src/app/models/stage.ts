import { task } from "./task";

export interface stage {
  stageNumber: Number;
  tasks: task[];
  startDate: Date;
  endDate: Date;
  isCompleted: -1 | 0 | 1;
}
