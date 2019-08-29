import TaskList from "./task-list";
import {
  Position,
  insertSection,
  createElement,
  unrender
} from "../utils/dom";
import {
  Menu,
  Search,
  Filter,
  Sort,
  Task,
  TaskEdit,
  StubMessage
} from './index';

import {
  filterElements
} from "../data";

import {
  taskDateToSort
} from "../utils/predicators";

class BoardController {
  constructor(tasks) {
    this._tasks = tasks;
    this._taskList = new TaskList();
    this._cardsContainerPlace = null;
    this._cardsNumber = null;
    this._initialTaskNumber = null;
    this._loadMoreButton = null;
    this._filters = null;
    this._maxCardsNumberToDisplay = 3;
    this._containter = null;
    this._onArchiveClick = this._onArchiveClick.bind(this);
    this._onLoadMoreClick = this._onLoadMoreClick.bind(this);
    this.onChangeSort = this.onChangeSort.bind(this);
  }

  init() {
    // menu
    const menuPlace = document.querySelector(`.main__control`);
    this._renderMenu(menuPlace);

    // Search
    const sectionsPlace = document.querySelector(`.main`);
    this._renderSearch(sectionsPlace);

    // filters
    this._filters = document.querySelectorAll(`.filter__input`);
    const filter = filterElements.map(this._renderFilter).join(`\n`);
    const filterBlock = createElement(filter, `section`, [`main__filter`, `filter`, `container`]);
    insertSection(sectionsPlace, filterBlock, Position.BEFOREEND);

    // sorting
    this._renderSort(sectionsPlace);

    // cards
    this._cardsContainerPlace = document.querySelector(`.board`);
    insertSection(this._cardsContainerPlace, this._taskList.getElement(), Position.BEFOREEND);

    this._container = document.querySelector(`.board__tasks`);
    this._initialTaskNumber = this._tasks.length;
    this._tasks.slice(0, this._maxCardsNumberToDisplay).forEach((task) => this._renderTask(task));

    // the number of cards that is displayed NOW
    this._cardsNumber = Math.min(this._tasks.length, this._maxCardsNumberToDisplay);

    // Add button 'load more' (with conditions)
    const button = document.createElement(`button`);
    button.className = `load-more`;
    this._cardsContainerPlace = document.querySelector(`.board`);
    this._cardsContainerPlace.appendChild(button);
    this._loadMoreButton = document.querySelector(`.load-more`);
    this._loadMoreButton.textContent = `load more`;
    this._loadMoreButton.type = `button`;

    if (this._tasks.length <= this._cardsNumber) {
      this._loadMoreButton.style.visibility = `hidden`;
    }
    if (this._tasks.length === 0) {
      this._renderNoCards();
    }

    // Load more cards
    this._loadMoreButton.addEventListener(`click`, this._onLoadMoreClick);

    // Delete a card

    this._container.addEventListener(`click`, this._onArchiveClick);
  }

  _renderMenu(container) {
    const menu = new Menu();
    insertSection(container, menu.getElement(), Position.BEFOREEND);
  }

  _renderSearch(container) {
    const search = new Search(`section`, [`main__search`, `search`, `container`]);
    insertSection(container, search.getElement(), Position.BEFOREEND);
  }

  _renderFilter(filterMock) {
    const filter = new Filter(filterMock);
    return filter.getTemplate();
  }

  _renderSort(sectionsPlace) {
    const sort = new Sort(`section`, [`board`, `container`], this.onChangeSort);
    insertSection(sectionsPlace, sort.getElement(), Position.BEFOREEND);
  }

  _renderTask(taskMock) {
    const task = new Task(taskMock, taskMock.id);
    const taskEdit = new TaskEdit(taskMock);

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        this._container.replaceChild(task.getElement(), taskEdit.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    task.getElement()
      .querySelector(`.card__btn--edit`)
      .addEventListener(`click`, () => {
        this._container.replaceChild(taskEdit.getElement(), task.getElement());
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
        this._container.replaceChild(task.getElement(), taskEdit.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    task.getElement()
      .querySelector(`.card__btn--archive`)
      .addEventListener(`click`, () => {
        task.removeElement();
      });

    insertSection(this._container, task.getElement(), Position.BEFOREEND);
  }

  onChangeSort(typeSort) {
    const sortedTasks = taskDateToSort[typeSort]([...this._tasks.slice()]);
    document.querySelectorAll(`.card`).forEach(unrender);
    sortedTasks.slice(0, this._maxCardsNumberToDisplay).forEach((task) => this._renderTask(task));
  }

  _onLoadMoreClick() {
    if (!this._loadMoreButton) {
      return;
    }
    if ((this._initialTaskNumber - this._cardsNumber) <= this._maxCardsNumberToDisplay) {
      this._loadMoreButton.style.visibility = `hidden`;
    }
    const cardsToShow = this._tasks.slice(this._cardsNumber, this._cardsNumber + this._maxCardsNumberToDisplay);
    cardsToShow.forEach((card) => this._renderTask(this._container, card, card.id));
    this._cardsNumber = this._cardsNumber + cardsToShow.length;
  }

  _renderNoCards() {
    const stub = new StubMessage(`p`, [`board__no-tasks`]);
    this._cardsContainerPlace.appendChild(stub.getElement());
    unrender(this._container);
    document.querySelector(`.board__filter-list`).style.visibility = `hidden`;

    for (const item of this._filters) {
      item.checked = true;
      item.disabled = true;
    }
  }

  _onArchiveClick(evt) {
    const target = evt.target;
    if (target.dataset.btn === `archive`) {
      const index = this._tasks.findIndex((task) => String(task.id) === target.dataset.id);
      this._tasks.splice(index, 1);
      this._cardsNumber = Math.min(this._tasks.length, this._cardsNumber);
      if (this._tasks.length > this._cardsNumber) {
        this._renderTask(this._container, this._tasks[this._cardsNumber - 1], this._tasks[this._cardsNumber - 1].id);
      } else {
        this._loadMoreButton.style.visibility = `hidden`;
      }
      if (this._tasks.length === 0) {
        this._renderNoCards();
      }
    }
  }

}

export default BoardController;
