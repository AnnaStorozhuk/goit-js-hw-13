/*

import '../styles.css';
import getRefs from './getRefs';
import '../images/810.gif';

const refs = getRefs();

const lightboxRef = document.querySelector('.lightbox');
const lightboxCloser = document.querySelector('.lightbox-closer');
const lightboxImage = document.querySelector('.lightbox-image');


refs.imagesContainer.addEventListener('click', onModalOpen);
lightboxCloser.addEventListener('click', onCloseBtnModal);

function onImageClick(event) {
  return event.target.dataset.source;
}

function onModalOpen(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  showPreloader();
  lightboxRef.classList.add('is-open');
  lightboxImage.onload = function () {
    removePreloader();
    onChangeLightboxImageUrl(event);
  };
}

function onCloseBtnModal() {
  lightboxRef.classList.remove('is-open');
  removeImageAtr();
}

function onChangeLightboxImageUrl(event) {
  if (lightboxRef.classList.contains('is-open')) {
    lightboxImage.src = onImageClick(event);
    // console.log(lightboxImage.src);
  }
}

function removeImageAtr() {
  lightboxImage.removeAttribute('src');
}

function showPreloader() {
  lightboxImage.classList.add('preloader');
  lightboxImage.src = '../images/810.gif';
}

function removePreloader() {
  lightboxImage.classList.remove('preloader');
}
*/


import * as basicLightbox from 'basiclightbox';
// import 'basicLightbox/dist/basicLightbox.min.css';

const createAndopenLightBox = imgSrc => {
  const instance = basicLightbox.create(`
    <img src="${imgSrc}" width="800" height="600">
`);
  instance.show();
};

const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', event => {
  const { target } = event;
  console.log(target.dataset.source);
  if (!target.dataset.source) return;

  createAndopenLightBox(target.dataset.source);
});