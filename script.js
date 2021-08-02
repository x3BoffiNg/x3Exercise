const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days"); //

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1, //get last date of current month so getmonth() +1//
    0
  ).getDate();

  const prevLastDay = new Date( //get last date of previous month 0 //
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1; //to diplay the day of next month deduct 7 and 1

  const months = [
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

  document.querySelector(".date h1").innerHTML = months[date.getMonth()]; //needd get month if get index just one month can be shown//

  document.querySelector(".date p").innerHTML = new Date().toDateString(); //display day dynamically//

  let days = ""; //empty string//

  for (let x = firstDayIndex; x > 0; x--) {   //ITERATE THE DAYS MON,TUES... each iteration create a new div for prev month date //
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`; //+1 or else may will have 29 no 30//
  }

  for (let i = 1; i <= lastDay; i++) { //
    if (  //highlight current date - if compare counter1 to countdate with match they will add a div element//
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`; //content is the i variable//
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) { //j=1 because each month start with 1,each iteration need to create new div aand pass them as the counter of dsys insert variable j
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days; //number of the days //
  }
};

document.querySelector(".prev").addEventListener("click", () => { //the left arrow attach to event llistener vent is click and call the function//
  date.setMonth(date.getMonth() - 1);
  renderCalendar(); //need to call rendercalendar functiion for it to work//
});

document.querySelector(".next").addEventListener("click", () => {{ //the right arrow attach to event llistener vent is click and call the function//
  date.setMonth(date.getMonth() + 1);
  renderCalendar();  renderCalendar(); //need to call rendercalendar functiion for it to work//
});

renderCalendar();  renderCalendar(); //need to call rendercalendar functiion global scope for it to work//
