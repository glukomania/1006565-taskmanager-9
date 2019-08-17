const dateFormat = new Intl.DateTimeFormat(`en-GB`, {
  month: `long`,
  day: `numeric`,
});


const timeFormat = new Intl.DateTimeFormat(`en-GB`, {
  hour12: true,
  hour: `numeric`,
  minute: `numeric`,
});

const cardDate = (date) => dateFormat.format(date).toUpperCase();
const cardTime = (date) => timeFormat.format(date);


export {
  cardDate,
  cardTime,
};
