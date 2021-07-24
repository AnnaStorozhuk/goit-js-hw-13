  
import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/dist/basicLightbox.min.css';

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