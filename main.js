// Navbar scroll
window.addEventListener('scroll',()=>
  document.querySelector('.navbar')?.classList.toggle('scrolled',scrollY>40));

// Burger
function toggleNav(){
  document.getElementById('navLinks').classList.toggle('open');
}

// Reveal on scroll
const ro=new IntersectionObserver(es=>es.forEach((e,i)=>{
  if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*80);ro.unobserve(e.target);}
}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

// Particles (hero only)
const pc=document.getElementById('particles');
if(pc){for(let i=0;i<25;i++){const p=document.createElement('div');p.className='particle';p.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;animation-duration:${3+Math.random()*5}s;animation-delay:${Math.random()*6}s;width:${1+Math.random()*2}px;height:${1+Math.random()*2}px;`;pc.appendChild(p);}}

// Contact form
function enviarMensaje(){
  const n=document.getElementById('cnombre')?.value.trim();
  const e=document.getElementById('cemail')?.value.trim();
  const m=document.getElementById('cmensaje')?.value.trim();
  if(!n||!e||!m){alert('Por favor completa: nombre, email y mensaje.');return;}
  document.getElementById('contactFormEl').style.display='none';
  document.getElementById('formOk').style.display='block';
}
