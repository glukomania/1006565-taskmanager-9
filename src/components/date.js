import {
  cardDate,
  cardTime,
} from "./card-date";

const getDateTemplate = (date) => `
  <div class="card__dates">
    <div class="card__date-deadline">
      <p class="card__input-deadline-wrap">
        <span class="card__date">${cardDate(date)}</span>
        <span class="card__time">${cardTime(date)}</span>
      </p>
    </div>
  </div>`;

export {getDateTemplate};
