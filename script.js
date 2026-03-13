// ═══════════════════════════════════════
// DATA — Edit this to change your catalog
// ═══════════════════════════════════════
const CATALOG = [
  {
    id: 'kai',
    title: 'Kai the Parrot',
    desc: 'Main mascot character for Smash My Preschool. Full skeletal rig with idle breathing, flying intro, wing clap celebration, and shell toss reward burst. 6 body-part layers, state machine driven.',
    // CHANGE THIS: point to your actual .riv file path, e.g. '/riv/kai_idle.riv'
    rivFile: null,
    artboard: 'Kai',
    stateMachine: 'KaiStateMachine',
    tags: [['character','purple'],['main mascot','gold'],['skeletal rig','teal']],
    filter: 'character',
    animBg: 'anim-bg-1',
    placeholder: '🦜',
    placeholderAnim: 'char',
    states: ['idle_loop','flying_intro','wing_clap','shell_toss','island_landing'],
    fileLabel: 'kai_idle.riv',
  },
  {
    id: 'zara',
    title: 'Zara — Sea Explorer',
    desc: 'Caribbean girl explorer with jump-spin celebration, high-five interaction, and treasure chest reveal. Human child proportions optimised for preschool age 2–5.',
    rivFile: null,
    artboard: 'Zara',
    stateMachine: 'ZaraStateMachine',
    tags: [['character','purple'],['human child','coral'],['interactive','blue']],
    filter: 'character',
    animBg: 'anim-bg-2',
    placeholder: '🌊',
    placeholderAnim: 'rings',
    states: ['idle','jump_spin','high_five','chest_reveal'],
    fileLabel: 'zara.riv',
  },
  {
    id: 'turtle',
    title: 'Turtle Buddy — Barbados',
    desc: 'Island mascot for Coral Island (Barbados). Idle blinking loop, friendly wave, and celebrate burst. 3 animations, fully rigged.',
    rivFile: null,
    artboard: 'TurtleBuddy',
    stateMachine: 'TurtleStateMachine',
    tags: [['mascot','green'],['Barbados','teal'],['ambient','blue']],
    filter: 'mascot',
    animBg: 'anim-bg-3',
    placeholder: '🐢',
    placeholderAnim: 'char',
    states: ['idle_blink','wave','celebrate'],
    fileLabel: 'turtle_buddy.riv',
  },
  {
    id: 'chest',
    title: 'Daily Treasure Chest',
    desc: 'Reward UI component with 4 states: locked, available (glowing aura), opening (light rays burst), and claimed (empty sparkle). Driven by a single state machine.',
    rivFile: null,
    artboard: 'TreasureChest',
    stateMachine: 'ChestStateMachine',
    tags: [['UI reward','gold'],['state machine','purple'],['4 states','teal']],
    filter: 'ui',
    animBg: 'anim-bg-4',
    placeholder: '💰',
    placeholderAnim: 'particles',
    states: ['locked','available','opening','claimed'],
    fileLabel: 'treasure_chest.riv',
  },
  {
    id: 'malik',
    title: 'Malik — Carnival Star',
    desc: 'Energetic Caribbean boy with drum beat celebration, samba dance loop, and confetti explosion. Custom feather headband with separate bone chain.',
    rivFile: null,
    artboard: 'Malik',
    stateMachine: 'MalikStateMachine',
    tags: [['character','purple'],['dance','pink'],['carnival','coral']],
    filter: 'character',
    animBg: 'anim-bg-5',
    placeholder: '🥁',
    placeholderAnim: 'char',
    states: ['idle','drum_beat','dance_loop','confetti_burst'],
    fileLabel: 'malik.riv',
  },
  {
    id: 'correct',
    title: 'Correct Answer Burst',
    desc: 'Reusable feedback animation — large green checkmark with star burst ring, golden sparkle particles, and confetti shower. Used across all 9 game templates in the PWA.',
    rivFile: null,
    artboard: 'CorrectBurst',
    stateMachine: 'FeedbackStateMachine',
    tags: [['UI/VFX','teal'],['reusable','green'],['game feedback','blue']],
    filter: 'ui',
    animBg: 'anim-bg-6',
    placeholder: '✅',
    placeholderAnim: 'rings',
    states: ['idle','burst','exit'],
    fileLabel: 'correct_burst.riv',
  },
  {
    id: 'barbados',
    title: 'Barbados — Coral Island Scene',
    desc: 'Living background for Island 1. Animated ocean wave loop, turtle idle, coral sway, and tropical fish swim — all as separate Rive layers stacked behind HTML UI.',
    rivFile: null,
    artboard: 'BarbadosScene',
    stateMachine: 'SceneStateMachine',
    tags: [['scene','blue'],['ambient loop','teal'],['Barbados','coral']],
    filter: 'scene',
    animBg: 'anim-bg-7',
    placeholder: '🏝️',
    placeholderAnim: 'particles',
    states: ['ambient_loop','active','celebration'],
    fileLabel: 'barbados_scene.riv',
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
  'Interactive UX','Caribbean Characters','Island Scenes','Body Part Rigs',
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
function loadRive(item, canvasEl){
  if(!item.rivFile) return;
  try{
    new Rive({
      src: item.rivFile,
      canvas: canvasEl,
      artboard: item.artboard||undefined,
      stateMachines: item.stateMachine,
      autoplay: true,
      fit: Rive.Fit.Contain,
      alignment: Rive.Alignment.Center,
    });
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

    // Load Rive if file provided
    if(item.rivFile && innerEl) loadRive(item, innerEl);

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