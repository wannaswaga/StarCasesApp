const prizes = {
  100: ["150 ⭐️", "50 ⭐️", "25 ⭐️", "Попробуйте еще раз"],
  500: ["700 ⭐️", "300 ⭐️", "100 ⭐️", "0.5 Ton"],
  1000: ["1500 ⭐️", "500 ⭐️", "250 ⭐️", "Premium на 3 месяца"],
  10000: ["15000 ⭐️", "5000 ⭐️", "2500 ⭐️", "1 Ton"]
};

const wheelInner = document.getElementById("wheel-inner");

function getRandomPrize(caseCost) {
  const casePrizes = prizes[caseCost];
  const randomIndex = Math.floor(Math.random() * casePrizes.length);
  return { prize: casePrizes[randomIndex], index: randomIndex };
}

function spinWheel(prizeIndex) {
  const randomSpin = Math.floor(Math.random() * 5 + 5);
  const angle = 360 / prizes[100].length * prizeIndex;
  const totalRotation = 360 * randomSpin - angle;

  wheelInner.style.transform = `rotate(${totalRotation}deg)`;
}

function openCase(caseCost) {
  const { prize, index } = getRandomPrize(caseCost);

  spinWheel(index);

  setTimeout(() => {
    alert(`Ваш приз: ${prize}`);
  }, 3000);
}

function addStars() {
  Telegram.WebApp.sendData("User requested to add Stars");
}

function withdrawStars() {
  Telegram.WebApp.sendData("User requested to withdraw Stars");
}
