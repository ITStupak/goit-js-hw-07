
/* Варіант 1 ======================================================== */

const categories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
    const title = category.querySelector('h2').textContent;
    console.log(`Category: ${title}`);
    const items = category.querySelectorAll('li');
    console.log(`Elements: ${items.length}`);
});

/* Варіант 2 ======================================================== */

// const categories = document.querySelectorAll('li.item');
// const titles = document.querySelectorAll('h2');
// const items = document.querySelectorAll('li.item > ul');

// console.log(`Number of categories: ${categories.length}`);
// for (let i = 0; i < categories.length; i++) {
//     console.log(`Category: ${titles[i].textContent}`);
//     console.log(`Elements: ${items[i].childElementCount}`);
// };