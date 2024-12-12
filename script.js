document.addEventListener("DOMContentLoaded", function() {
    const images = ['back.jpg', 'back2.jpg', 'back3.jpg']; // Add as many images as you like
    let currentIndex = 0;

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
    }

    setInterval(changeBackground, 5000); // Change image every 5 seconds
});


