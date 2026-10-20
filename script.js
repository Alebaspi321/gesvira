const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
const closeMenu=()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menú');document.body.style.overflow=''};
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',open);menuButton.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');document.body.style.overflow=open?'hidden':''});
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -30px'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();

const mobileHeading=document.createElement('p');
mobileHeading.className='mobile-heading';
mobileHeading.innerHTML='Tecnología para <em>hacer crecer<br>su empresa.</em>';
document.querySelector('.hero h1').after(mobileHeading);
document.querySelectorAll('.service-card').forEach((card,index)=>{
  const title=card.querySelector('h3');
  const button=document.createElement('button');
  button.type='button';button.className='service-toggle';
  button.setAttribute('aria-expanded','false');
  button.innerHTML=`<span class="service-number">0${index+1}</span><span class="service-title">${title.textContent}</span><span class="service-plus" aria-hidden="true">+</span>`;
  const description=card.querySelector('p');description.id=`service-description-${index}`;
  button.setAttribute('aria-controls',description.id);
  card.prepend(button);
  button.addEventListener('click',()=>{
    const opening=!card.classList.contains('expanded');
    document.querySelectorAll('.service-card').forEach(item=>{item.classList.remove('expanded');item.querySelector('.service-toggle').setAttribute('aria-expanded','false')});
    card.classList.toggle('expanded',opening);button.setAttribute('aria-expanded',String(opening));
  });
});
const dock=document.createElement('nav');dock.className='mobile-dock';dock.setAttribute('aria-label','Accesos rápidos');
dock.innerHTML='<a href="#inicio"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 9-8 9 8M5 10v11h5v-7h4v7h5V10"/></svg>Inicio</a><a href="#servicios"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></svg>Servicios</a><a class="dock-contact" href="#contacto"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-2 2V11.5a9.5 9.5 0 1 1 19 0Z"/><path d="M7 9h9M7 13h6"/></svg>Hablemos</a>';
document.body.append(dock);
const mobileQuery=window.matchMedia('(max-width:760px)');
const syncMenu=()=>{const closed=mobileQuery.matches&&!nav.classList.contains('open');nav.inert=closed};
menuButton.addEventListener('click',syncMenu);
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',syncMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')syncMenu()});
mobileQuery.addEventListener('change',()=>{closeMenu();syncMenu()});syncMenu();