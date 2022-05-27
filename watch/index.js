let date = new Date();
const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let dayName = document.querySelector('#day');
let hourClass = document.querySelector('#hour');
let minuteClass = document.querySelector('#minute');
let part = document.querySelector('#part');

let setT = setTimeout(function getDate(day = date.getDay(), hour = date.getHours(), minutes = date.getMinutes()) {
  dayName.innerHTML = DAY_NAMES[day];

  if (hour < 12) {
    part.innerHTML = "AM";

    if (hour > 9) {
      hourClass.innerHTML = hour;
    } else {
      hourClass.innerHTML = `0${hour}`;
    }

  } else {

    if (hour - 12 > 9) {
      hourClass.innerHTML = `0${hour - 12}`;
    } else {
      hourClass.innerHTML = `0${hour - 12}`;
    }

    part.innerHTML = "PM";
  }

  if (minutes > 9) {
    minuteClass.innerHTML = minutes;
  } else {
    minuteClass.innerHTML = `0${minutes}`;
  }

  date = new Date();
  setT = setTimeout(getDate, 2000, date.getDay(), date.getHours(), date.getMinutes());

}, 0)
