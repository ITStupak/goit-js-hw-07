// Функція для генерації випадкового кольору:
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Шукаємо елементи та створюємо константи:
const changeColorBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

// Створюємо колбек функцію для зміни кольору та його назви:
const changeColor = () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorName.textContent = newColor;
}

// Обробка подіі click на кнопці:
changeColorBtn.addEventListener('click', changeColor);