let yearEl = document.getElementById("year");
let monthEl = document.getElementById("month");
let weekEl = document.getElementById("week");
let dayEl = document.getElementById("day");

const date = new Date();

yearEl.innerHTML = date.getFullYear();
dayEl.innerHTML = date.getDate();

const month = date.getMonth();
monthEl.innerHTML = date.toLocaleDateString('en', {
    month : "long"
});

const weekDay = date.getDay();
weekEl.innerHTML = date.toLocaleDateString('en', {
    weekday : "long"
});
