document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev_button');
    const nextButton = document.querySelector('.next_button');
    const camera = document.querySelector('.flicking-camera');
    let scrollAmount = 0;

    nextButton.addEventListener('click', function () {
        scrollAmount -= 200;
        camera.style.transform = `translateX(${scrollAmount}px)`;
    });

    prevButton.addEventListener('click', function () {
        scrollAmount += 200;
        if (scrollAmount > 0) scrollAmount = 0; // Prevent scrolling past the first item
        camera.style.transform = `translateX(${scrollAmount}px)`;
    });
});
