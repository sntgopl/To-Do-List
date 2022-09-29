import './style.css';
import refreshList from './modules/refresh.js';
import checkTask from './modules/check.js';
import {
  clearAll,
  taskName,
} from './modules/selectors.js';
import Task from './modules/tasks.js';
import { taskList, updateLocalStorage } from './modules/data.js';
import createTask from './modules/create.js';

refreshList();
console.log(taskList);

taskName.addEventListener('keypress', (e) => {
  if (taskName.value === '') {
    return false;
  }
  if (e.key === 'Enter') {
    e.preventDefault();
    createTask();
  }
  return true;
});
const edit = document.querySelectorAll('.edit');
edit.forEach((input, number) => {
  input.addEventListener('click', () => {
    taskList.splice(number, 1);
    updateLocalStorage(taskList);
    document.location.reload();
  });
});

const complete = document.querySelectorAll('.complete');
complete.forEach((input, number) => {
  input.addEventListener('change', () => {
    checkTask(number);
  });
});

clearAll.addEventListener('click', () => {
  Task.removeTask();
});

const description = document.querySelectorAll('.description');
description.forEach((element, number) => {
  element.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const editText = (number) => {
        taskList[number].string = description[number].value;
      };
      editText(number);
      updateLocalStorage(taskList);
      document.location.reload();
    }
  });
});