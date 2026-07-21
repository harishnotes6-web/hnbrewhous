// ==========================
// HN Brew House Script
// ==========================

// Navbar shadow on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Reveal Animation
const sections = document.querySelectorAll("section");

const reveal = () => {
    const trigger = window.innerHeight * 0.85;

    sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Smooth Hover Animation
const buttons = document.querySelectorAll(".btn,.btn2,.order-btn");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.08)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

// Coffee Card Animation
const cards = document.querySelectorAll(".coffee");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// Review Animation
const reviews = document.querySelectorAll(".review-card");

reviews.forEach(review => {

    review.addEventListener("mouseenter", () => {

        review.style.transform = "scale(1.05)";

    });

    review.addEventListener("mouseleave", () => {

        review.style.transform = "scale(1)";

    });

});

console.log("HN Brew House Website Loaded Successfully!");