const header=document.querySelector('.site-header');
const toggle=document.querySelector('.mobile-toggle');
const menu=document.querySelector('.menu');
function onScroll(){ if(header && window.scrollY>40) header.classList.add('scrolled'); else if(header && !header.classList.contains('inner')) header.classList.remove('scrolled'); }
window.addEventListener('scroll',onScroll); onScroll();
if(toggle&&menu){toggle.addEventListener('click',()=>menu.classList.toggle('open'));}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
