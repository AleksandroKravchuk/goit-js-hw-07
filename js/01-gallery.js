import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgContainer = document.querySelector('.gallery');
const cardsMarkup = createImgCards(galleryItems);
const imgItem = document.querySelector('.gallery__image')
imgContainer.insertAdjacentHTML('afterend', cardsMarkup);


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

function onContainerClick(event) {
   
  if (!event.target.classList.contains('gallery__link')) {
     console.log('ссылка')
   }
  
  

  
}
