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
