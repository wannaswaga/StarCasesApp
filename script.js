// Призы для кейсов разного уровня
const prizes = {
  100: ["150 ⭐️", "50 ⭐️", "25 ⭐️", "Попробуйте еще раз"],
  500: ["700 ⭐️", "300 ⭐️", "100 ⭐️", "0.5 Ton"],
  1000: ["1500 ⭐️", "500 ⭐️", "250 ⭐️", "Premium на 3 месяца"],
  10000: ["15000 ⭐️", "5000 ⭐️", "2500 ⭐️", "1 Ton"]
};

const wheelInner = document.getElementById("wheel-inner");
const resultDiv = document.getElementById("result");

// Функция для случайного выбора приза
function getRandomPrize(caseCost) {
  const casePrizes = prizes[caseCost];
  const randomIndex = Math.floor(Math.random() * casePrizes.length);
  return { prize: casePrizes[randomIndex], index: randomIndex };
}

// Функция анимации "Колеса фортуны"
function spinWheel(prizeIndex) {
  const randomSpin = Math.floor(Math.random() * 5 + 5); // Количество полных оборотов от 5 до 10
  const angle = 360 / prizes[100].length * prizeIndex; // Угол на выбранном призе
  const totalRotation = 360 * randomSpin - angle; // Общий угол вращения
  
  wheelInner.style.transition = "transform 3s ease-out";
  wheelInner.style.transform = `rotate(${totalRotation}deg)`;
}

// Функция для открытия кейса
function openCase(caseCost) {
  const { prize, index } = getRandomPrize(caseCost);

  // Вращаем колесо и останавливаем его на выигрышной позиции
  spinWheel(index);

  // Пример отправки данных в Telegram о выбранном кейсе
  Telegram.WebApp.sendData(`User opened a case for ${caseCost} Stars`);

  // Отображаем результат через 3 секунды (время окончания анимации)
  setTimeout(() => {
    resultDiv.innerText = `Ваш приз: ${prize}`;
    showMainButton("Открыть еще раз");
  }, 3000);
}

// Функция для управления основной кнопкой Telegram
function showMainButton(text) {
  Telegram.WebApp.MainButton.text = text;
  Telegram.WebApp.MainButton.show();
}

function hideMainButton() {
  Telegram.WebApp.MainButton.hide();
}

// Функции для пополнения и вывода Stars
function addStars() {
  Telegram.WebApp.sendData("User requested to add Stars");
  resultDiv.innerText = "Заявка на пополнение отправлена.";
}

function withdrawStars() {
  Telegram.WebApp.sendData("User requested to withdraw Stars");
  resultDiv.innerText = "Заявка на вывод отправлена.";
}

// Инициализация Telegram WebApp
Telegram.WebApp.ready();
showMainButton("Выберите кейс");

// Сброс анимации колеса после завершения
wheelInner.addEventListener("transitionend", () => {
  wheelInner.style.transition = "none";
  wheelInner.style.transform = "rotate(0deg)";
});

// Открытие и закрытие настроек
function openSettings() {
  document.getElementById("settings-modal").classList.remove("hidden");
}

function closeSettings() {
  document.getElementById("settings-modal").classList.add("hidden");
}

// Открытие модального окна с деталями кейса
function openCaseDetails(title, price, image) {
  document.getElementById("case-title").innerText = title;
  document.getElementById("case-price").innerText = price;
  document.getElementById("case-image").src = image;
  document.getElementById("case-modal").classList.remove("hidden");
}

// Закрытие модального окна для кейсов
function closeCaseModal() {
  document.getElementById("case-modal").classList.add("hidden");
}
