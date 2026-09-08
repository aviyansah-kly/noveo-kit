const nav=document.querySelector('.nav'),btn=document.querySelector('.menu-btn');if(btn)btn.addEventListener('click',()=>nav.classList.toggle('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
