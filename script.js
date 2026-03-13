// ═══════════════════════════════════════
// DATA — Edit this to change your catalog
// ═══════════════════════════════════════
const CATALOG = [
  {
    id: 'floralheart',
    title: 'Floral Heart',
    desc: 'Animated Floral Heart rive for a splash screen intro  for a dating app',
    rivFile: 'riveFiles/heart.riv',
    artboard: null,
    stateMachine: null,
    tags: [['dating','purple'],['heart','gold'],['floral anime','teal']],
    filter: 'component',
    animBg: 'anim-bg-1',
    placeholder: '💜',
    placeholderAnim: 'char',
    states: ['idle_loop','flying_intro','wing_clap','shell_toss','island_landing'],
    fileLabel: 'heart.riv',
  },
    {
    id: 'stumblecrush',
    title: 'Stumble Crush',
    desc: 'Stmble Crush app intro.',
    rivFile: 'riveFiles/stumblecrush.riv',
    artboard: null,
    stateMachine: null,
    tags: [['intro','gold'],['VFX','coral'],['logo','purple']],
    filter: 'intro',
    animBg: 'anim-bg-5',
    placeholder: '💥',
    placeholderAnim: 'particles',
    states: ['idle','stumble','crush','celebrate'],
    fileLabel: 'stumblecrush.riv',
  },
  {
    id: 'zara',
    title: 'Let\'s Get Started',
    desc: 'Onboarding animation — a welcoming intro sequence that guides users into the app experience. ',
    rivFile: 'riveFiles/letgetstarted.riv',
    artboard: null,
    stateMachine: null,
    tags: [['UI','teal'],['onboarding','blue'],['interactive','coral']],
    filter: 'generic',
    animBg: 'anim-bg-2',
    placeholder: '🌊',
    placeholderAnim: 'rings',
    states: ['idle','intro','exit'],
    fileLabel: 'letgetstarted.riv',
  },
  {
    id: 'avatar1',
    title: 'Location Avatar 1',
    desc: 'Location-to-avatar avartar reveal animation. Smooth transition from map pin to vibrant avartar preview.',
    rivFile: 'riveFiles/locationtoavatar1.riv',
    artboard: null,
    stateMachine: null,
    tags: [['character','purple'],['location','coral'],['reveal','teal']],
    filter: 'character',
    animBg: 'anim-bg-3',
    placeholder: '📍',
    placeholderAnim: 'char',
    states: ['idle','reveal','selected'],
    fileLabel: 'locationtoavatar1.riv',
  },
  {
    id: 'pink_pin',
    title: 'Pink Location Pin',
    desc: 'Animated map pin UI component in pink/coral (popup effect).',
    rivFile: 'riveFiles/pink_location_pin.riv',
    artboard: null,
    stateMachine: null,
    tags: [['UI','coral'],['map','pink'],['interactive','teal']],
    filter: 'generic',
    animBg: 'anim-bg-2',
    placeholder: '📍',
    placeholderAnim: 'rings',
    states: ['idle','pulse','active'],
    fileLabel: 'pink_location_pin.riv',
  },
  {
    id: 'splashbg',
    title: 'Splash Background',
    desc: 'Full-screen animated splash screen background. Looping ambient scene with particle effects and smooth color transitions; used on app launch.',
    rivFile: 'riveFiles/splashbg.riv',
    artboard: null,
    stateMachine: null,
    tags: [['scene','blue'],['ambient loop','purple'],['splash','gold']],
    filter: 'background',
    animBg: 'anim-bg-3',
    placeholder: '🌌',
    placeholderAnim: 'particles',
    states: ['idle_loop','transition','exit'],
    fileLabel: 'splashbg.riv',
  },
  {
    id: 'stickman',
    title: 'Stickman Character',
    desc: 'Lightweight stickman character rig for rapid prototyping and placeholder animation.',
    rivFile: 'riveFiles/stickman.riv',
    artboard: null,
    stateMachine: null,
    tags: [['character','teal'],['prototype','blue'],['lightweight','green']],
    filter: 'intro',
    animBg: 'anim-bg-4',
    placeholder: '🧍',
    placeholderAnim: 'char',
    states: ['idle','walk','jump','wave'],
    fileLabel: 'stickman.riv',
  },
  {
    id: 'youronetap',
    title: 'Your One Tap',
    desc: 'Micro-interaction animation for the one-tap onboarding gesture. Finger tap with ripple effect and glow burst — guides new users through first interaction.',
    rivFile: 'riveFiles/youronetap.riv',
    artboard: null,
    stateMachine: null,
    tags: [['UI/UX','teal'],['micro-interaction','blue'],['onboarding','green']],
    filter: 'generic',
    animBg: 'anim-bg-7',
    placeholder: '👆',
    placeholderAnim: 'rings',
    states: ['idle','tap','burst'],
    fileLabel: 'youronetap.riv',
  },
];

