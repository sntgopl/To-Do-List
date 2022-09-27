// define local storage update
function updateLocalStorage(task) {
  localStorage.setItem('task', JSON.stringify(task));
}
// define empty array or get from local storage
const taskList = JSON.parse(localStorage.getItem('task')) || [];

export { updateLocalStorage, taskList };