const dateFormat = new Intl.DateTimeFormat(`en-GB`, {
  month: `long`,
  day: `numeric`,
});


const timeFormat = new Intl.DateTimeFormat(`en-GB`, {
  hour12: true,
  hour: `numeric`,
  minute: `numeric`,
});

const formatDate = (date) => dateFormat.format(date).toUpperCase();
const formatTime = (date) => timeFormat.format(date);


export {
  formatDate,
  formatTime,
};
