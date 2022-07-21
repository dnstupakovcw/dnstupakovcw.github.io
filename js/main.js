const navBtn = document.querySelector('.nav-button')
const mobileNav = document.querySelector('.mobile-nav')
const body = document.body;

// Click the button
navBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleMobileNav();
})

// Click on a window outside the navigation
window.addEventListener('click', function () {
    if (body.classList.contains('no-scroll')) {
        toggleMobileNav();
    }
})

// Stopping the click inside the open navigation
mobileNav.addEventListener('click', function (event) {
    event.stopPropagation();
})

function toggleMobileNav() {
    mobileNav.classList.toggle('mobile-nav-active')
    navBtn.classList.toggle('nav-button-close')
    body.classList.toggle('no-scroll')
}