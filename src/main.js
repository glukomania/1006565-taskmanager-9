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

  const editHtml = `<form class="card__form" method="get">
  <div class="card__inner">
    <div class="card__control">
      <button type="button" class="card__btn card__btn--archive">
        archive
      </button>
      <button
        type="button"
        class="card__btn card__btn--favorites card__btn--disabled"
      >
        favorites
      </button>
    </div>

    <div class="card__color-bar">
      <svg width="100%" height="10">
        <use xlink:href="#wave"></use>
      </svg>
    </div>

    <div class="card__textarea-wrap">
      <label>
        <textarea
          class="card__text"
          placeholder="Start typing your text here..."
          name="text"
        >This is example of new task, you can add picture, set date and time, add tags.</textarea>
      </label>
    </div>

    <div class="card__settings">
      <div class="card__details">
        <div class="card__dates">
          <button class="card__date-deadline-toggle" type="button">
            date: <span class="card__date-status">no</span>
          </button>

          <fieldset class="card__date-deadline" disabled>
            <label class="card__input-deadline-wrap">
              <input
                class="card__date"
                type="text"
                placeholder="23 September"
                name="date"
              />
            </label>
          </fieldset>

          <button class="card__repeat-toggle" type="button">
            repeat:<span class="card__repeat-status">no</span>
          </button>

          <fieldset class="card__repeat-days" disabled>
            <div class="card__repeat-days-inner">
              <input
                class="visually-hidden card__repeat-day-input"
                type="checkbox"
                id="repeat-mo-1"
                name="repeat"
                value="mo"
              />
              <label class="card__repeat-day" for="repeat-mo-1"
                >mo</label
              >
              <input
                class="visually-hidden card__repeat-day-input"
                type="checkbox"
                id="repeat-tu-1"
                name="repeat"
                value="tu"
                checked
              />
              <label class="card__repeat-day" for="repeat-tu-1"
                >tu</label
              >
              <input
                class="visually-hidden card__repeat-day-input"
                type="checkbox"
                id="repeat-we-1"
                name="repeat"
                value="we"
              />
              <label class="card__repeat-day" for="repeat-we-1"
                >we</label
              >
              <input
                class="visually-hidden card__repeat-day-input"
                type="checkbox"
                id="repeat-th-1"
                name="repeat"
                value="th"
              />
              <label class="card__repeat-day" for="repeat-th-1"
                >th</label
              >
              <input
                class="visually-hidden card__repeat-day-input"
                type="checkbox"
                id="repeat-fr-1"
                name="repeat"
                value="fr"
                checked
              />
              <label class="card__repeat-day" for="repeat-fr-1"
                >fr</label
              >
              <input
                class="visually-hidden card__repeat-day-input"
                type="checkbox"
                name="repeat"
                value="sa"
                id="repeat-sa-1"
              />
              <label class="card__repeat-day" for="repeat-sa-1"
                >sa</label
              >
              <input
                class="visually-hidden card__repeat-day-input"
                type="checkbox"
                id="repeat-su-1"
                name="repeat"
                value="su"
                checked
              />
              <label class="card__repeat-day" for="repeat-su-1"
                >su</label
              >
            </div>
          </fieldset>
        </div>

        <div class="card__hashtag">
          <div class="card__hashtag-list"></div>

          <label>
            <input
              type="text"
              class="card__hashtag-input"
              name="hashtag-input"
              placeholder="Type new hashtag here"
            />
          </label>
        </div>
      </div>

      <div class="card__colors-inner">
        <h3 class="card__colors-title">Color</h3>
        <div class="card__colors-wrap">
          <input
            type="radio"
            id="color-black-1"
            class="card__color-input card__color-input--black visually-hidden"
            name="color"
            value="black"
            checked
          />
          <label
            for="color-black-1"
            class="card__color card__color--black"
            >black</label
          >
          <input
            type="radio"
            id="color-yellow-1"
            class="card__color-input card__color-input--yellow visually-hidden"
            name="color"
            value="yellow"
          />
          <label
            for="color-yellow-1"
            class="card__color card__color--yellow"
            >yellow</label
          >
          <input
            type="radio"
            id="color-blue-1"
            class="card__color-input card__color-input--blue visually-hidden"
            name="color"
            value="blue"
          />
          <label
            for="color-blue-1"
            class="card__color card__color--blue"
            >blue</label
          >
          <input
            type="radio"
            id="color-green-1"
            class="card__color-input card__color-input--green visually-hidden"
            name="color"
            value="green"
          />
          <label
            for="color-green-1"
            class="card__color card__color--green"
            >green</label
          >
          <input
            type="radio"
            id="color-pink-1"
            class="card__color-input card__color-input--pink visually-hidden"
            name="color"
            value="pink"
          />
          <label
            for="color-pink-1"
            class="card__color card__color--pink"
            >pink</label
          >
        </div>
      </div>
    </div>

    <div class="card__status-btns">
      <button class="card__save" type="submit">save</button>
      <button class="card__delete" type="button">delete</button>
    </div>
  </div>
</form>`;

  // function that adds a new element with inner html

  const menuPlace = document.querySelector(`.main__control`);
  const sectionsPlace = document.querySelector(`.main`);
  const addSection = (container, element, html, className) => {
    let section = document.createElement(element);
    section.className = className;
    section.innerHTML = html;
    container.appendChild(section);
  };

  // add menu

  addSection(menuPlace, `section`, menuHtml, `control__btn-wrap`);

  // add search field

  addSection(sectionsPlace, `section`, searchHtml, `main__search search container`);

  // add filters

  addSection(sectionsPlace, `section`, window.filterMarkup, `main__filter filter container`);

  // add sorting menu

  addSection(sectionsPlace, `section`, sortHtml, `board container`);

  // add cards container

  const cardsContainerPlace = document.querySelector(`.board`);
  // addSection(cardsContainerPlace, `div`, null, `board__tasks`);

  // add cards

  addSection(cardsContainerPlace, `div`, window.cardsMarkup, `board__tasks`);

  // add button 'load more'

  addSection(cardsContainerPlace, `button`, null, `load-more`);
  const button = document.querySelector(`.load-more`);
  button.textContent = `load more`;
  button.type = `button`;

})();
