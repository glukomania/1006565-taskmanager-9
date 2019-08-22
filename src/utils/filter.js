// counts tasks by filter parameter
const countCards = (array, key) => {
  let counter = 0;
  for (let item of array) {
    if (item[key] === true) {
      counter++;
    }
  }
  return counter;
};

const isSameDate = (dateA, dateB) => dateA === dateB.toISOString();

// Counts tasks by dates
const countCardsByDate = (array, key, isOverDue) => {
  let counter = 0;
  const todayDate = new Date();
  if (isOverDue) {
    const filtered = array.filter(({dueDate}) => dueDate < todayDate);
    counter = filtered.length;
  } else {
    for (let item of array) {
      if (isSameDate(item[key], todayDate)) {
        counter++;
      }
    }
  }
  return counter;
};

export {
  countCards,
  countCardsByDate,
};
