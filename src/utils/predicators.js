// general utility module

// checks if there is at least one true in an object
const checkTrueInArray = (object) => {
  if (Object.values(object).some((isRepeat) => isRepeat)) {
    return true;
  }
  return false;
};


export {
  checkTrueInArray
};
