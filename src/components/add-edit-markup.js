const data = [
  {cardColor: `black`, isAdd: true, cardText: `test`, isDate: `yes`, dayRepeat: `4`},
];


const tags = [`test1`, `test2`, `test3`];

const hashContainer = () => `
  <div class="card__hashtag">
    <div class="card__hashtag-list">
      ${hashtagEditMarkup}
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
      ${tag}
    </p>
    <button type="button" class="card__hashtag-delete">
      delete
    </button>
</span>`;
};

const hashtagEditMarkup = tags.map(hashtagMarkupPart).join(`\n`);

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

const editHtml = ({cardColor = ``, isAdd = false, cardText = ``, isDate = `no`, dayRepeat}) => `
<article class="card card--edit card--${cardColor} card--repeat">
            <form class="card__form" method="get">
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
                  <svg class="${isAdd ? `` : `card__color-bar-wave`} width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <label>
                    <textarea
                      class="card__text"
                      placeholder="Start typing your text here..."
                      name="text"
                    >${isAdd ? `This is example of new task, you can add picture, set date and time, add tags.` : cardText}</textarea>
                  </label>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <button class="card__date-deadline-toggle" type="button">
                        date: <span class="card__date-status">${isAdd ? `no` : isDate}</span>
                      </button>
                      ${isAdd ? `` : `<fieldset class="card__date-deadline">
                      <label class="card__input-deadline-wrap">
                        <input
                          class="card__date"
                          type="text"
                          placeholder=""
                          name="date"
                          value="${window.data.cardData.date + window.data.cardData.time}"
                        />
                      </label>
                    </fieldset>`}


                      <button class="card__repeat-toggle" type="button">
                        repeat:<span class="card__repeat-status">${isAdd ? `no` : `yes`}</span>
                      </button>

                      <fieldset class="card__repeat-days">
                        <div class="card__repeat-days-inner">
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-mo-${isAdd ? `1` : dayRepeat}"
                            name="repeat"
                            value="mo"
                          />
                          <label class="card__repeat-day" for="repeat-mo-4"
                            >mo</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-tu-${isAdd ? `1` : dayRepeat}"
                            name="repeat"
                            value="tu"

                          />
                          <label class="card__repeat-day" for="repeat-tu-${isAdd ? `1` : dayRepeat}"
                            >tu</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-we-${isAdd ? `1` : dayRepeat}"
                            name="repeat"
                            value="we"
                          />
                          <label class="card__repeat-day" for="repeat-we-${isAdd ? `1` : dayRepeat}"
                            >we</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-th-${isAdd ? `1` : dayRepeat}"
                            name="repeat"
                            value="th"
                          />
                          <label class="card__repeat-day" for="repeat-th-${isAdd ? `1` : dayRepeat}"
                            >th</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-fr-${isAdd ? `1` : dayRepeat}"
                            name="repeat"
                            value="fr"
                          />
                          <label class="card__repeat-day" for="repeat-fr-${isAdd ? `1` : dayRepeat}"
                            >fr</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            name="repeat"
                            value="sa"
                            id="repeat-sa-${isAdd ? `1` : dayRepeat}"
                          />
                          <label class="card__repeat-day" for="repeat-sa-${isAdd ? `1` : dayRepeat}"
                            >sa</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-su-${isAdd ? `1` : dayRepeat}"
                            name="repeat"
                            value="su"
                          />
                          <label class="card__repeat-day" for="repeat-su-${isAdd ? `1` : dayRepeat}"
                            >su</label
                          >
                        </div>
                      </fieldset>
                    </div>

                    ${isAdd ? hashtagAdd() : hashContainer()}


                  <div class="card__colors-inner">
                    <h3 class="card__colors-title">Color</h3>
                    <div class="card__colors-wrap">
                      <input
                        type="radio"
                        id="color-black-${isAdd ? `1` : dayRepeat}"
                        class="card__color-input card__color-input--black visually-hidden"
                        name="color"
                        value="black"
                        ${isAdd ? `checked` : ``}
                      />
                      <label
                        for="color-black-${isAdd ? `1` : dayRepeat}"
                        class="card__color card__color--black"
                        >black</label
                      >
                      <input
                        type="radio"
                        id="color-yellow-${isAdd ? `1` : dayRepeat}"
                        class="card__color-input card__color-input--yellow visually-hidden"
                        name="color"
                        value="yellow"
                        ${isAdd ? `` : `checked`}
                      />
                      <label
                        for="color-yellow-${isAdd ? `1` : dayRepeat}"
                        class="card__color card__color--yellow"
                        >yellow</label
                      >
                      <input
                        type="radio"
                        id="color-blue-${isAdd ? `1` : dayRepeat}"
                        class="card__color-input card__color-input--blue visually-hidden"
                        name="color"
                        value="blue"
                        ${isAdd ? `` : `checked`}
                      />
                      <label
                        for="color-blue-${isAdd ? `1` : dayRepeat}"
                        class="card__color card__color--blue"
                        >blue</label
                      >
                      <input
                        type="radio"
                        id="color-green-${isAdd ? `1` : dayRepeat}"
                        class="card__color-input card__color-input--green visually-hidden"
                        name="color"
                        value="green"
                        ${isAdd ? `` : `checked`}
                      />
                      <label
                        for="color-green-${isAdd ? `1` : dayRepeat}"
                        class="card__color card__color--green"
                        >green</label
                      >
                      <input
                        type="radio"
                        id="color-pink-${isAdd ? `1` : dayRepeat}"
                        class="card__color-input card__color-input--pink visually-hidden"
                        name="color"
                        value="pink"
                        ${isAdd ? `` : `checked`}
                      />
                      <label
                        for="color-pink-${isAdd ? `1` : dayRepeat}"
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

const addEditMarkup = data.map(editHtml);

export {addEditMarkup};
