
import {
  formatDate,
  formatTime,
} from "../getDateFormat.js";

const getTextArea = (text) => `
  <div class="card__textarea-wrap">
    <p class="card__text">${text}</p>
  </div>`.trim();

const getDateMarkup = (date) => `
  <div class="card__dates">
    <div class="card__date-deadline">
      <p class="card__input-deadline-wrap">
        <span class="card__date">${formatDate(date)}</span>
        <span class="card__time">${formatTime(date)}</span>
      </p>
    </div>
  </div>`;

const getHashTagMarkup = (name) => `
  <span class="card__hashtag-inner">
    <span class="card__hashtag-name">${name}</span>
  </span>`.trim();

const getHashTagListMarkup = (tags) => `
  <div class="card__hashtag">
    <div class="card__hashtag-list">
      ${tags.map(getHashTagMarkup).join(`\n`)}
    </div>
  </div>`.trim();

const getCardTemplate = ({description, dueDate, tags = [], color, isFavorite, isArchive} = {}) => `
  <article class="card card--${color}">
    <div class="card__form">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
          <button type="button" class="card__btn card__btn--archive ${isArchive ? `` : `card__btn--disabled`}">
            archive
          </button>
          <button
            type="button"
            class="card__btn card__btn--favorites ${isFavorite ? `` : `card__btn--disabled`}">
              favorites
          </button>
        </div>

        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>

        ${getTextArea(description)}

        <div class="card__settings">
          <div class="card__details">
            ${getDateMarkup(dueDate)}
            ${tags.length > 0 ? getHashTagListMarkup(tags) : ``}
          </div>
        </div>
      </div>
    </div>
  </article>`;

export {getCardTemplate};
