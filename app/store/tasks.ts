import { atom } from "jotai";

const initData = [
  {
    name: "Task 1",
    done: false,
  },
  {
    name: "Task 2",
    done: false,
  },
  {
    name: "Task 3",
    done: true,
  },
];

const tasks = atom<
  {
    name: string;
    done: boolean;
  }[]
>(initData);

export default tasks;
