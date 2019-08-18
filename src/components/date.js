import {
  getTaskDate,
  getTaskTime,
} from "./index";

const getDateTemplate = (date) => `
  <div class="card__dates">
    <div class="card__date-deadline">
      <p class="card__input-deadline-wrap">
        <span class="card__date">${getTaskDate(date)}</span>
        <span class="card__time">${getTaskTime(date)}</span>
      </p>
    </div>
  </div>`;

export {getDateTemplate};
