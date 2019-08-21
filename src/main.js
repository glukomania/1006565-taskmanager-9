import {
  Menu,
  Search,
  Filter,
  Sort,
  Task,
  TaskEdit,
  NoCards
} from './components/index';

import {
  insertSection,
  Position,
  createElement
} from './utils/dom';

import {
  makeTask,
  filterElements
} from './data';


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
const TASK_COUNT = 50;

const contentPlace = document.querySelector(`.board__tasks`);
const renderTask = (taskMock) => {
  const task = new Task(taskMock);
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

  insertSection(contentPlace, task.getElement(), Position.BEFOREEND);
};


const taskMocks = new Array(TASK_COUNT).fill(``).map(makeTask);

taskMocks.slice(0, 7).forEach((taskMock) => renderTask(taskMock));

// No cards stub text
const renderNoCards = () => {
  const noCards = new NoCards(`p`, [`board__no-tasks`]);
  cardsContainerPlace.appendChild(noCards.getElement());
  contentPlace.remove();
  document.querySelector(`.board__filter-list`).style.visibility = `hidden`;
  const filters = document.querySelectorAll(`.filter__input`);
  for (let item of filters) {
    item.checked = true;
    item.disabled = true;
  }
};
if (document.querySelectorAll(`.card`).length === 0) {
  renderNoCards();
}

// add button 'load more'
const button = document.createElement(`button`);
button.className = `load-more`;
cardsContainerPlace.appendChild(button);
const loadMore = document.querySelector(`.load-more`);
loadMore.textContent = `load more`;
loadMore.type = `button`;


// Load more cards

const onLoadMoreClick = () => {
  let cardsNumber = document.querySelectorAll(`.card`).length;
  if ((TASK_COUNT - document.querySelectorAll(`.card`).length) <= 7) {
    loadMore.style.visibility = `hidden`;
  }
  taskMocks.slice(cardsNumber, cardsNumber + 7).forEach((taskMock) => renderTask(taskMock));

  if ((TASK_COUNT - document.querySelectorAll(`.card`).length) <= 7) {
    loadMore.style.visibility = `hidden`;
  }
};

const onLoadMoreButton = document.querySelector(`.load-more`);
if (onLoadMoreButton) {
  onLoadMoreButton.addEventListener(`click`, onLoadMoreClick);
}
