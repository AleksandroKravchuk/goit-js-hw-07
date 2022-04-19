import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgContainer = document.querySelector('.gallery');


const cardsMarkup = createImgCards(galleryItems);  
imgContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createImgCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
    }).join('');
}


imgContainer.addEventListener('click', onContainerClick);

let currentImg = '';
function onContainerClick(event) {

  if (!event.target.classList.contains('gallery__image')) {
    return;
  } event.preventDefault();
  imgContainer.addEventListener('keydown', onImageClose);
  const size = event.target.dataset.source;

  currentImg = basicLightbox.create(`
		   <img  src="${size}">
	`
  );
  currentImg.show();

}
 
  function onImageClose(event) {
  
    if (event.code === 'Escape') {
      currentImg.close();
      imgContainer.removeEventListener('keydown', onImageClose); 
    }
 
}

