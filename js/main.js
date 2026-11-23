/* Ram Srungeri portfolio — page logic (routing, animations, copy buttons). Text lives in content.js and index.html. */
document.documentElement.classList.add('js');

/* ---------------- render helpers ---------------- */
const esc = s => s; // content above is trusted, authored copy
const thumbs = {
  cm:()=>`<div class="thumb thumb-img"><img src="images/thumb-control-monitoring.webp" alt="Three Control Monitoring screens layered in perspective: control list, control detail with the Collect, Analyze, Review, Approve steps, and an issue summary" width="1280" height="800" loading="lazy"></div>`,
  ppb:()=>`<div class="thumb thumb-img"><img src="images/thumb-perspective-policy.webp" alt="Add Perspective Policy flow, stitched into one tilted scroll: general info, location tree, rule builder and validated rules" width="1280" height="800" loading="lazy"></div>`,
  iq:()=>`<div class="thumb thumb-img"><img src="images/thumb-infoblox-iq.webp" alt="Three Infoblox IQ panels fanned out: deviation detected, root cause analysis, and guided mitigation steps" width="1280" height="800" loading="lazy"></div>`
};
function projRow(id, i){
  const c = CASES[id];
  return `<article class="proj reveal">
    <div>
      <p class="meta">${c.meta}</p>
      <h3><a href="#${id}">${c.title}</a></h3>
      <p>${c.card}</p>
      <div class="chips">${c.chips.map(([n,l])=>`<span class="chip"><b>${n}</b>${l}</span>`).join('')}</div>
      <span class="more" aria-hidden="true">View project <span class="arr">↗</span></span>
    </div>
    ${thumbs[c.thumb]()}
  </article>`;
}
const closerHTML = `<div class="closer dark reveal"><h2 class="h-lg">Have a complicated product?</h2><p>I'm looking for senior product design roles and the occasional consulting project where the domain is hard and the data is big. Let's talk.</p><div class="cta-row"><a class="btn btn-dark" href="#contact">Get in touch</a><a class="btn btn-ghost" href="#work">See the work <span class="arr" aria-hidden="true">→</span></a></div></div>`;

const galleries = {};
function slots(list){
  if(!list || !list.length) return '';
  list.forEach(l => { if(l[6]) galleries[l[3]] = l[6]; });
  const fig = ([file,desc,cap,src,alt,fit,slides]) => src
    ? `<figure class="slot" style="margin:0"><a class="shot${fit==='contain'?' shot--contain':''}${slides?' shot--gallery':''}"${slides?` data-gallery="${src}"`:''} href="${src}" aria-haspopup="dialog" aria-label="View full-size image: ${desc}"><img src="${src}" alt="${alt||desc}" loading="lazy">${slides?`<span class="shot-badge" aria-hidden="true">${slides.length} screens · view</span>`:''}</a><figcaption>${cap}</figcaption></figure>`
    : `<figure class="slot" style="margin:0"><div class="box" role="img" aria-label="Image placeholder: ${desc}"><div><b>${file}</b>${desc}</div></div><figcaption>${cap}</figcaption></figure>`;
  return list.length === 1 ? `<div style="margin-top:28px">${fig(list[0])}</div>` : `<div class="slots2">${list.map(fig).join('')}</div>`;
}
function statTile([n,l,draft]){ return `<div class="stat"${draft?' data-draft title="Working estimate. Replace with a confirmed figure."':''}><b>${n}</b><span>${l}</span>${draft?'<span class="sr">(estimate, to be confirmed)</span>':''}</div>`; }

