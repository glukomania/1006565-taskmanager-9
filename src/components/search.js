import {createElement} from "../utils/dom";

class Search {
  constructor(selector, className) {
    this._selector = selector;
    this._className = className;
    this._element = null;
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate(), this._selector, this._className);
    }
    return this._element;
  }

  getTemplate() {
    return `
  <input
      type="text"
      id="search__input"
      class="search__input"
      placeholder="START TYPING — SEARCH BY WORD, #HASHTAG OR DATE" />

    <label class="visually-hidden" for="search__input">
      Search
    </label>`;
  }
}

export {Search};
