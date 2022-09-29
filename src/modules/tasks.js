import { taskList } from './data.js';
import refreshList from './refresh.js';

class Task {
  constructor(string, bool) {
    this.string = string;
    this.bool = bool;
    this.number = taskList.length;
  }

  addTask() {
    taskList.push(this);
  }

  remove() {
    taskList.splice(this, 1);
    refreshList();
  }

  static removeTask() {
    for (let i = 0; i <= taskList.length - 1; i += 1) {
      if (taskList[i].bool === true) {
        taskList.splice(i, 1);
        for (let j = i; j <= taskList.length - 1; j += 1) {
          taskList[j].number -= 1;
        }
        i -= 1;
      }
    }
    refreshList();
    document.location.reload();
  }
}

export default Task;