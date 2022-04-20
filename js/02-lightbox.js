import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgContainer = document.querySelector('.gallery');



const cardsMarkup = createImgCards(galleryItems);  
imgContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createImgCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `
    }).join('');
}
const image = document.querySelector('.gallery__image')

let gallery = new SimpleLightbox('.gallery a');
// gallery = {
//     captionAttribute: 'alt',
//     captionsData:'alt',
// }
// gallery.defaults = {
//     captionAttribute: 'alt',
// }
console.log(gallery.defaults)