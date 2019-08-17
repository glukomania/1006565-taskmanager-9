import {
  cardDate,
  cardTime,
} from "./card-date";

const hashtagMarkupPart = (tag) => {
  return `
  <span class="card__hashtag-inner">
    <input
      type="hidden"
      name="hashtag"
      value="repeat"
      class="card__hashtag-hidden-input"
    />
    <p class="card__hashtag-name">
      #${tag}
    </p>
    <button type="button" class="card__hashtag-delete">
      delete
    </button>
</span>`;
};

const hashContainer = (tags) => {
  const getMarkup = tags.map(hashtagMarkupPart).join(`\n`);
  return ` <div class="card__hashtag">
    <div class="card__hashtag-list">
      ${getMarkup}
    </div>

    <label>
      <input
        type="text"
        class="card__hashtag-input"
        name="hashtag-input"
        placeholder="Type new hashtag here"
      />
    </label>
  </div>
  `;
};

const hashtagAdd = () => `
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
`;

const addRepeatingDays = (isAdd, repeatingDays) => `
<fieldset class="card__repeat-days">
<div class="card__repeat-days-inner">
  <input
    class="visually-hidden card__repeat-day-input"
    type="checkbox"
    id="repeat-mo-1}"
    name="repeat"
    value="mo"
    ${!isAdd && repeatingDays.mo ? `checked` : ``}
  />
  <label class="card__repeat-day" for="repeat-mo-4"
    >mo</label
  >
  <input
    class="visually-hidden card__repeat-day-input"
    type="checkbox"
    id="repeat-tu-1}"
    name="repeat"
    value="tu"
    ${!isAdd && repeatingDays.tu ? `checked` : ``}
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
    ${!isAdd && repeatingDays.we ? `checked` : ``}
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
    ${!isAdd && repeatingDays.th ? `checked` : ``}
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
    ${!isAdd && repeatingDays.fr ? `checked` : ``}
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
    ${!isAdd && repeatingDays.se ? `checked` : ``}
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
    ${!isAdd && repeatingDays.su ? `checked` : ``}
  />
  <label class="card__repeat-day" for="repeat-su-1"
    >su</label
  >
</div>
</fieldset>`;

const getAddEditTemplate = ({description, dueDate, isRepeatingDays, repeatingDays, tags, color, isFavorite, isArchive, isAdd = false}) => `
<article class="card card--edit card--${isAdd ? `black` : color} ${isAdd ? `` : `card--repeat`}">
  <form class="card__form" method="get">
    <div class="card__inner">
      <div class="card__control">
        <button type="button" class="card__btn card__btn--archive ${isArchive ? `` : `card__btn--disabled`}">
          archive
        </button>
        <button type="button" class="card__btn card__btn--favorites ${isFavorite ? `` : `card__btn--disabled`}">
          favorites
        </button>
      </div>

      <div class="card__color-bar">
        <svg ${isAdd ? `` : `class="card__color-bar-wave"`} width="100%" height="10">
          <use xlink:href="#wave"></use>
        </svg>
      </div>

      <div class="card__textarea-wrap">
        <label>
          <textarea
            class="card__text"
            placeholder="Start typing your text here..."
            name="text"
          >${isAdd ? `This is example of new task, you can add picture, set date and time, add tags.` : description}</textarea>
        </label>
      </div>

      <div class="card__settings">
        <div class="card__details">
          <div class="card__dates">
            <button class="card__date-deadline-toggle" type="button">
              date: <span class="card__date-status"> ${isAdd ? `NO` : cardDate(dueDate)}</span>
            </button>
            ${isAdd ? `` : `
              <fieldset class="card__date-deadline">
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__date"
                    type="text"
                    placeholder=""
                    name="date"
                    value="${cardTime(dueDate)}"
                  />
                </label>
              </fieldset>
            `}


            <button class="card__repeat-toggle" type="button">
              repeat:<span class="card__repeat-status">${isAdd ? `no` : `yes`}</span>
            </button>

            ${isRepeatingDays ? addRepeatingDays(isAdd, repeatingDays) : ``}

          </div>
          ${isAdd ? hashtagAdd() : hashContainer(tags)}
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
                ${isAdd || (color === `black`) ? `checked` : ``}
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
                ${((!isAdd) && (color === `yellow`)) ? `checked` : ``}
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
                ${((!isAdd) && (color === `blue`)) ? `checked` : ``}
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
                ${((!isAdd) && (color === `green`)) ? `checked` : ``}
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
                ${((!isAdd) && (color === `pink`)) ? `checked` : ``}
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
    </form>
  </article>
`;

export {getAddEditTemplate};
