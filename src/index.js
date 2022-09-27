// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import refreshList from './modules/functionality.js';
import {
  taskName,
  // list, task, complete,
  // description, edit, clearAll
} from './modules/selectors.js';
import Task from './modules/tasks.js';

refreshList();

// eslint-disable-next-line consistent-return
taskName.addEventListener('keypress', (e) => {
  if (taskName.value === '') {
    return false;
  }
  if (e.key === 'Enter') {
    e.preventDefault();
    const t = new Task(taskName.value, false, undefined);
    t.addTask();
    refreshList();
    taskName.value = '';
    return true;
  }
});

function component() {
  const element = document.createElement('div');

  return element;
}

document.body.appendChild(component());