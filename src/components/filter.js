
const getFilterMarkup = ({name, count = 0, isChecked = false} = {}) => {
  const id = name.toLowerCase();
  return `
    <input
      type="radio"
      id="filter__${id}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
    />

    <label for="filter__${id}" class="filter__label">
      ${name.toUpperCase()}
      <span class="filter__${id}-count">${count}</span>
    </label>`.trim();
};

export {getFilterMarkup};
