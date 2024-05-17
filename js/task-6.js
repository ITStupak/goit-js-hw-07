// Функція для генерації випадкового кольору:
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Шукаємо елементи та створюємо константи:
const select = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Функція для створювання елементів необхідної кількості:
function createBoxes(amount) {
  let sizeBox = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${sizeBox}px`;
    box.style.height = `${sizeBox}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    sizeBox += 10;
  }
}

// Функція для очищення елементів:
function destroyBoxes () {  
  boxesContainer.innerHTML = '';
};

// Обробка подій кнопок:
createBtn.addEventListener('click', () => {
const amount = Number(select.value);
  if (amount >= select.min && amount <= select.max) {
    destroyBoxes();
    createBoxes(amount);
    select.value = '';
    console.log(`Congratulations! - You have created ${amount} new unique elements`);
}
});

destroyBtn.addEventListener('click', destroyBoxes); // - 


// Додав від себе трохи стилів у контейнер :)
const style = document.createElement('style');
style.textContent = `
  #boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 5px;
    padding-top: 20px;
  }`
document.head.append(style);