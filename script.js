const switches = document.querySelectorAll('.image-switch');

const images = ['./assets/red_1.jpeg', './assets/green_1.jpeg', './assets/purple_1.jpeg', './assets/orange_1.jpeg', './assets/orange_4.jpeg', './assets/red_3.jpeg']; // Array of image URLs
const block1Element = document.getElementById('blue');
let currentIndex = 0;

console.log('test');
function changeImage(block, images) {
    console.log('change');
    block.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length; // Loop through images
}

switches.forEach((element, index) => { 
    let imageWindow = images / switches.length;
    currentIndex = index * imageWindow;
    setInterval(changeImage, 1000); // Change image every second (1000 milliseconds)

})