
const categories = document.querySelectorAll('li.item');
const titles = document.querySelectorAll('h2');
const subList = document.querySelectorAll('li.item > ul');

console.log(`Number of categories: ${categories.length}`);
for (let i = 0; i < categories.length; i++) {
    console.log(`Category: ${titles[i].textContent}`);
    console.log(`Elements: ${subList[i].childElementCount}`);
};

