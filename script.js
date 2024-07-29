setInterval(() => {
    const elementcroll = document.querySelector('.slideshow-container')
    const scrollPosition = elementcroll.scrollLeft
    if (scrollPosition === 0) {
        elementcroll.classList.add('highlight');
        setTimeout(() => {
            elementcroll.classList.remove('highlight');
        }, 1000);     
    }

}, 3000)