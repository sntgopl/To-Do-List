import { taskList } from './data.js';

class Task {
  constructor(string, bool, number) {
    this.string = string;
    this.bool = bool;
    this.number = number;
  }

  addTask() {
    taskList.push(this);
  }

  static removeTask(index) {
    taskList.splice(index, 1);
  }
}

export default Task;