import './style.css';
import refreshList from './modules/refresh.js';
import checkTask from './modules/check.js';
import {
  clearAll,
  description,
  taskName,
} from './modules/selectors.js';
import Task from './modules/tasks.js';
import { taskList, updateLocalStorage } from './modules/data.js';
import editText from './modules/edit.js';

refreshList();
console.log(taskList);

taskName.addEventListener('keypress', (e) => {
  if (taskName.value === '') {
    return false;
  }
  if (e.key === 'Enter') {
    e.preventDefault();
    const t = new Task(taskName.value, false);
    t.addTask();
    refreshList();
    taskName.value = '';
  }
  return true;
});

const complete = document.querySelectorAll('.complete');

complete.forEach((input, index) => {
  input.addEventListener('change', () => {
    checkTask(index);
  });
});

clearAll.addEventListener('click', () => {
  Task.removeTask();
});

description.forEach((element, index) => {
  element.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      editText(index);
      updateLocalStorage(taskList);
      document.location.reload();
    }
  });
});