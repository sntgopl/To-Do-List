import { taskList, updateLocalStorage } from './data.js';
import { list } from './selectors.js';

const refreshList = () => {
  updateLocalStorage(taskList);
  list.innerHTML = taskList
    .map((data) => `
    <li class='listItem'>
    <input class='complete' type='checkbox' ${data.bool ? 'checked' : ''}>
    <input type='text' class='description' value='${data.string}'></input>
    <i class='edit' class='fa-solid fa-ellipsis-vertical'></i>
    </li>
    `)
    .join('');
};

export default refreshList;