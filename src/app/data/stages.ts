import { stage } from "./../models/stage";
enum progress {
  yetToStart =-1,
  inProcess,
  completed
}

export const stages: stage[] = [
  {
    stageNumber: 1,
    tasks: [
      { name: "Select feedback provider", isCompleted: true },
      { name: "Review feedback receivers", isCompleted: true },
    ],
    startDate: new Date("9/4/2020"),
    endDate: new Date("9/5/2020"),
    isCompleted: progress.completed,
  },
  {
    stageNumber: 2,
    tasks: [
      { name: "Feedback provider's approval", isCompleted: true },
      { name: "Review no. of appraisals", isCompleted: true},
    ],
    startDate: new Date("9/7/2020"),
    endDate: new Date("9/9/2020"),
    isCompleted: progress.completed,
  },
  {
    stageNumber: 3,
    tasks: [{ name: "Provide feedback", isCompleted: true }],
    startDate: new Date("9/10/2020"),
    endDate: new Date("9/11/2020"),
    isCompleted: progress.completed,
  },
  {
    stageNumber: 4,
    tasks: [{ name: "Self appraisal", isCompleted: true }],
    startDate: new Date("9/12/2020"),
    endDate: new Date("9/12/2020"),
    isCompleted: progress.completed,
  },
  {
    stageNumber: 5,
    tasks: [{ name: "L1 consolidation & approvals", isCompleted: true }],
    startDate: new Date("9/13/2020"),
    endDate: new Date("9/16/2020"),
    isCompleted: progress.completed,
  },
  {
    stageNumber: 6,
    tasks: [{ name: "L2+ consolidation & approvals", isCompleted: false }],
    startDate: new Date("9/17/2020"),
    endDate: new Date("9/20/2020"),
    isCompleted: progress.inProcess,
  },
  {
    stageNumber: 7,
    tasks: [{ name: "Management reviews", isCompleted: false }],
    startDate: new Date("9/22/2020"),
    endDate: new Date("9/27/2020"),
    isCompleted: progress.yetToStart,
  },
  {
    stageNumber: 8,
    tasks: [{ name: "Release and Discussions", isCompleted: false }],
    startDate: new Date("9/28/2020"),
    endDate: new Date("10/6/2020"),
    isCompleted: progress.yetToStart,
  },
];
