'use strict';

const cardData = [
  {text: `Example default task with default color.`, date: `23 September`, time: `11:15 PM`, tags: [`#todo`, `#personal`, `#important`]},
  {text: `Example default task with custom color.`, date: `23 September`, time: `11:15 PM`, tags: [`#todo`, `#personal`, `#important`]},
  {text: `Example default task with custom color and without date.`, date: `23 September`, time: `11:15 PM`, tags: [`#todo`, `#personal`, `#important`]},
];

const getCardMarkup = ({text, date = ``, time = ``, tags = []} = {}) => `
  <article class="card">
    <div class="card__form">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
          <button type="button" class="card__btn card__btn--archive">
            archive
          </button>
          <button
            type="button"
            class="card__btn card__btn--favorites card__btn--disabled">
              favorites
          </button>
        </div>

        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>

        ${getTextArea(text)}
        <div class="card__settings">
          <div class="card__details">
            ${getDateMarkup(date, time)}
            ${tags.length > 0 ? getHashTagList(tags) : ``}
          </div>
        </div>
      </div>
    </div>
  </article>`;


const getTextArea = (cardText) => {
  return `
  <div class="card__textarea-wrap">
  <p class="card__text">${cardText}</p>
  </div>`;
};


const getDateMarkup = (date, time) => `
<div class="card__dates">
  <div class="card__date-deadline">
    <p class="card__input-deadline-wrap">
      <span class="card__date">${date}</span>
      <span class="card__time">${time}</span>
    </p>
  </div>
</div>`;

const hashTagMarkup = (tagsList = []) => `
<span class="card__hashtag-inner">
  <span class="card__hashtag-name">
    ${tagsList};
  </span>
</span>
`;

const getHashTagList = (tagsList) => {
  return `
<div class="card__hashtag">
<div class="card__hashtag-list">
  ${tagsList.map(hashTagMarkup).join(`\n`)}
</div>
</div>
`;
};

window.cardsMarkup = cardData.map(getCardMarkup).join(`\n`);
