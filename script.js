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

.price {
  background-color: #ffcc00;
  color: #1e1e2f;
  padding: 4px 8px;
  border-radius: 8px;
  font-weight: bold;
  margin-top: 8px;
  display: inline-block;
  font-size: 0.9em;
}

/* Модальное окно для кейсов */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal.hidden {
  display: none;
}

.modal-content {
  background-color: #1e3a5f;
  padding: 20px;
  border-radius: 12px;
  width: 300px;
  text-align: center;
}

.modal h2 {
  color: #ffd700;
  margin-bottom: 20px;
}

.modal-button {
  background-color: #ffcc00;
  color: #1e1e2f;
  padding: 10px 20px;
  margin: 10px 0;
  font-weight: bold;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;
}

.modal-button:hover {
  background-color: #ffd700;
}

.close-button {
  background-color: #2a3a4f;
  color: #ffcc00;
}
