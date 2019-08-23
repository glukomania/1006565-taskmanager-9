import {
  Menu,
  Search,
  Filter,
  Sort,
  Task,
  TaskEdit,
  StubMessage
} from './components/index';

import {
  insertSection,
  Position,
  createElement
} from './utils/dom';

import {
  makeTask,
  filterElements,
  tasks
} from './data';

import {maxCardsNumber} from "./constants";

const filters = document.querySelectorAll(`.filter__input`);


// Menu
const menuPlace = document.querySelector(`.main__control`);
const renderMenu = () => {
  const menu = new Menu();
  insertSection(menuPlace, menu.getElement(), Position.BEFOREEND);
};
renderMenu();

// Search
const sectionsPlace = document.querySelector(`.main`);
const renderSearch = () => {
  const search = new Search(`section`, [`main__search`, `search`, `container`]);
  insertSection(sectionsPlace, search.getElement(), Position.BEFOREEND);
};
renderSearch();

// filters
const renderFilter = (filterMock) =>{
  const filter = new Filter(filterMock);
  return filter.getTemplate();
};
const filter = filterElements.map(renderFilter).join(`\n`);
const filterBlock = createElement(filter, `section`, [`main__filter`, `filter`, `container`]);
insertSection(sectionsPlace, filterBlock, Position.BEFOREEND);

// sorting
const renderSort = () => {
  const sort = new Sort(`section`, [`board`, `container`]);
  insertSection(sectionsPlace, sort.getElement(), Position.BEFOREEND);
};
renderSort();

// add cards container
const cardsContainerPlace = document.querySelector(`.board`);
const contentContainer = document.createElement(`div`);
contentContainer.className = `board__tasks`;
cardsContainerPlace.appendChild(contentContainer);


// cards to show
const TASK_COUNT = tasks.length;

const contentPlace = document.querySelector(`.board__tasks`);

const renderTask = (taskMock, id) => {
  const task = new Task(taskMock, id);
  const taskEdit = new TaskEdit(taskMock);

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      contentPlace.replaceChild(task.getElement(), taskEdit.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  task.getElement()
    .querySelector(`.card__btn--edit`)
    .addEventListener(`click`, () => {
      contentPlace.replaceChild(taskEdit.getElement(), task.getElement());
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  taskEdit.getElement().querySelector(`textarea`)
    .addEventListener(`focus`, () => {
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  taskEdit.getElement().querySelector(`textarea`)
    .addEventListener(`blur`, () => {
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  taskEdit.getElement()
    .querySelector(`.card__save`)
    .addEventListener(`click`, () => {
      contentPlace.replaceChild(task.getElement(), taskEdit.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  task.getElement()
    .querySelector(`.card__btn--archive`)
    .addEventListener(`click`, () => {
      task.removeElement();
    });


  insertSection(contentPlace, task.getElement(), Position.BEFOREEND);
};
let tasksToShow = tasks.slice(0, maxCardsNumber);
tasksToShow.forEach((mock, cardId) => renderTask(mock, cardId));
let cardsNumber = maxCardsNumber;

// No cards stub text
const renderNoCards = () => {
  const stub = new StubMessage(`p`, [`board__no-tasks`]);
  cardsContainerPlace.appendChild(stub.getElement());
  contentPlace.remove();
  document.querySelector(`.board__filter-list`).style.visibility = `hidden`;

  for (const item of filters) {
    item.checked = true;
    item.disabled = true;
  }
};

// add button 'load more'
const button = document.createElement(`button`);
button.className = `load-more`;
cardsContainerPlace.appendChild(button);
const loadMoreButton = document.querySelector(`.load-more`);
loadMoreButton.textContent = `load more`;
loadMoreButton.type = `button`;


// Load more cards

const onLoadMoreClick = () => {
  if ((TASK_COUNT - cardsNumber) <= maxCardsNumber) {
    loadMoreButton.style.visibility = `hidden`;
  }

  tasksToShow = tasks.slice(cardsNumber, cardsNumber + maxCardsNumber);
  tasks.slice(cardsNumber, cardsNumber + maxCardsNumber).forEach(renderTask);
  cardsNumber = cardsNumber + maxCardsNumber;
};

if (loadMoreButton) {
  loadMoreButton.addEventListener(`click`, onLoadMoreClick);
}

const onArchiveClick = (evt) => {
  const target = evt.target;
  if (target.dataset.btn === `archive`) {
    const index = tasks.findIndex(() => tasks.find((x) => x.id === target.dataset.id));
    tasks.splice(index, 1);
    if ((TASK_COUNT - tasks.length) <= maxCardsNumber) {
      loadMoreButton.style.visibility = `hidden`;
    }
    if (tasks.length === 0) {
      renderNoCards();
    }
  }

};

contentPlace.addEventListener(`click`, onArchiveClick);
