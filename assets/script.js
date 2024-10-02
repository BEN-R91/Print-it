const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const arrowRight = document.getElementById('arrowRight');
const arrowLeft = document.getElementById('arrowLeft');
const currentImage = document.getElementById('currentImage');
const tagLine = document.getElementById('tagLine');
const dotsContainer = document.querySelector('.dots'); 
let currentIndex = 0; 

function createDots() {
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) {
            dot.classList.add('dot_selected'); 
        }
        dotsContainer.appendChild(dot); 
    });
}

function updateDots(index) {
    const dots = document.querySelectorAll('.dot'); 
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

function updateSlide(index) { 
    const slide = slides[index];
    currentImage.src = `./assets/images/slideshow/${slide.image}`;
    tagLine.innerHTML = slide.tagLine;
    updateDots(index); 
}

function showNextImage() { 
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex); 
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
    updateSlide(currentIndex); 
}

arrowRight.addEventListener('click', showNextImage);
arrowLeft.addEventListener('click', showPreviousImage);

createDots();

updateSlide(currentIndex);
