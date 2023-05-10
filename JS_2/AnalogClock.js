const AnalogClock = ($container) => {
  // do something!
  const time = $container;
  time.insertAdjacentHTML(
    "beforeend",
    `<div class="hand hour"></div>
  <div class="hand minute"></div>
  <div class="hand second"></div>`
  );
  for (let i = 1; i <= 12; i++) {
    time.insertAdjacentHTML("beforeend", `<div class="time time${i}">|</div>`);
  }
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const cssDegH = $container.querySelector(".analog-clock .hand.hour");
  const cssDegM = $container.querySelector(".analog-clock .hand.minute");
  const cssDegS = $container.querySelector(".analog-clock .hand.second");
  cssDegH.style.setProperty("--deg", h * 30);
  cssDegM.style.setProperty("--deg", m * 6);
  cssDegS.style.setProperty("--deg", s * 6);

  const handleClock = setInterval(function () {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const cssDegH = $container.querySelector(".analog-clock .hand.hour");
    const cssDegM = $container.querySelector(".analog-clock .hand.minute");
    const cssDegS = $container.querySelector(".analog-clock .hand.second");
    cssDegH.style.setProperty("--deg", h * 30);
    cssDegM.style.setProperty("--deg", m * 6);
    cssDegS.style.setProperty("--deg", s * 6);
  }, 1000);
};

export default AnalogClock;