function renderCase(id){
  const c = CASES[id], nx = CASES[c.next];
  const toc = [[`impact`,`TL;DR & impact`],[`discovery`,`Problem discovery`],[`tradeoffs`,`Design trade-offs`],[`rationale`,`Solution rationale`],[`learned`,`What I learned`]];
  return `
  <div class="dark"><div class="wrap">
    <header class="cs-head">
      <a class="back" href="#work"><span aria-hidden="true">←</span> All work</a>
      <p class="eyebrow" style="margin-bottom:10px">${c.meta}</p>
      <h1 class="h-xl" tabindex="-1">${c.title}</h1>
      <p class="lede">${c.lede}</p>
      <dl class="cs-facts">${c.facts.map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
    </header>
  </div></div>
  <div class="wrap">
    <div class="cs-body">
      <nav class="toc" aria-label="On this page"><b>On this page</b><ol>${toc.map(([k,l])=>`<li><button type="button" data-goto="${k}">${l}</button></li>`).join('')}</ol></nav>
      <div>
        <section class="cs-sec" id="s-impact" aria-labelledby="h-impact">
          <div class="tldr"><span class="num">TL;DR</span><p>${c.tldr}</p></div>
          <div class="inum">
            <h2 id="h-impact">Impact in numbers</h2>
            <p class="sub">${c.impactSub}</p>
            ${c.impact.map(g=>`<div class="ig reveal"><span class="tag">${g.tag}</span><h3>${g.h}</h3><div class="stats">${g.stats.map(statTile).join('')}</div><p class="read">${g.read}</p></div>`).join('')}
            <div class="compare reveal"><div class="wo"><h3>Without this work</h3><ul>${c.without.map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="wi"><h3>With it</h3><ul>${c.withIt.map(x=>`<li>${x}</li>`).join('')}</ul></div></div>
            <div class="takeaway reveal"><span class="num">The takeaway</span><h3>${c.takeaway[0]}</h3><p>${c.takeaway[1]}</p></div>
          </div>
        </section>

        <section class="cs-sec" id="s-discovery" aria-labelledby="h-disc">
          <span class="num">01 · Problem discovery</span>
          <h2 id="h-disc">${c.disc.h}</h2><p class="sub">${c.disc.sub}</p>
          <h3 class="sub-h">What stakeholders brought</h3>
          <dl class="stake">${c.disc.stake.map(([r,q])=>`<div class="reveal"><dt>${r}</dt><dd>“${q}”</dd></div>`).join('')}</dl>
          <h3 class="sub-h">What I observed</h3>
          <ul class="obs">${c.disc.obs.map(o=>`<li>${o}</li>`).join('')}</ul>
          <div class="shift reveal"><div class="from"><small>The ask</small>${c.disc.ask}</div><span class="ar" aria-hidden="true">→</span><div class="to"><small>The actual problem</small>${c.disc.actual}</div></div>
          <div class="ps reveal"><small>Problem statement</small><p>${c.disc.ps}</p></div>
          ${slots(c.disc.slots)}
        </section>

        <section class="cs-sec" id="s-tradeoffs" aria-labelledby="h-trade">
          <span class="num">02 · Design trade-offs</span>
          <h2 id="h-trade">${c.trade.h}</h2><p class="sub">${c.trade.sub}</p>
          ${c.trade.d.map((d,i)=>`<article class="dec reveal"><span class="num">Decision ${i+1}</span><h3>${d.q}</h3>
            <div class="opts">${d.o.map(([ch,t,x])=>`<div class="opt ${ch?'c':'x'}"><small>${ch?'Chosen':'Explored'}</small><b>${t}</b>${x}</div>`).join('')}</div>
            <dl class="whycost"><div><dt>Why</dt><dd>${d.why}</dd></div><div><dt>What it cost</dt><dd>${d.cost}</dd></div></dl></article>`).join('')}
          ${slots(c.trade.slots)}
        </section>

        <section class="cs-sec" id="s-rationale" aria-labelledby="h-why">
          <span class="num">03 · Solution rationale</span>
          <h2 id="h-why">${c.why.h}</h2><p class="sub">${c.why.sub}</p>
          ${c.why.pre?`<div class="extra">${c.why.pre}</div>`:''}
          <div class="pts">${c.why.pts.map(([k,h,p])=>`<div class="pt reveal"><small>${k}</small><h3>${h}</h3><p>${p}</p></div>`).join('')}</div>
          ${c.why.extra?`<div class="extra">${c.why.extra}</div>`:''}
          ${slots(c.why.slots)}
        </section>

        <section class="cs-sec" id="s-learned" aria-labelledby="h-learn">
          <span class="num">04 · What I learned</span>
          <h2 id="h-learn">Three things I'd carry forward.</h2>
          <ol class="learn">${c.learned.map(([b,t])=>`<li><p><b>${b}</b> ${t}</p></li>`).join('')}</ol>
          <a class="next" href="#${c.next}" style="margin-top:40px"><small>Next case study</small><b>${nx.title} <span class="arr" aria-hidden="true">→</span></b><p>${nx.card}</p></a>
        </section>
      </div>
    </div>
    ${closerHTML.replace('closer reveal','closer reveal" style="margin-top:72px')}
  </div>`;
}

