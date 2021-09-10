
$(document).ready(function(){
    $("#burger-container").on('click', function(){
        $(this).toggleClass("open");
        $("header nav ul").toggleClass("open");
    });
});

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const downBtn = document.querySelector('#downBtn');

//Counter
let counter = 1;
let size = carouselImages[0].clientWidth;

window.onresize = ()=> {
    size = carouselImages[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
    carouselSlide.style.transition = "none";
};

carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';

nextBtn.addEventListener('click', ()=>{
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    console.log(counter);
    carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';   
});

prevBtn.addEventListener('click', ()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';   
});

/*downBtn.addEventListener('click', ()=>{
    carouselSlide.style.transition = "transform 0.2s ease-in-out";
    carouselSlide.style.transform = 'translateY(-747px)';   
});*/



carouselSlide.addEventListener('transitionend', () => {
    if(carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';   
    }
    if(carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
    }
});

