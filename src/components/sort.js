import {createElement} from "../utils/dom";

class Sort {
  constructor(selector, classNames) {
    this._element = null;
    this._selector = selector;
    this._classNames = classNames;
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate(), this._selector, this._classNames);
    }
    return this._element;
  }

  getTemplate() {
    return `
<div class="board__filter-list">
  <a href="#" class="board__filter">SORT BY DEFAULT</a>
  <a href="#" class="board__filter">SORT BY DATE up</a>
  <a href="#" class="board__filter">SORT BY DATE down</a>
</div>
    `;
  }
}

export {Sort};
