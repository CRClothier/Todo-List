import './style.css';
import { addCheckboxEvents } from './completed.js';
import { addTaskListener, createList } from './interact.js';

let items = [];

const getLocalData = () => {
  if (localStorage.getItem('localData')) {
    items = JSON.parse(localStorage.localData);
  }
};

getLocalData();
createList(items);
addTaskListener(items);
addCheckboxEvents(items);