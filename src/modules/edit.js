import { taskList } from './data.js';
import { description } from './selectors.js';

const editText = (index) => {
  taskList[index].description = description.value;
};

export default editText;