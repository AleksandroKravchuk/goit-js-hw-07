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
const imgItem = document.querySelector(".gallery__image");
const imgLink = document.querySelector('.gallery__link');



imgContainer.addEventListener('click', onContainerClick);


function onContainerClick(event) {

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }event.preventDefault();
  event.target.src = event.target.dataset.source;
  console.log(event.target.src);
  console.log(event.target.dataset.source);
}

// imgLink.addEventListener('click',worker)

// function worker(event) { 
//  event.preventDefault();
 
// } 
