const visual=document.getElementById('visual');
window.addEventListener('scroll',()=>{const y=scrollY;visual.style.transform=`rotateY(${Math.sin(y/420)*4}deg) rotateX(${Math.cos(y/500)*2-2}deg) translateY(${Math.min(y,900)*.012}px)`},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
