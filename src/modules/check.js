import { taskList, updateLocalStorage } from './data.js';

const checkTask = (index) => {
  if (taskList[index].bool === true) {
    taskList[index].bool = false;
  } else if (taskList[index].bool === false) {
    taskList[index].bool = true;
  }
  updateLocalStorage(taskList);
  document.location.reload();
};

export default checkTask;