const imgs = document.querySelectorAll(".header-slider ul img");
const previous = document.querySelector(".previous1");
const next = document.querySelector(".next1");

let n = 0;

function changeSlide(){
    for(let i=0; i<imgs.length; i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

function nextSlide() {
    if (n < imgs.length - 1) {
        n++; 
    } else {
        n = 0; 
    }
    changeSlide();
}

function prevSlide() {
    if (n > 0) {
        n--; 
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
}

let autoSlide = setInterval(nextSlide, 5000);

next.addEventListener('click', (e) => {
    nextSlide();
    resetAutoSlide(); 
});

previous.addEventListener('click', (e) => {
    prevSlide();
    resetAutoSlide(); 
});

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 5000); 
}


changeSlide();