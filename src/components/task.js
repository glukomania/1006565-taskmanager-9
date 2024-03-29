import AbstractComponent from "./abstract-component";
import {checkTrueInArray} from "../utils/predicators";

class Task extends AbstractComponent {
  constructor({description, dueDate, tags, color, repeatingDays}, index) {
    super();
    this._description = description;
    this._dueDate = new Date(dueDate);
    this._tags = tags;
    this._color = color;
    this._repeatingDays = repeatingDays;
    this._index = index;
  }

  getTemplate() {
    return `
    <article class="card card--${this._color} ${checkTrueInArray(this._repeatingDays) ? `card--repeat` : `` }">
          <div class="card__form">
            <div class="card__inner">
              <div class="card__control">
                <button type="button" class="card__btn card__btn--edit">
                  edit
                </button>
                <button type="button" class="card__btn card__btn--archive" data-btn="archive" data-id="${this._index}">
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
                <svg class="card__color-bar-wave" width="100%" height="10">
                  <use xlink:href="#wave"></use>
                </svg>
              </div>

              <div class="card__textarea-wrap">
                <p class="card__text">${this._description}</p>
              </div>

              <div class="card__settings">
                <div class="card__details">
                  <div class="card__dates">
                    <div class="card__date-deadline">
                      <p class="card__input-deadline-wrap">
                        <span class="card__date">${this._dueDate.toDateString()}</span>
                        <span class="card__time">${this._dueDate.getHours()}:${this._dueDate.getMinutes()}</span>
                      </p>
                    </div>
                  </div>

                  <div class="card__hashtag">
                    <div class="card__hashtag-list">
                      ${(Array.from(this._tags).map((tag) => (`
                        <span class="card__hashtag-inner">
                        <input type="hidden" name="hashtag" value="${tag}" class="card__hashtag-hidden-input" />
                        <button type="button" class="card__hashtag-name">#${tag}</button>
                        <button type="button" class="card__hashtag-delete">delete</button>
                      </span>`.trim()
  ))).join(``)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>`;
  }
}


export default Task;
