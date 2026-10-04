const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.statement,.feature,.section-head,.download,.player-window').forEach(x=>{x.classList.add('reveal');observer.observe(x)});
document.addEventListener('pointermove',e=>{document.documentElement.style.setProperty('--mx',`${e.clientX/window.innerWidth*100}%`);document.documentElement.style.setProperty('--my',`${e.clientY/window.innerHeight*100}%`)});