/* ---------------- mount static bits ---------------- */
document.querySelectorAll('[data-projects]').forEach(el => el.innerHTML = ORDER.map(projRow).join(''));
document.querySelectorAll('[data-closer]').forEach(el => el.innerHTML = closerHTML);

/* ---------------- router ---------------- */
const views = [...document.querySelectorAll('.view')];
const caseEl = document.getElementById('case');
let spy;
function route(){
  let id = (location.hash || '#home').slice(1);
  if(id === 'main') return;
  if(!['home','work','about','contact'].includes(id) && !CASES[id]) id = 'home';
  let view;
  if(CASES[id]){ caseEl.innerHTML = renderCase(id); caseEl.dataset.title = `${CASES[id].title} · Case study · Ram Srungeri`; view = caseEl; }
  else view = document.querySelector(`[data-view="${id}"]`);
  views.forEach(v => v.classList.toggle('on', v === view));
  document.title = view.dataset.title;
  const navKey = CASES[id] ? 'work' : id;
  document.querySelectorAll('[data-nav]').forEach(a => a.dataset.nav === navKey ? a.setAttribute('aria-current','page') : a.removeAttribute('aria-current'));
  window.scrollTo({top:0, behavior:'instant'});
  const h1 = view.querySelector('h1');
  if(h1 && route.ran) h1.focus({preventScroll:true});
  route.ran = true;
  observeReveals(view);
  if(CASES[id]) setupToc(view);
}
window.addEventListener('hashchange', route);

/* ---------------- scroll reveals ---------------- */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }), {rootMargin:'0px 0px -8% 0px'}) : null;
function observeReveals(root){
  root.querySelectorAll('.reveal:not(.in)').forEach((el,i) => {
    if(!io || reduce){ el.classList.add('in'); return; }
    el.style.transitionDelay = (el.parentElement.classList.contains('metrics') ? i*70 : 0) + 'ms';
    io.observe(el);
  });
}

/* ---------------- case study TOC ---------------- */
function setupToc(root){
  const btns = [...root.querySelectorAll('[data-goto]')];
  btns.forEach(b => b.addEventListener('click', () => {
    const t = root.querySelector('#s-' + b.dataset.goto);
    t.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block:'start'});
    const h = t.querySelector('h2'); if(h){ h.setAttribute('tabindex','-1'); h.focus({preventScroll:true}); }
  }));
  if(spy) spy.disconnect();
  if(!('IntersectionObserver' in window)) return;
  spy = new IntersectionObserver(es => {
    es.forEach(e => { if(e.isIntersecting){
      const k = e.target.id.slice(2);
      btns.forEach(b => b.setAttribute('aria-current', String(b.dataset.goto === k)));
      const cur = btns.find(b => b.dataset.goto === k);
      const toc = root.querySelector('.toc');
      if(cur && toc.scrollWidth > toc.clientWidth) toc.scrollTo({left: cur.offsetLeft - 20, behavior: reduce ? 'auto' : 'smooth'});
    }});
  }, {rootMargin:'-30% 0px -60% 0px'});
  root.querySelectorAll('.cs-sec').forEach(s => spy.observe(s));
  btns[0].setAttribute('aria-current','true');
}

/* ---------------- hero: rotating line + portrait tilt ---------------- */
(function(){
  const spans = [...document.querySelectorAll('.rot span')];
  if(reduce || spans.length < 2) return;
  let i = 0;
  setInterval(() => { spans[i].classList.remove('cur'); i = (i+1) % spans.length; spans[i].classList.add('cur'); }, 2600);
})();
(function(){
  const fig = document.getElementById('portrait'), img = fig && fig.querySelector('img');
  if(!img || reduce || !matchMedia('(hover:hover)').matches) return;
  fig.addEventListener('pointermove', e => {
    const r = fig.getBoundingClientRect(), x = (e.clientX - r.left)/r.width - .5, y = (e.clientY - r.top)/r.height - .5;
    img.style.transform = `perspective(900px) rotateY(${x*6}deg) rotateX(${-y*6}deg) scale(1.015)`;
  });
  fig.addEventListener('pointerleave', () => img.style.transform = '');
})();

