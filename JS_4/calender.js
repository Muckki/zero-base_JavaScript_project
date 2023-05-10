import { datepicker } from "./datepicker.mjs";

const calender = () => {
  let calenderDiv = document.querySelectorAll(".calender");
  let dates = new Date();
  let todayMonth = dates.getMonth();
  let todayYear = dates.getFullYear();
  calenderDiv.forEach((calenders) => {
    let header = document.createElement("header");
    header.classList.add("calender-nav");
    calenders.appendChild(header);
    let buttonPrev = document.createElement("button");
    buttonPrev.classList.add("prev-month");
    buttonPrev.innerHTML = `<img src="/template/svg/triangle-filled-svgrepo-com.svg" alt="">`;
    header.appendChild(buttonPrev);
    let divNow = document.createElement("div");
    divNow.classList.add("now-month");
    header.appendChild(divNow);
    let year = document.createElement("div");
    year.classList.add("year");
    year.innerHTML = `${todayYear}년`;
    divNow.appendChild(year);
    let month = document.createElement("div");
    month.classList.add("month");
    month.innerHTML = `${todayMonth + 1}월`;
    divNow.appendChild(month);
    let buttonNext = document.createElement("button");
    buttonNext.classList.add("next-month");
    buttonNext.innerHTML = `<img src="/template/svg/triangle-filled-svgrepo-com.svg" alt="">`;
    header.appendChild(buttonNext);

    // claender-grid 요소 동적 생성

    let section = document.createElement("section");
    section.classList.add("calender-grid");
    calenders.appendChild(section);
    let weekly = document.createElement("div");
    weekly.classList.add("weekly");
    section.appendChild(weekly);
    function makeWeek() {
      for (let i = 1; i <= 7; i++) {
        let week = document.createElement("div");
        week.classList.add(`week${i}`);
        weekly.appendChild(week);
      }
    }
    makeWeek();
    let week1 = document.querySelector(".week1");
    week1.innerHTML = "sun";
    let week2 = document.querySelector(".week2");
    week2.innerHTML = "mon";
    let week3 = document.querySelector(".week3");
    week3.innerHTML = "tue";
    let week4 = document.querySelector(".week4");
    week4.innerHTML = "wed";
    let week5 = document.querySelector(".week5");
    week5.innerHTML = "thr";
    let week6 = document.querySelector(".week6");
    week6.innerHTML = "fri";
    let week7 = document.querySelector(".week7");
    week7.innerHTML = "sat";

    let days = document.createElement("div");
    days.classList.add("days");
    section.appendChild(days);
    function rederCalender() {
      days.innerHTML = "";

      let firstDayOfMonth = new Date(todayYear, todayMonth, 1).getDay();
      let lastDayOfMonth = new Date(todayYear, todayMonth + 1, 0).getDate();
      let lastDayOfPrevMonth = new Date(todayYear, todayMonth, 0).getDate();

      for (let i = 1; i <= 42; i++) {
        let allDay = document.createElement("div");
        allDay.classList.add(`day${i}`);
        days.appendChild(allDay);

        if (i < firstDayOfMonth + 1) {
          allDay.innerHTML = lastDayOfPrevMonth - firstDayOfMonth + i;
          allDay.classList.add("prevMonth");
        } else if (
          i >= firstDayOfMonth + 1 &&
          i < lastDayOfMonth + firstDayOfMonth + 1
        ) {
          allDay.innerHTML = i - firstDayOfMonth;
          if (
            i - firstDayOfMonth === dates.getDate() &&
            todayMonth === dates.getMonth() &&
            todayYear === dates.getFullYear()
          ) {
            allDay.classList.add("today");
          }
        } else {
          allDay.innerHTML = i - lastDayOfMonth - firstDayOfMonth;
          allDay.classList.add("nextMonth");
        }
        let dayOfWeek = new Date(
          todayYear,
          todayMonth,
          i - firstDayOfMonth
        ).getDay();
        if (dayOfWeek === 0) {
          allDay.classList.add("sun");
        }
      }
    }
    rederCalender();
    let input = document.querySelector("input");
    let buttons = [buttonPrev, buttonNext];
    let buttonclick = (buttons) => {
      buttons.forEach((button) => {
        input.addEventListener("click", () => {
          datepicker(todayYear, todayMonth);
        });
        button.addEventListener("click", () => {
          if (button === buttonPrev) {
            todayMonth--;
            if (todayMonth < 0) {
              todayMonth = 11;
              todayYear--;
            }
          } else {
            todayMonth++;
            if (todayMonth > 11) {
              todayMonth = 0;
              todayYear++;
            }
          }
          year.innerHTML = `${todayYear}년`;
          month.innerHTML = `${todayMonth + 1}월`;

          rederCalender();

          datepicker(todayYear, todayMonth);
        });
      });
    };
    buttonclick(buttons);
  });
  datepicker(todayYear, todayMonth);
};

calender();