// ═══════════════════════════════════════
// TECH STACK DATA
// ═══════════════════════════════════════
const TECH = [
  {icon:'🎭',name:'Rive',desc:'Character animation, state machines, skeletal rigs',badge:'Core Tool',badgeColor:'rgba(240,180,41,0.1)',badgeText:'#f0b429',glow:'rgba(240,180,41,0.05)'},
  {icon:'⚛️',name:'React + TypeScript',desc:'Component-based UI with full type safety',badge:'Frontend',badgeColor:'rgba(59,130,246,0.1)',badgeText:'#60a5fa',glow:'rgba(59,130,246,0.05)'},
  {icon:'📱',name:'PWA',desc:'Progressive Web App — works offline, installs like native',badge:'Platform',badgeColor:'rgba(16,185,129,0.1)',badgeText:'#34d399',glow:'rgba(16,185,129,0.05)'},
  {icon:'🎨',name:'Photoshop',desc:'Body part isolation, layer export, PNG preparation',badge:'Asset Prep',badgeColor:'rgba(139,92,246,0.1)',badgeText:'#a78bfa',glow:'rgba(139,92,246,0.05)'},
  {icon:'🦴',name:'Skeletal Rigging',desc:'Bones, constraints, mesh deformation in Rive Editor',badge:'Animation',badgeColor:'rgba(255,107,107,0.1)',badgeText:'#ff6b6b',glow:'rgba(255,107,107,0.05)'},
  {icon:'⚡',name:'State Machines',desc:'Logic-driven animation transitions without code',badge:'Rive Feature',badgeColor:'rgba(0,212,170,0.1)',badgeText:'#00d4aa',glow:'rgba(0,212,170,0.05)'},
];

// ═══════════════════════════════════════
// CURSOR
// ═══════════════════════════════════════
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{
  mx=e.clientX; my=e.clientY;
  cursor.style.left=mx+'px'; cursor.style.top=my+'px';
});
function animRing(){
  rx+=(mx-rx)*.12; ry+=(my-ry)*.12;
  cursorRing.style.left=rx+'px'; cursorRing.style.top=ry+'px';
  requestAnimationFrame(animRing);
}
animRing();
document.querySelectorAll('a,button,.card-item,.pill').forEach(el=>{
  el.addEventListener('mouseenter',()=>document.body.classList.add('cursor-grow'));
  el.addEventListener('mouseleave',()=>document.body.classList.remove('cursor-grow'));
});

// ═══════════════════════════════════════
// NAV SCROLL
// ═══════════════════════════════════════
window.addEventListener('scroll',()=>{
  document.getElementById('nav').classList.toggle('scrolled',window.scrollY>40);
});

// ═══════════════════════════════════════
// MARQUEE
// ═══════════════════════════════════════
const marqueeItems = [
  'Rive Animation','React TypeScript','PWA Integration','Skeletal Rigging',
  'State Machines','Character Design','Reward Systems','Preschool EdTech',
  'Interactive UX','Caribbean Characters','CorelDraw','Body Part Rigs',
];
const track = document.getElementById('marquee-track');
const doubled = [...marqueeItems,...marqueeItems];
doubled.forEach(t=>{
  const el = document.createElement('div');
  el.className='marquee-item';
  el.innerHTML=`<span>✦</span>${t}`;
  track.appendChild(el);
});

