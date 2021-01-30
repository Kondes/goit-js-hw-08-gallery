// Создание и рендер разметки по массиву данных и предоставленному шаблону.
import gallery__items from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
};

function createGallery(items) {
  return items
    .map(({ preview, original, description }, index) => {
      return `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        data-index="${index}"
      />
    </a>
  </li>`;
    })
    .join('');
}

const galleryList = createGallery(gallery__items);

refs.gallery.insertAdjacentHTML('beforeend', galleryList);

// Реализация делегирования на галерее ul.js-gallery
//  и получение url большого изображения.
refs.gallery.addEventListener('click', onImageClick);
function onImageClick(event) {
  event.preventDefault();
  console.log(event.target);
  // if(event.target){

  // }
}
