// script.js
const cardContainer = document.querySelector('.card-container');

// Clone the cards to create the illusion of infinite scrolling
const cards = Array.from(cardContainer.children);
cards.forEach(card => {
    const clone = card.cloneNode(true);
    cardContainer.appendChild(clone);
});

let isScrolling = true;
const scrollSpeed = 1; // Adjust scroll speed as needed

// Function to scroll the container
function scrollContainer() {
    if (isScrolling) {
        cardContainer.scrollLeft += scrollSpeed;
        // Reset scroll position for infinite effect
        if (cardContainer.scrollLeft >= cardContainer.scrollWidth / 2) {
            cardContainer.scrollLeft = 0;
        }
    }
    requestAnimationFrame(scrollContainer);
}

// Start the scrolling
scrollContainer();

// Optional: Pause on hover
cardContainer.addEventListener('mouseenter', () => isScrolling = false);
cardContainer.addEventListener('mouseleave', () => isScrolling = true);


// script.js
const glassCards = document.querySelectorAll('.glass-card');

// Set up the intersection observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { threshold: 0.5 }); // 50% visibility threshold to trigger

// Observe each card
glassCards.forEach(card => {
    observer.observe(card);
});