// ═══════════════════════════════════════
// PLACEHOLDER ANIMATIONS
// ═══════════════════════════════════════
function buildPlaceholder(item, wrap){
  wrap.className=`anim-canvas ${item.animBg}`;
  if(item.placeholderAnim==='char'){
    const el=document.createElement('div');
    el.className='char-silhouette';
    el.textContent=item.placeholder;
    wrap.appendChild(el);
    // floating orbs behind
    for(let i=0;i<3;i++){
      const o=document.createElement('div');
      o.className='float-orb';
      o.style.cssText=`left:${20+i*30}%;top:${20+i*20}%;animation-delay:-${i*1.5}s;`;
      wrap.insertBefore(o,el);
    }
  } else if(item.placeholderAnim==='rings'){
    const el=document.createElement('div');
    el.className='char-silhouette';
    el.textContent=item.placeholder;
    wrap.appendChild(el);
    for(let i=0;i<3;i++){
      const r=document.createElement('div');
      r.className='ring-pulse';
      r.style.cssText=`position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);animation-delay:-${i*0.8}s;`;
      wrap.insertBefore(r,el);
    }
  } else if(item.placeholderAnim==='particles'){
    const el=document.createElement('div');
    el.className='char-silhouette';
    el.textContent=item.placeholder;
    wrap.appendChild(el);
    const colors=['#f0b429','#00d4aa','#8b5cf6','#ff6b6b','#3b82f6'];
    for(let i=0;i<16;i++){
      const p=document.createElement('div');
      p.className='particle';
      p.style.cssText=`left:${Math.random()*90}%;top:${Math.random()*90}%;
        background:${colors[i%colors.length]};
        animation-delay:-${Math.random()*4}s;
        animation-duration:${3+Math.random()*3}s;`;
      wrap.insertBefore(p,el);
    }
  }
}

// ═══════════════════════════════════════
// LOAD RIVE (if .riv file provided)
// ═══════════════════════════════════════

// Rive CDN exposes window.rive (namespace) with .Rive class, OR window.Rive directly.
// Support both to handle any CDN version.
function getRiveClass(){
  if(typeof window.rive !== 'undefined' && window.rive.Rive) return window.rive.Rive;
  if(typeof window.Rive !== 'undefined') return window.Rive;
  return null;
}

function safeResize(rInst){
  try{ if(rInst && typeof rInst.resizeDrawingSurfaceToCanvas==='function') rInst.resizeDrawingSurfaceToCanvas(); }catch(_){}
}

function loadRive(item, canvasEl){
  if(!item.rivFile) return;
  const RiveClass = getRiveClass();
  if(!RiveClass){
    console.error('Rive runtime not found. Check CDN script tag.');
    return;
  }
  try{
    // Set canvas pixel dimensions to match its CSS display size (required by Rive)
    const dpr = window.devicePixelRatio || 1;
    const rect = canvasEl.parentElement.getBoundingClientRect();
    const w = rect.width  || canvasEl.parentElement.offsetWidth  || 400;
    const h = rect.height || canvasEl.parentElement.offsetHeight || 300;
    canvasEl.width  = Math.round(w * dpr);
    canvasEl.height = Math.round(h * dpr);

    const riveParams = {
      src: item.rivFile,
      canvas: canvasEl,
      autoplay: true,
      onLoadError: (e) => console.warn('Rive load error for', item.id, e),
      onLoad: () => safeResize(r),
    };
    // Only pass artboard/stateMachines if explicitly set (non-null)
    if(item.artboard) riveParams.artboard = item.artboard;
    if(item.stateMachine) riveParams.stateMachines = item.stateMachine;

    const r = new RiveClass(riveParams);

    // Keep canvas sharp if container is resized
    const ro = new ResizeObserver(() => {
      const p = canvasEl.parentElement;
      if(!p) return;
      canvasEl.width  = Math.round(p.offsetWidth  * dpr);
      canvasEl.height = Math.round(p.offsetHeight * dpr);
      safeResize(r);
    });
    ro.observe(canvasEl.parentElement);
  }catch(e){ console.warn('Rive load failed for',item.id,e); }
}

// ═══════════════════════════════════════
// BUILD CATALOG
// ═══════════════════════════════════════
const tagClasses={purple:'tag-purple',teal:'tag-teal',coral:'tag-coral',gold:'tag-gold',blue:'tag-blue',pink:'tag-pink',green:'tag-green'};

function buildCatalog(items){
  const container = document.getElementById('catalog');
  container.innerHTML='';
  items.forEach((item,i)=>{
    const card=document.createElement('div');
    card.className='card-item reveal';
    card.style.transitionDelay=`${i*0.06}s`;
    card.dataset.filter=item.filter;

    const wrap=document.createElement('div');
    wrap.className='card-canvas-wrap';

    let innerEl;
    if(item.rivFile){
      // Real Rive canvas
      const canvas=document.createElement('canvas');
      canvas.className='rive-canvas';
      wrap.appendChild(canvas);
      innerEl=canvas;
    } else {
      // CSS placeholder
      const ph=document.createElement('div');
      buildPlaceholder(item,ph);
      wrap.appendChild(ph);
    }

    // Hover overlay
    const overlay=document.createElement('div');
    overlay.className='card-overlay';
    overlay.innerHTML=`<div class="overlay-play">▶ View Animation</div>`;
    wrap.appendChild(overlay);

    // Tags
    const tagHTML=item.tags.map(([t,c])=>`<span class="tag ${tagClasses[c]||'tag-teal'}">${t}</span>`).join('');

    // States pills
    const stateHTML=item.states.map(s=>`<span class="tag tag-blue">${s}</span>`).join('');

    card.innerHTML=``;
    card.appendChild(wrap);
    const body=document.createElement('div');
    body.className='card-body';
    body.innerHTML=`
      <div class="card-tags">${tagHTML}</div>
      <div class="card-title">${item.title}</div>
      <div class="card-desc">${item.desc}</div>
      <div class="card-meta">
        <div class="card-file">${item.fileLabel}</div>
        <div class="card-arrow">→</div>
      </div>
    `;
    card.appendChild(body);
    container.appendChild(card);

    // Load Rive after layout has been computed
    if(item.rivFile && innerEl){
      requestAnimationFrame(() => loadRive(item, innerEl));
    }

    // Click → modal
    card.addEventListener('click',()=>openModal(item));
  });

  // re-observe
  observeReveal();
}

