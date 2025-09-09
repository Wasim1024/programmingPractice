// Import testimonial data
import testimonials from './data.js';

//Get Dom Elements
const image = document.querySelector('img')
const testimonial = document.querySelector('h3')
const testimonialName = document.querySelector('p')
const timerElement = document.querySelector('#timer')

//current index 0
let currentIndex = 0;
let countdown = 10;
let countdownInterval;

//function to update carousel display
 
function carouselUpdate(){
    const {name, image: imageUrl, testimonial: testimonialText} = testimonials[currentIndex]
    image.src = imageUrl
    testimonial.innerText = testimonialText
    testimonialName.innerText = name
    currentIndex++
    if(currentIndex === testimonials.length) {
        currentIndex = 0
    }
    // Reset countdown
    countdown = 10;
    timerElement.innerText = countdown;
    // Start countdown
    startCountdown();
    setTimeout(()=>{
        carouselUpdate()
    },10000)
}

// Function to start the countdown
function startCountdown() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        countdown--;
        timerElement.innerText = countdown;
        if (countdown <= 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

carouselUpdate();
//update the content
