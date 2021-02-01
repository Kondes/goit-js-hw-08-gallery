import gallery__items from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  formModal: document.querySelector('.lightbox'),
  eachImage: document.querySelector('.lightbox__image'),
  closeBtn: document.querySelector('.lightbox__button'),
  backdropRef: document.querySelector('.lightbox__overlay'),
};

const galleryList = createGallery(gallery__items);

refs.gallery.insertAdjacentHTML('beforeend', galleryList);
refs.gallery.addEventListener('click', openModal);
refs.closeBtn.addEventListener('click', closeModal);
refs.backdropRef.addEventListener('click', onBackdropClose);

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

function openModal(event) {
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

function closeModal(event) {
  event.preventDefault();
  window.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      closeModal(event);
    }
  });

  const newAttribute = '';

  refs.eachImage.setAttribute('src', newAttribute);
  refs.eachImage.setAttribute('alt', newAttribute);
  refs.eachImage.setAttribute('data-index', newAttribute);
  refs.formModal.classList.remove('is-open');
}

function onBackdropClose(event) {
  if (event.target === event.currentTarget) {
    closeModal(event);
  }
}
