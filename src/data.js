'use strict';

window.data = {
  cardData: [
    {text: `Example default task with default color.`, date: `23 September`, time: `11:15 PM`, tags: [`#todo`, `#personal`, `#important`]},
    {text: `Example default task with custom color.`, date: `23 September`, time: `11:15 PM`, tags: [`#todo`, `#personal`, `#important`]},
    {text: `Example default task with custom color and without date.`, date: `23 September`, time: `11:15 PM`, tags: [`#todo`, `#personal`, `#important`]},
  ],

  filterElements: [
    {name: `All`, count: 13, isChecked: true},
    {name: `Overdue`, count: 0},
    {name: `Today`, count: 0},
    {name: `Favorites`, count: 1},
    {name: `Repeating`, count: 1},
    {name: `Tags`, count: 1},
    {name: `Archive`, count: 115},
  ],

};
