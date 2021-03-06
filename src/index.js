import './style.css';
import checkbox from './completed.js';

let items = [
  {
    description: 'Eat hamburgers',
    completed: false,
    index: 1,
  },
  {
    description: 'Steal neighbours dog',
    completed: false,
    index: 3,
  },
  {
    description: 'Become millionaire',
    completed: false,
    index: 2,
  },
];

const compare = (a, b) => {
  if (a.index < b.index) {
    return -1;
  }
  if (a.index > b.index) {
    return 1;
  }
  return 0;
};

const getLocalData = () => {
  if (localStorage.getItem('localData')) {
    items = JSON.parse(localStorage.localData);
  }
};

const list = document.getElementById('todolist');

const createList = () => {
  items.sort(compare);
  items.forEach((item) => {
    let checked = '';
    if (item.completed) {
      checked = ' checked';
    }
    list.innerHTML += `<div class="item"><input type="checkbox" class="tick" name="${item.index}"${checked}><p>${item.description}</p><i class="fas fa-ellipsis-v"></i></div>`;
  });
};

getLocalData();
createList();
checkbox(items);