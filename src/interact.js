import { saveLocalData } from './completed.js';

const compare = (a, b) => {
  if (a.index < b.index) {
    return -1;
  }
  if (a.index > b.index) {
    return 1;
  }
  return 0;
};

const list = document.getElementById('todolist');
const createList = (items) => {
  items.sort(compare);
  items.forEach((item) => {
    let checked = '';
    if (item.completed) {
      checked = ' checked';
    }
    list.innerHTML += `<div class="item"><input type="checkbox" class="tick" name="${item.index}"${checked}><p>${item.description}</p><i class="fas fa-ellipsis-v"></i></div>`;
  });
};

const addTaskListener = (items) => {
  const input = document.getElementById('newTask');
  input.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      const newTask = {
        description: input.value,
        completed: false,
        index: items.length + 1,
      };
      items.push(newTask);
      createList(items);
      input.value = '';
      saveLocalData();
    }
  });
};

export { addTaskListener, createList };