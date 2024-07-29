let startX = 0;
let translateX = 0;

const container = document.querySelector('.slideshow-container');
const slides = document.querySelector('.slides');

/*container.addEventListener('mousedown', startDrag);
container.addEventListener('touchstart', startDrag);*/

function startDrag(event) {
    event.preventDefault();
    startX = event.pageX || event.touches[0].pageX;
    container.addEventListener('mousemove', drag);
    container.addEventListener('touchmove', drag);
    container.addEventListener('mouseup', endDrag);
    container.addEventListener('touchend', endDrag);
}

function drag(event) {
    let currentX = event.pageX || event.touches[0].pageX;
    translateX = translateX + currentX - startX;
    startX = currentX;
    const sizeSlide = slides.clientWidth
    if(sizeSlide > currentX && currentX > 0){

        slides.style.transform = `translateX(${translateX}px)`;
    }
}

function endDrag(event) {
    container.removeEventListener('mousemove', drag);
    container.removeEventListener('touchmove', drag);
    container.removeEventListener('mouseup', endDrag);
    container.removeEventListener('touchend', endDrag);
}