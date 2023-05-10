export const datepicker = (todayYear, todayMonth) => {
  const input = document.querySelector("#date-input");
  const calenders = document.querySelector(".calender");
  const body = document.querySelector("body");

  input.addEventListener("click", () => {
    calenders.style.display = "inherit";
  });

  body.addEventListener("click", (event) => {
    if (!calenders.contains(event.target) && event.target !== input) {
      calenders.style.display = "none";
    }
  });

  const divs = document.querySelectorAll("[class^='day']");
  for (let i = 1; i <= 42; i++) {
    divs[i].addEventListener("click", () => {
      if (divs[i].classList.contains("prevMonth")) {
        todayMonth--;
      } else if (divs[i].classList.contains("nextMonth")) {
        todayMonth++;
      }

      const dayNum = divs[i].innerHTML.toString().padStart(2, "0");
      let monthNum = (todayMonth + 1).toString().padStart(2, "0");
      if (todayMonth === -1) {
        monthNum = "12";
        todayYear--;
      } else if (monthNum <= 1) {
        monthNum = (todayMonth + 1).toString().padStart(2, "0");
      } else if (monthNum > 12) {
        monthNum = "01";
        todayYear++;
      }

      console.log(todayMonth);
      input.value = `${todayYear}-${monthNum}-${dayNum}`;
      calenders.style.display = "none";
      console.log(`${todayYear}-${monthNum}-${dayNum}`);
    });
  }
};
