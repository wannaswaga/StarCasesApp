// Функция для открытия кейса и обновления баланса
function openCase(price) {
  const balanceElement = document.getElementById("balanceAmount");
  let currentBalance = parseInt(balanceElement.innerText);

  if (currentBalance >= price) {
    currentBalance -= price;
    balanceElement.innerText = currentBalance;
    alert(`Вы открыли кейс за ${price} ⭐!`);
    setTimeout(() => {
      alert("Ваш приз: 150 ⭐");
      currentBalance += 150;
      balanceElement.innerText = currentBalance;
    }, 1000);
  } else {
    alert("Недостаточно звезд для открытия этого кейса.");
  }
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
