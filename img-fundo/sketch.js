var h2 = document.querySelector(".calendar-picture h2");
var h3 = document.querySelector(".calendar-picture h3");

var monthArr = [
 "January",
 "February",
 "March",
 "April",
 "May",
 "June",
 "July",
 "August",
 "September",
 "October",
 "November",
 "December",
];

var dayArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
];

var day31MonthArr = [
  "January",
  "March",
  "May",
  "July",
  "August",
  "October",
  "December",
];

var d = new Date();

var obj = getDate();

function getDate() {
    var month = d.getMonth();
    month = monthArr[month];

    var day = d.getDay();
    day = dayArr[day];

    var date = d.getDate();

    h2.innerHTML = date + ", " + day;
    h3.innerHTML = month;

    return {m: month, dy: day, dt: date, yr: d.getFullYear()}
}