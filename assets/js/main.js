const toggle=document.querySelector('.mobile-toggle');
const menu=document.querySelector('.menu');
if(toggle){toggle.addEventListener('click',()=>menu.classList.toggle('open'))}
const year=document.querySelector('[data-year]'); if(year) year.textContent=new Date().getFullYear();
