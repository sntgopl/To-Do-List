import { taskList, updateLocalStorage } from './data.js';
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
    for (let i = this.number; i < taskList.length; i += 1) {
      taskList[i].number -= 1;
    }
    taskList.splice(this, 1);
    refreshList();
  }

  static removeTask() {
    const uncompleted = taskList.filter((task) => task.bool === false);
    taskList.splice(0, taskList.length);
    for (let i = 0; i < uncompleted.length; i += 1) {
      uncompleted[i].number = i;
      taskList.push(uncompleted[i]);
    }
    updateLocalStorage(taskList);
    refreshList();
    document.location.reload();
  }
}

export default Task;