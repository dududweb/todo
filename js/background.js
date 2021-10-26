const images = ["0.jpg","1.jpg","2.jpg","3.jpg"];

const todaysImages = images[Math.floor(Math.random()*images.length)];
console.log(todaysImages);

const bgImage = document.createElement("img");

bgImage.src = `img/${todaysImages}`

document.body.appendChild(bgImage);