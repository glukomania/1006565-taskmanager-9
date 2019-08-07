'use strict';

(function () {
  // HTML sections to add:

  const menuHtml = `
    <input
      type="radio"
      name="control"
      id="control__new-task"
      class="control__input visually-hidden"
    />
    <label for="control__new-task" class="control__label control__label--new-task"
      >+ ADD NEW TASK</label
    >
    <input
      type="radio"
      name="control"
      id="control__task"
      class="control__input visually-hidden"
      checked
    />
    <label for="control__task" class="control__label">TASKS</label>
    <input
      type="radio"
      name="control"
      id="control__statistic"
      class="control__input visually-hidden"
    />
    <label for="control__statistic" class="control__label"
      >STATISTICS</label
    >`;

  const searchHtml = `<input type="text" id="search__input" class="search__input" placeholder="START TYPING — SEARCH BY WORD, #HASHTAG OR DATE" />
  <label class="visually-hidden" for="search__input">Search</label>`;

  const sortHtml = `<div class="board__filter-list">
  <a href="#" class="board__filter">SORT BY DEFAULT</a>
  <a href="#" class="board__filter">SORT BY DATE up</a>
  <a href="#" class="board__filter">SORT BY DATE down</a>
  </div>`;

  // function that adds a new element with inner html

  const menuPlace = document.querySelector(`.main__control`);
  const sectionsPlace = document.querySelector(`.main`);
  const addSection = (container, element, html, className) => {
    const section = document.createElement(element);
    section.className = className;
    section.innerHTML = html;
    container.appendChild(section);
  };

  // add menu component

  addSection(menuPlace, `section`, menuHtml, `control__btn-wrap`);

  // add search field component

  addSection(sectionsPlace, `section`, searchHtml, `main__search search container`);

  // add filters component

  addSection(sectionsPlace, `section`, window.filterMarkup, `main__filter filter container`);

  // add sorting menu component

  addSection(sectionsPlace, `section`, sortHtml, `board container`);

  // add cards and add/edit container

  const cardsContainerPlace = document.querySelector(`.board`);

  // edit component
  addSection(cardsContainerPlace, `div`, window.addEditMarkup, `board__tasks`);

  // add cards component
  const cardsPlace = document.querySelector(`.board__tasks`);
  addSection(cardsPlace, `div`, window.cardsMarkup, `board__tasks`);

  // const cardsPlace = document.querySelector('.board__tasks');
  // cardsPlace.innerHTML = window.cardsMarkup;
  // // addSection(cardsContainerPlace, `div`, window.cardsMarkup, `board__tasks`);

  // add button 'load more'

  addSection(cardsContainerPlace, `button`, null, `load-more`);
  const button = document.querySelector(`.load-more`);
  button.textContent = `load more`;
  button.type = `button`;

})();
