// Создание и рендер разметки по массиву данных и предоставленному шаблону.
import gallery__items from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  formModal: document.querySelector('.lightbox'),
  eachImage: document.querySelector('.lightbox__image'),
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

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const largeImage = event.target.dataset.source;
  const descriptionImage = event.target.alt;
  const dataIndex = event.target.dataset.index;

  refs.eachImage.setAttribute('src', largeImage);
  refs.eachImage.setAttribute('alt', descriptionImage);
  refs.eachImage.setAttribute('data-index', dataIndex);
  refs.formModal.classList.add('is-open');
}
refs.gallery.addEventListener('click', onImageClick);


