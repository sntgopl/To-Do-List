import { taskList, updateLocalStorage } from "./data.js";
import { list } from "./selectors.js";
import Task from "./tasks.js";

const refreshList = () => {
  updateLocalStorage(taskList);
  list.innerHTML = taskList
    .map((data) => `<li class="listItem"><input id="complete" type="checkbox"><p id="description">${data.string}</p><i id="edit" class="fa-solid fa-ellipsis-vertical"></i></li>
    `)
    .join('');
};

export default refreshList;