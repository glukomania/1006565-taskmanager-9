// general utility module

// checks if there is at least one true in an object
const checkTrueInArray = (object) => {
  if (Object.values(object).some((isRepeat) => isRepeat)) {
    return true;
  }
  return false;
};

const taskDateToSort = {
  default: (tasks) => tasks, // fn. identity
  up: (tasks) => tasks.sort((a, b) => a.dueDate > b.dueDate ? 1 : -1),
  down: (tasks) => tasks.sort((a, b) => a.dueDate < b.dueDate ? 1 : -1),
};


export {
  checkTrueInArray,
  taskDateToSort
};
