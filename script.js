* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
  background-color: #0e0e1f;
  color: #ffffff;
}

/* Верхняя панель */
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1e3a5f;
  padding: 10px 20px;
  color: #ffd700;
}

.logo {
  font-size: 1.5em;
  cursor: pointer;
}

.balance-settings {
  display: flex;
  align-items: center;
  gap: 10px;
}

.balance {
  background-color: #292b4a;
  color: #ffcc00;
  padding: 8px 15px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 1em;
  display: flex;
  align-items: center;
}

/* Основной стиль приложения */
#app {
  padding: 20px;
  text-align: center;
}

h2 {
  color: #ffd700;
  font-size: 1.8em;
  font-weight: 500;
  margin-bottom: 20px;
}

/* Стиль карточек кейсов */
.case-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.case-card {
  background-color: #2a3a4f;
  border-radius: 12px;
  width: 140px;
  padding: 15px;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

.case-card:hover {
  transform: scale(1.05);
}

.case-card img {
  width: 100%;
  border-radius: 8px;
}

// Открытие модального окна с деталями кейса
function openCaseDetails(title, price, image) {
  document.getElementById("case-title").innerText = title;
  document.getElementById("case-price").innerText = price;
  document.getElementById("case-image").src = image;
  document.getElementById("case-modal").classList.remove("hidden");
}

// Функция для открытия кейса
function openCase() {
  alert("Вы открыли кейс!");
}

// Закрытие модального окна
function closeCaseModal() {
  document.getElementById("case-modal").classList.add("hidden");
}

// Функции для модального окна настроек
function openSettings() {
  document.getElementById("settings-modal").classList.remove("hidden");
}

function closeSettings() {
  document.getElementById("settings-modal").classList.add("hidden");
}

function openDeposit() {
  alert("Здесь будет страница для пополнения.");
}

function openWithdraw() {
  alert("Здесь будет страница для вывода.");
}

function openHistory() {
  alert("Здесь будет страница с историей транзакций.");
}

// Инициализация Telegram Web App
Telegram.WebApp.ready();