/* ---------------- copy buttons ---------------- */
const toast = document.getElementById('toast');
function say(msg){ toast.textContent = msg; toast.classList.add('show'); clearTimeout(say.t); say.t = setTimeout(() => toast.classList.remove('show'), 2000); }
document.addEventListener('click', async e => {
  const b = e.target.closest('[data-copy]'); if(!b) return;
  try { await navigator.clipboard.writeText(b.dataset.copy); say('Copied ' + b.dataset.copy); b.classList.add('done'); clearTimeout(b._t); b._t = setTimeout(() => b.classList.remove('done'), 1600); }
  catch { say('Copy blocked here. Select the text to copy it.'); }
});

/* skip link: focus main without changing the route */
document.getElementById('skiplink').addEventListener('click', e => { e.preventDefault(); document.getElementById('main').focus(); });

/* lightbox for case study screenshots (single image or gallery) */
const lb = document.createElement('dialog');
lb.className = 'lightbox';
lb.setAttribute('aria-label', 'Full-size image');
lb.innerHTML = '<button class="lb-close" type="button" aria-label="Close"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button>'
  + '<figure><div class="lb-stage"><button class="lb-nav lb-prev" type="button" aria-label="Previous screen"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button>'
  + '<div class="lb-scroll"><img alt=""></div>'
  + '<button class="lb-nav lb-next" type="button" aria-label="Next screen"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button></div>'
  + '<figcaption aria-live="polite"></figcaption><div class="lb-dots" role="group" aria-label="Choose screen"></div></figure>';
document.body.appendChild(lb);
const lbImg = lb.querySelector('img'), lbCap = lb.querySelector('figcaption'), lbScroll = lb.querySelector('.lb-scroll'), lbDots = lb.querySelector('.lb-dots');
let lbSlides = null, lbI = 0;
function lbShow(i){
  lbI = (i + lbSlides.length) % lbSlides.length;
  const [src, alt, label] = lbSlides[lbI];
  lbImg.src = src; lbImg.alt = alt; lbCap.textContent = `${label}  (${lbI+1} of ${lbSlides.length})`;
  lbScroll.scrollTop = 0;
  lbDots.querySelectorAll('button').forEach((d,j) => d.setAttribute('aria-current', j===lbI ? 'true' : 'false'));
}
document.addEventListener('click', e => {
  const a = e.target.closest('.slot .shot');
  if(!a || typeof lb.showModal !== 'function') return;
  e.preventDefault();
  const g = a.dataset.gallery && galleries[a.dataset.gallery];
  lb.classList.toggle('is-gallery', !!g);
  if(g){
    lbSlides = g;
    lbDots.innerHTML = g.map((s,j) => `<button type="button" aria-label="Screen ${j+1}"></button>`).join('');
    lbDots.querySelectorAll('button').forEach((d,j) => d.addEventListener('click', () => lbShow(j)));
    lbShow(0);
  } else {
    lbSlides = null; lbDots.innerHTML = '';
    const img = a.querySelector('img');
    lbImg.src = a.getAttribute('href'); lbImg.alt = img.alt;
    lbCap.textContent = a.closest('figure').querySelector('figcaption')?.textContent || '';
    lbScroll.scrollTop = 0;
  }
  lb.showModal();
  document.documentElement.style.overflow = 'hidden';
});
lb.querySelector('.lb-prev').addEventListener('click', () => lbShow(lbI - 1));
lb.querySelector('.lb-next').addEventListener('click', () => lbShow(lbI + 1));
lb.addEventListener('keydown', e => {
  if(!lbSlides) return;
  if(e.key === 'ArrowRight'){ e.preventDefault(); lbShow(lbI + 1); }
  if(e.key === 'ArrowLeft'){ e.preventDefault(); lbShow(lbI - 1); }
});
let lbX = null;
lb.addEventListener('touchstart', e => { lbX = e.touches[0].clientX; }, {passive:true});
lb.addEventListener('touchend', e => { if(!lbSlides || lbX === null) return; const dx = e.changedTouches[0].clientX - lbX; if(Math.abs(dx) > 50) lbShow(lbI + (dx < 0 ? 1 : -1)); lbX = null; });
lb.querySelector('.lb-close').addEventListener('click', () => lb.close());
lb.addEventListener('click', e => { if(e.target === lb) lb.close(); });
lb.addEventListener('close', () => { document.documentElement.style.overflow = ''; });

route();
