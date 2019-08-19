const formatTaskDate = new Intl.DateTimeFormat(`en-GB`, {
  month: `long`,
  day: `numeric`,
});


const formatTaskTime = new Intl.DateTimeFormat(`en-GB`, {
  hour12: true,
  hour: `numeric`,
  minute: `numeric`,
});

const formatFullTaskDate = new Intl.DateTimeFormat(`en-GB`, {
  year: `numeric`,
  month: `long`,
  day: `numeric`,
});

const getTaskDate = (date) => formatTaskDate.format(date).toUpperCase();
const getTaskTime = (date) => formatTaskTime.format(date);
const getFullTaskDate = (date) => formatFullTaskDate.format(date);


export {
  getFullTaskDate,
  getTaskDate,
  getTaskTime,
};
