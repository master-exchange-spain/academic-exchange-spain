const toggle = document.querySelector('.menu-toggle');
const mobile = document.querySelector('.mobile-nav');
if (toggle && mobile) toggle.addEventListener('click', () => mobile.classList.toggle('open'));
const year = document.querySelector('[data-year]'); if(year) year.textContent = new Date().getFullYear();
