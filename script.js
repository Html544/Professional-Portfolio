const images = [
    'https://via.placeholder.com//portfolio/im/images (1).jpeg?text=Background+1',
    'https://via.placeholder.com/?text=Background+2',
    'https://via.placeholder.com/1920x1080.png?text=Background+3',
    'https://via.placeholder.com/1920x1080.png?text=Background+4'
    // Add more image URLs as needed
];

let index = 0;

function changeBackgroundImage() {
  document.body.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}

// Change image every second (1000 milliseconds)
setInterval(changeBackgroundImage, 1000);

// Initial background image
changeBackgroundImage();
