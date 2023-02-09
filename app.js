/*========== SHOW MENU ==========*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* Show menu */
/* Validate if constant exists */
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
   })
};

/* Hide Menu */
/* Validate if constant exists */
if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
   })
};

/* Remove mobile menu */
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
   const navMenu = document.getElementById('nav-menu')
   //When we click on each nav-link, the show-menu class is removed
   navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction));