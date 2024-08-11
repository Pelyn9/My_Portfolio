document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const items = document.querySelectorAll('.slider .list .item');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const thumbnails = document.querySelectorAll('.thumbnail .item');

    // Configuration parameters
    const countItem = items.length;
    let itemActive = 0;
    let refreshInterval;

    // Function to show the slider item based on the current index
    function showSlider() {
        // Remove 'active' class from old items
        const itemActiveOld = document.querySelector('.slider .list .item.active');
        const thumbnailActiveOld = document.querySelector('.thumbnail .item.active');

        if (itemActiveOld) {
            itemActiveOld.classList.remove('active');
        }

        if (thumbnailActiveOld) {
            thumbnailActiveOld.classList.remove('active');
        }

        // Add 'active' class to the new items
        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');

        // Reset auto-run interval
        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => {
            nextButton.click();
        }, 5000);
    }

    // Event handler for the 'next' button
    nextButton.onclick = () => {
        itemActive = (itemActive + 1) % countItem;
        showSlider();
    }

    // Event handler for the 'prev' button
    prevButton.onclick = () => {
        itemActive = (itemActive - 1 + countItem) % countItem;
        showSlider();
    }

    // Auto-run the slider
    refreshInterval = setInterval(() => {
        nextButton.click();
    }, 5000);

    // Event handler for clicking on thumbnails
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            itemActive = index;
            showSlider();
        });
    });

    // Initialize the first slider item
    showSlider();
});
