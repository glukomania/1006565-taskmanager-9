import {
  Menu,
  Search,
  Filter,
  getSortTemplate,
  Task,
  TaskEdit
} from './components/index';

import {
  addSection,
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


// insertSection(sectionsPlace, filterMarkup, Position.BEFOREEND);

// renderFilter(filterElements);

// sorting
addSection(sectionsPlace, `section`, getSortTemplate(), `board container`);

insertSection(sectionsPlace, getSortTemplate(), Position.BEFOREEND);

// add-edit container
const cardsContainerPlace = document.querySelector(`.board`);
const contentContainer = document.createElement(`div`);
contentContainer.className = `board__tasks`;
cardsContainerPlace.appendChild(contentContainer);
const contentPlace = document.querySelector(`.board__tasks`);


// cards to show
const TASK_COUNT = 3;

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

taskMocks.forEach((taskMock) => renderTask(taskMock));

// add button 'load more'
// const button = document.createElement(`button`);
// button.className = `load-more`;
// cardsContainerPlace.appendChild(button);
// const loadMore = document.querySelector(`.load-more`);
// loadMore.textContent = `load more`;
// loadMore.type = `button`;

// Load more cards

// const onLoadMoreClick = () => {
//   let cardsNumber = cardsToShow.length;
//   const moreCards = renderCards(tasks, cardsNumber, 7);
//   cardsNumber = cardsNumber + moreCards.length;
//   const cardsTemplateMore = getMarkup(moreCards, getCardTemplate);
//   insertSection(contentPlace, cardsTemplateMore);

//   cardsToShow = renderCards(tasks, 0, cardsNumber);
//   if (moreCards.length <= 7) {
//     loadMore.style.visibility = `hidden`;
//   }
// };

// const onLoadMoreButton = document.querySelector(`.load-more`);
// onLoadMoreButton.addEventListener(`click`, onLoadMoreClick);


