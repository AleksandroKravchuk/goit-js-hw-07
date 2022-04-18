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
   
    console.log(event.target.classList.contains('gallery__image'));
  
  

  
}
 

// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
//         <input placeholder="Type something">
//         <a>Close</a>
//     </div>
// `, {
//     onShow: (instance) => {
//         instance.element().querySelector('a').onclick = instance.close
//     }
// })

// instance.show()