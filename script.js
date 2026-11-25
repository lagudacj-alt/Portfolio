(function(){
var I={
HTML:'<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>',
CSS:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 9h8M8 13h5M8 17h8"/>',
JavaScript:'<path d="M8 3H6a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2"/>',
Python:'<path d="M12 3c-4 0-5 1.500-5 3v2h5v1H5c-2 0-3 2-3 4s1 4 3 4h2v-3c0-2 1-3 3-3h5c1.500 0 2-1 2-2V6c0-2-2-3-5-3z"/><path d="M12 21c4 0 5-1.500 5-3v-2h-5v-1h7c2 0 3-2 3-4s-1-4-3-4h-2v3c0 2-1 3-3 3H9c-1.500 0-2 1-2 2v5c0 2 2 3 5 3z"/>',
Django:'<path d="M8 3h4v13c-3 1-6 .5-6-3s3-4 6-3"/><path d="M16 3v3M16 9v8c0 3-1 4-4 5"/>',
MySQL:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.700 3.600 3 8 3s8-1.300 8-3V5M4 11v6c0 1.700 3.600 3 8 3s8-1.300 8-3v-6"/>',
PostgreSQL:'<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v10c0 2 3 4 7 4s7-2 7-4V6M5 11c0 1.700 3 3 7 3s7-1.300 7-3"/>',
Git:'<circle cx="6" cy="6" r="2.500"/><circle cx="6" cy="18" r="2.500"/><circle cx="18" cy="9" r="2.500"/><path d="M6 8.500v7M18 11.500c0 4-6 2-10-1"/>',
GitHub:'<circle cx="12" cy="12" r="9"/><path d="M9 20v-3c-3 1-3-2-4-2M15 20v-3c0-1 .2-1.500-.5-2.200 2.700-.3 4-1.300 4-4a3 3 0 0 0-.8-2 3 3 0 0 0 0-2s-1 0-2 .8a7 7 0 0 0-3.400 0C10 5 9 5 9 5a3 3 0 0 0 0 2 3 3 0 0 0-.8 2c0 2.700 1.300 3.700 4 4"/>'};
var g=document.getElementById('skillGrid');
var J={
'Web Development':'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
'Debugging':'<path d="M9 9a3 3 0 0 1 6 0v6a3 3 0 0 1-6 0zM3 13h4M17 13h4M4 6l3 3M20 6l-3 3M5 20l3-3M19 20l-3-3"/>',
'Testing':'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><path d="M8.500 15h7"/>',
'Project Deployment':'<path d="M12 3c4 2 6 6 5 11l-3 2h-4l-3-2c-1-5 1-9 5-11z"/><circle cx="12" cy="10" r="1.500"/><path d="M9 18l-1 3M15 18l1 3"/>',
'Soft Skills':'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-4 3-6 6-6s6 2 6 6"/><circle cx="17" cy="9" r="2.500"/><path d="M16 14c3 0 5 2 5 5"/>',
'Word':'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M8.500 11l1.500 6 2-5 2 5 1.500-6"/>',
'PowerPoint':'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M10 17v-6h2.500a1.800 1.800 0 0 1 0 3.600H10"/>',
'Excel':'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9.500 11l5 6M14.500 11l-5 6"/>'};
Object.keys(J).forEach(function(k){var d=document.createElement('div');d.className='glass skill rv';d.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true">'+J[k]+'</svg><span>'+k+'</span>';g.appendChild(d)});
document.getElementById('yr').textContent=new Date().getFullYear();

var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});

var links=[].slice.call(document.querySelectorAll('nav a'));
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('section').forEach(function(s){so.observe(s)});

var f=document.getElementById('form'),note=document.getElementById('note'),sl=document.getElementById('sl'),btn=f.querySelector('.send');
f.addEventListener('submit',function(ev){ev.preventDefault();
var n=f.n.value.trim(),e=f.e.value.trim(),m=f.m.value.trim();
if(!n||!/^\S+@\S+\.\S+$/.test(e)||!m){note.textContent='Please fill in your name, a valid email, and a message.';return}
note.textContent='';sl.textContent='SENDING…';
setTimeout(function(){btn.classList.add('done');sl.textContent='MESSAGE SENT';note.textContent='Thanks, '+n+'. Connect this form to a backend or a form service to receive messages.';f.reset();
setTimeout(function(){btn.classList.remove('done');sl.textContent='SEND MESSAGE'},3000)},900)});

var c=document.getElementById('fx'),x=c.getContext('2d'),P=[],W,H;
function rs(){W=c.width=innerWidth;H=c.height=innerHeight}
rs();addEventListener('resize',rs);
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){
var col=function(){return getComputedStyle(document.documentElement).getPropertyValue('--mint').trim()};
for(var i=0;i<46;i++)P.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.8+.4,v:Math.random()*.35+.08,d:Math.random()*.4-.2,a:Math.random()*.5+.2});
(function loop(){x.clearRect(0,0,W,H);x.fillStyle=col();
P.forEach(function(p){p.y-=p.v;p.x+=p.d;if(p.y<-5){p.y=H+5;p.x=Math.random()*W}x.globalAlpha=p.a;x.shadowBlur=10;x.shadowColor=col();x.beginPath();x.arc(p.x,p.y,p.r,0,6.283);x.fill()});
requestAnimationFrame(loop)})()}
})();