buildCatalog(CATALOG);

// ═══════════════════════════════════════
// FILTER PILLS
// ═══════════════════════════════════════
document.querySelectorAll('.pill').forEach(pill=>{
  pill.addEventListener('click',()=>{
    document.querySelectorAll('.pill').forEach(p=>p.classList.remove('active'));
    pill.classList.add('active');
    const f=pill.dataset.filter;
    buildCatalog(f==='all'?CATALOG:CATALOG.filter(c=>c.filter===f));
  });
});

// ═══════════════════════════════════════
// TECH GRID
// ═══════════════════════════════════════
const techGrid=document.getElementById('tech-grid');
TECH.forEach((t,i)=>{
  const c=document.createElement('div');
  c.className=`tech-card reveal reveal-delay-${(i%4)+1}`;
  c.style.setProperty('--glow-color',t.glow);
  c.innerHTML=`
    <span class="tech-icon">${t.icon}</span>
    <div class="tech-name">${t.name}</div>
    <div class="tech-desc">${t.desc}</div>
    <span class="tech-badge" style="background:${t.badgeColor};color:${t.badgeText};">${t.badge}</span>
  `;
  techGrid.appendChild(c);
});

// ═══════════════════════════════════════
// MODAL
// ═══════════════════════════════════════
const modal=document.getElementById('modal');
const modalClose=document.getElementById('modal-close');
let modalRive=null;

function openModal(item){
  document.getElementById('modal-title').textContent=item.title;
  document.getElementById('modal-desc').textContent=item.desc;
  document.getElementById('modal-tags').innerHTML=
    item.tags.map(([t,c])=>`<span class="tag ${tagClasses[c]||'tag-teal'}">${t}</span>`).join('');
  document.getElementById('modal-details').innerHTML=`
    <div class="detail-item"><label>File</label><span>${item.fileLabel}</span></div>
    <div class="detail-item"><label>States</label><span>${item.states.length}</span></div>
    <div class="detail-item"><label>Category</label><span>${item.filter}</span></div>
  `;
  const wrap=document.getElementById('modal-canvas-wrap');
  wrap.innerHTML='';
  if(item.rivFile){
    const canvas=document.createElement('canvas');
    canvas.style.cssText='width:100%;height:100%;display:block;';
    wrap.appendChild(canvas);
    loadRive(item,canvas);
  } else {
    buildPlaceholder(item,wrap);
  }
  modal.classList.add('open');
  document.body.style.overflow='hidden';
}

function closeModal(){
  modal.classList.remove('open');
  document.body.style.overflow='';
  setTimeout(()=>{ document.getElementById('modal-canvas-wrap').innerHTML=''; },300);
}
modalClose.addEventListener('click',closeModal);
modal.addEventListener('click',e=>{ if(e.target===modal) closeModal(); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeModal(); });

// ═══════════════════════════════════════
// SCROLL REVEAL
// ═══════════════════════════════════════
function observeReveal(){
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
  },{threshold:0.08});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}
observeReveal();

// ═══════════════════════════════════════
// COUNTER ANIMATION
// ═══════════════════════════════════════
const counters=document.querySelectorAll('[data-count]');
const cio=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const el=e.target;
      const target=+el.dataset.count;
      let cur=0;
      const inc=target/40;
      const t=setInterval(()=>{
        cur=Math.min(cur+inc,target);
        el.textContent=Math.round(cur)+(target>10?'+':'');
        if(cur>=target) clearInterval(t);
      },30);
      cio.unobserve(el);
    }
  });
},{threshold:0.5});
counters.forEach(c=>cio.observe(c));