const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

/* Варіант 1 ======================================================== */

// За допомогою цикла for додаємо зображення у список:

for (let i = 0; i < images.length; i++) {
  const gallery = document.querySelector('.gallery');
  gallery.insertAdjacentHTML('beforeEnd', `
  <li>
    <img src="${images[i].url}" alt="${images[i].alt}">
  </li>
`);
};

// Створюємо та додаємо стилі для списку з зображеннями:

const style = document.createElement('style');
style.textContent = `
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style: none;
    padding: 0;
  }
  .gallery li {
    margin: 10px;
  }
  .gallery img {
    display: block;
    max-width: 300px;
    height: auto;
    border-radius: 10px;
  }
`;
document.head.append(style);

/* Варіант 2 ======================================================== */

// За допомогою перебираючого методу map та методу join створюємо розмітку зображень та  додаємо її у список за допомогою insertAdjacentHTML:

// const gallery = document.querySelector('.gallery');
// const galleryItems = images.map(image => `
//   <li>
//     <img src="${image.url}" alt="${image.alt}" />
//   </li>
// `).join('');
// gallery.insertAdjacentHTML('beforeend', galleryItems);

// Створюємо та додаємо стилі для списку з зображеннями:

// const style = document.createElement('style');
// console.log(style);
// style.textContent = `
//   .gallery {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-around;
//     list-style: none;
//     padding: 0;
//   }
//   .gallery li {
//     margin: 10px;
//   }
//   .gallery img {
//     max-width: 300px;
//     height: auto;
//     border-radius: 10px;
//   }
// `;
// document.head.append(style);