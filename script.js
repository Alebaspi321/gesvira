const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
const closeMenu=()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menú');document.body.style.overflow=''};
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',open);menuButton.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');document.body.style.overflow=open?'hidden':''});
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -30px'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();