/*
  "ASK ABOUT RAM" CHAT
  --------------------
  A scripted helper: it picks the closest pre-written answer below. Nothing is sent anywhere.

  To change what it says, edit ANSWERS below.
  - keys     : words or short phrases that point to this answer. The more of them a question contains, the
               more likely this answer wins. A key matches the start of a word, so `stud` matches "study"
               and "studies" (keys of 3 letters or fewer, like `ai`, must match a whole word). Put ~ in front of a vague word (`~who`) so it counts for less.
               When two answers tie, the one higher in the list wins, so keep specific answers near the top.
  - answer   : the reply. Plain text between backticks. Links: <a href="#infoblox-iq">text</a>
  - next     : up to three follow-up suggestions shown as buttons under the reply.

  Keep the backticks, commas and brackets as they are.
*/
window.CHAT = {
  title: `Ask about Ram`,
  subtitle: `Quick answers from his portfolio`,
  hello: `Hi! I can answer common questions about Ram's work, experience and availability. Pick one below or type your own.`,
  starters: [`Who is Ram?`, `Show me his case studies`, `Download his resume`, `Is he open to new roles?`, `How do I contact him?`],
  fallback: [
    `I don't have a written answer for that one. Ram's happy to answer it himself: <a href="mailto:itsramanand@gmail.com">itsramanand@gmail.com</a>.`,
    `That's outside what I know. Try one of these, or email Ram at <a href="mailto:itsramanand@gmail.com">itsramanand@gmail.com</a>.`
  ],
  fallbackNext: [`His experience`, `Case studies`, `Contact details`],

  ANSWERS: [
    { keys:[`are you`,`bot`,`real person`,`human`,`who am i talking`,`automated`],
      answer:`I'm a simple scripted helper with answers written from Ram's portfolio. I'm not Ram, and I don't store or send anything you type. To reach him, email <a href="mailto:itsramanand@gmail.com">itsramanand@gmail.com</a>.`,
      next:[`Contact details`,`Case studies`] },

    { keys:[`resume`,`cv`,`curriculum`,`download`,`pdf`],
      answer:`Here you go: <a href="files/Ram_Srungeri_Resume_2026.pdf" download="Ram_Srungeri_Resume_2026.pdf">Download Ram's resume</a> (PDF, 2 pages, 58 KB). It's a plain document with no macros or scripts, so it's safe to open.`,
      next:[`His experience`,`Case studies`,`Contact details`] },

    { keys:[`saviynt`,`control monitoring`,`compliance`,`audit`,`sap`,`governance`,`iam`,`identity`],
      answer:`At Saviynt Ram worked on <b>Control Monitoring</b> and <b>Identity Access</b>. Control Monitoring replaced quarterly sample checks with continuous testing against live SAP transaction logs. He owned the information architecture for the control detail area and brought manual, hybrid and automated controls into one review queue (3 → 1), with justification and evidence on 100% of decisions. <a href="#control-monitoring">Read the case study</a>.`,
      next:[`Perspective Policy Builder`,`Infoblox IQ`,`Is he open to new roles?`] },

    { keys:[`infoblox`,`network security`,`perspective`,`policy builder`,`asset`,`dns`,`soc`,`hierarchy`,`30,000`,`30k`],
      answer:`At Infoblox Ram designed for SOC analysts and IT admins. His <b>Perspective Policy Builder</b> work turned one flat list of 30,000+ assets into a hierarchy customers build themselves, with a rule engine that files assets automatically and validation that catches broken rules before anything goes live. It shipped as Policy Builder and Asset Explorer. <a href="#perspective-policy-builder">Read the case study</a>.`,
      next:[`Infoblox IQ`,`Control Monitoring`,`How does he work?`] },

    { keys:[`infoblox iq`,`iq`,`eva`,`ai`,`assistant`,`copilot`,`autopilot`,`forecast`,`llm`,`chatbot`,`gen ai`,`machine learning`,`artificial`],
      answer:`<b>Infoblox IQ</b> is Ram's UX strategy and release 26.1 design for AI in DNS operations at Infoblox. Research showed most users only open the console once they already suspect a problem, so the alert became the product: baselines and 7-day forecasts, smart alerts in Slack before impact, and Eva, an assistant that explains a spike and proposes the fix for a person to carry out. It's designed to recommend, not act. <a href="#infoblox-iq">Read the case study</a>.`,
      next:[`Control Monitoring`,`Perspective Policy Builder`,`What tools does he use?`] },

    { keys:[`dell`,`field service`,`support portal`,`self-service`,`~mobile`],
      answer:`At Dell Technologies (2017 – 2023) Ram led design for Dell's support portals, pushing customer self-service to cut support ticket volume. He designed Dell Field Service Mobile and the new DFS interface, kept its style guide, and shadowed field agents on the job.`,
      next:[`What did he do at Vtiger?`,`Does he do research?`,`Case studies`] },

    { keys:[`vtiger`,`crm`,`ux engineer`,`email template`],
      answer:`At Vtiger Systems (2011 – 2017) Ram was a Senior UX Engineer on the CRM. He prototyped new features to check they were feasible, wrote the HTML and CSS for the flows he designed, and worked with QA through testing.`,
      next:[`Can he code?`,`His experience`,`Case studies`] },

    { keys:[`case stud`,`portfolio`,`projects`,`work samples`,`~examples`,`~show me`,`best work`],
      answer:`Three case studies, each opening with the numbers:<br>• <a href="#control-monitoring">Control Monitoring</a>: quarterly sampling to continuous testing (Saviynt)<br>• <a href="#perspective-policy-builder">Perspective Policy Builder</a>: 30,000 assets, one hierarchy (Infoblox)<br>• <a href="#infoblox-iq">Infoblox IQ</a>: AI that predicts DNS trouble and recommends, not acts (Infoblox)`,
      next:[`Control Monitoring`,`Perspective Policy Builder`,`Infoblox IQ`] },

    { keys:[`impact`,`metrics`,`results`,`numbers`,`outcome`,`~value`,`achievement`],
      answer:`A few numbers from his work:<br>• Control testing went from 4 sample checks a year to 24/7<br>• 3 review queues became 1, with evidence on 100% of decisions<br>• 30,000+ assets filed automatically into customer-built hierarchies<br>• 0 assistant actions without the user's approval<br>Each <a href="#work">case study</a> breaks these down.`,
      next:[`Case studies`,`How does he work?`,`Is he open to new roles?`] },

    { keys:[`process`,`approach`,`how does he work`,`how he works`,`method`,`philosophy`,`~think`],
      answer:`Every project follows the same three steps:<br>1. <b>Problem discovery</b>: what stakeholders asked for, what he saw, and the real problem statement<br>2. <b>Design trade-offs</b>: what was explored, what was chosen, and what it cost<br>3. <b>Solution rationale</b>: why it works, and where AI is involved, why it's needed<br>He leans on systems thinking and fast iteration.`,
      next:[`Does he do research?`,`Case studies`,`What tools does he use?`] },

    { keys:[`research`,`usability`,`interview`,`~testing`,`~users`,`user study`],
      answer:`Yes. Ram runs stakeholder interviews and usability tests, and spends time with the people who use the product, like SOC analysts at Infoblox and field agents at Dell, before and after anything ships. He's also a Certified Usability Analyst (Human Factors International, 2022).`,
      next:[`How does he work?`,`What tools does he use?`,`Case studies`] },

    { keys:[`skills`,`tools`,`figma`,`software`,`stack`,`lovable`,`claude`,`design system`,`material`],
      answer:`Skill set: user research, usability testing, information architecture, interaction design, wireframing, prototyping, design systems and data analysis.<br>Tools: Figma, Claude, Lovable, HTML &amp; CSS, Material Design and Angular.`,
      next:[`Can he code?`,`How does he work?`,`Case studies`] },

    { keys:[`code`,`coding`,`develop`,`front end`,`frontend`,`html`,`css`,`angular`,`engineer`,`technical`],
      answer:`He started as a UX engineer, writing the HTML and CSS for the flows he designed, and has worked with Angular and Material Design. It shapes how he hands work over: if he can't describe a state precisely enough to build, it isn't designed yet.`,
      next:[`What tools does he use?`,`His experience`,`Case studies`] },

    { keys:[`salary`,`compensation`,`ctc`,`expected pay`,`package`],
      answer:`That's a conversation Ram would rather have directly. Email <a href="mailto:itsramanand@gmail.com">itsramanand@gmail.com</a>.`,
      next:[`Is he open to new roles?`,`Contact details`] },

    { keys:[`consult`,`freelance`,`contract`,`project basis`,`part time`,`rate`,`pricing`,`cost`,`fee`],
      answer:`He takes on select consulting projects, especially complex enterprise products with large data sets. For scope, timing and rates, email <a href="mailto:itsramanand@gmail.com">itsramanand@gmail.com</a>.`,
      next:[`Case studies`,`Where is he based?`,`Contact details`] },

    { keys:[`open to`,`available`,`availability`,`hiring`,`hire`,`~looking`,`job`,`role`,`opportunit`,`~position`,`notice`,`~join`],
      answer:`Yes. Ram is looking for senior product design roles, and the occasional consulting project where the domain is hard and the data is big. Best next step: email <a href="mailto:itsramanand@gmail.com">itsramanand@gmail.com</a>.`,
      next:[`Does he consult?`,`Where is he based?`,`Contact details`] },

    { keys:[`~where`,`location`,`based`,`bengaluru`,`bangalore`,`india`,`timezone`,`time zone`,`remote`,`relocat`,`hybrid`,`office`],
      answer:`Ram is based in Bengaluru, India, on India Standard Time (UTC+5:30), and is happy to work across timezones. For remote, hybrid or relocation questions, it's best to ask him: <a href="mailto:itsramanand@gmail.com">itsramanand@gmail.com</a>.`,
      next:[`Is he open to new roles?`,`Contact details`] },

    { keys:[`contact`,`email`,`reach`,`linkedin`,`phone`,`call`,`touch`,`connect`,`message him`],
      answer:`• Email: <a href="mailto:itsramanand@gmail.com">itsramanand@gmail.com</a> (fastest)<br>• LinkedIn: <a href="https://www.linkedin.com/in/ramanandsrungeri/" target="_blank" rel="noopener">/in/ramanandsrungeri</a><br>Everything's also on the <a href="#contact">Contact page</a>.`,
      next:[`Is he open to new roles?`,`Case studies`] },

    { keys:[`education`,`degree`,`college`,`university`,`study`,`studied`,`certif`,`qualification`],
      answer:`B.E. in Electronics &amp; Communication from RV College of Engineering (2009), and Certified Usability Analyst from Human Factors International (2022).`,
      next:[`His experience`,`Does he do research?`] },

    { keys:[`language`,`speak`,`kannada`,`hindi`,`arabic`,`english`],
      answer:`English, Kannada, Hindi and Arabic.`,
      next:[`Where is he based?`,`Who is Ram?`] },

    { keys:[`domain`,`industr`,`sector`,`enterprise`,`b2b`,`saas`,`cyber`,`~security`],
      answer:`Mostly enterprise software: cybersecurity and network security, identity and access management, compliance, CRM and e-commerce. He likes products where the domain is hard and the data is big.`,
      next:[`Case studies`,`His experience`] },

    { keys:[`hobb`,`interests`,`outside work`,`free time`,`~fun`,`travel`,`trek`,`bike`,`~food`],
      answer:`Outside work, Ram loves travelling, biking and trekking, and he's a foodie. Trying the local dishes is always part of the trip.`,
      next:[`Who is Ram?`,`Case studies`] },

    { keys:[`experience`,`career`,`companies`,`worked`,`work history`,`jobs`,`~previous`,`~years`,`timeline`],
      answer:`Fifteen years across four companies:<br>• <b>Saviynt</b>, Staff UX Designer (Oct 2025 – Jul 2026): control monitoring and access governance<br>• <b>Infoblox</b>, Senior UX Designer (2023 – 2025): cloud and network security<br>• <b>Dell Technologies</b>, Senior Advisor, Design (2017 – 2023): support portals and field service mobile<br>• <b>Vtiger Systems</b>, Senior UX Engineer (2011 – 2017): CRM<br>You can also <a href="files/Ram_Srungeri_Resume_2026.pdf" download>download his resume</a> (PDF).`,
      next:[`What did he do at Saviynt?`,`What did he do at Infoblox?`,`What did he do at Dell?`] },

    { keys:[`~who`,`~about`,`introduce`,`~summary`,`~background`,`tell me about him`,`~ram`,`~yourself`,`bio`],
      answer:`Ram Srungeri is a Staff Product Designer in Bengaluru with 15 years in enterprise software: network security, identity and access, compliance, CRM and e-commerce. He works end to end, from research and information architecture through interaction design to the specs engineering builds from. More on the <a href="#about">About page</a>.`,
      next:[`His experience`,`How does he work?`,`Case studies`] },

    { keys:[`hi`,`hello`,`hey`,`good morning`,`good afternoon`,`good evening`,`namaste`],
      answer:`Hello! What would you like to know about Ram?`,
      next:[`Who is Ram?`,`Case studies`,`Is he open to new roles?`] },

    { keys:[`thank`,`thanks`,`~great`,`~cool`,`awesome`,`helpful`,`bye`,`goodbye`],
      answer:`You're welcome! If you'd like to talk to Ram, he's at <a href="mailto:itsramanand@gmail.com">itsramanand@gmail.com</a>.`,
      next:[`Case studies`,`Contact details`] }
  ]
};

/* ---------------- widget (you shouldn't need to edit below) ---------------- */
(function(){
  const C = window.CHAT; if(!C) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const norm = s => ' ' + s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9,+ ]+/g,' ').replace(/\s+/g,' ').trim() + ' ';
  const keyHit = (text, k) => { const w = norm(k).trim(); return text.includes(' ' + w + (w.length <= 3 ? ' ' : '')); }; // short keys (hi, ai, cv) match whole words only

  function match(q){
    const t = norm(q);
    let best = null, bestScore = 0;
    C.ANSWERS.forEach(a => {
      let s = 0;
      a.keys.forEach(k => {
        const soft = k[0] === '~', w = soft ? k.slice(1) : k;
        if(keyHit(t, w)) s += soft ? .5 : (w.includes(' ') ? 2 : 1);
      });
      if(s > bestScore){ best = a; bestScore = s; }
    });
    return best;
  }

  const icon = {
    chat:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/><path d="M8.5 11h.01M12 11h.01M15.5 11h.01" stroke-width="2.4"/></svg>`,
    close:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>`,
    send:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`
  };

  const root = document.createElement('div');
  root.className = 'chat';
  root.innerHTML = `
    <button class="chat-fab" type="button" aria-expanded="false" aria-controls="chat-panel">
      ${icon.chat}<span class="chat-fab-l">${C.title}</span>
    </button>
    <section class="chat-panel" id="chat-panel" role="dialog" aria-modal="false" aria-labelledby="chat-h">
      <header class="chat-head">
        <img src="images/profile.webp" alt="" width="40" height="40">
        <div><h2 id="chat-h" tabindex="-1">${C.title}</h2><p>${C.subtitle}</p></div>
        <button class="chat-x" type="button" aria-label="Close chat">${icon.close}</button>
      </header>
      <div class="chat-log" role="log" aria-live="polite" aria-label="Conversation"></div>
      <form class="chat-form" autocomplete="off">
        <label class="sr" for="chat-in">Type a question about Ram</label>
        <input id="chat-in" type="text" maxlength="200" placeholder="Ask a question…">
        <button type="submit" aria-label="Send">${icon.send}</button>
      </form>
      <p class="chat-note">Pre-written answers. Nothing you type is stored or sent.</p>
    </section>`;
  document.body.appendChild(root);

  const fab = root.querySelector('.chat-fab'), panel = root.querySelector('.chat-panel'),
        log = root.querySelector('.chat-log'), form = root.querySelector('.chat-form'),
        input = root.querySelector('#chat-in'), heading = root.querySelector('#chat-h');
  let started = false, misses = 0;

  function add(who, html, next){
    const m = document.createElement('div');
    m.className = 'chat-msg ' + who;
    const b = document.createElement('div'); b.className = 'chat-b';
    if(who === 'me'){ b.textContent = html; m.innerHTML = '<span class="sr">You: </span>'; }
    else { b.innerHTML = html; m.innerHTML = '<span class="sr">Answer: </span>'; }
    m.appendChild(b);
    log.appendChild(m);
    if(next && next.length){
      const r = document.createElement('div'); r.className = 'chat-sugg';
      r.setAttribute('role','group'); r.setAttribute('aria-label','Suggested questions');
      next.slice(0,5).forEach(q => { const s = document.createElement('button'); s.type = 'button'; s.textContent = q; r.appendChild(s); });
      log.appendChild(r);
    }
    // long answers: show their first line rather than jumping to the end
    log.scrollTop = who === 'bot' && m.offsetHeight > log.clientHeight * .6 ? m.offsetTop - 12 : log.scrollHeight;
  }

  function reply(q){
    log.querySelectorAll('.chat-sugg').forEach(r => r.remove());
    add('me', q);
    const a = match(q);
    let html, next;
    if(a){ html = a.answer; next = a.next; misses = 0; }
    else { html = C.fallback[misses % C.fallback.length]; next = C.fallbackNext; misses++; }
    const dots = document.createElement('div');
    dots.className = 'chat-msg bot chat-typing'; dots.setAttribute('aria-hidden','true');
    dots.innerHTML = '<div class="chat-b"><i></i><i></i><i></i></div>';
    log.appendChild(dots); log.scrollTop = log.scrollHeight;
    setTimeout(() => { dots.remove(); add('bot', html, next); }, reduce ? 0 : 550);
  }

  const small = () => matchMedia('(max-width:640px)').matches;
  function open(){
    if(!started){ add('bot', C.hello, C.starters); started = true; }
    root.classList.add('open'); fab.setAttribute('aria-expanded','true');
    if(small()) document.documentElement.classList.add('chat-lock');
    setTimeout(() => (matchMedia('(hover:hover)').matches ? input : heading).focus(), reduce ? 0 : 60);
  }
  function close(refocus = true){
    root.classList.remove('open'); fab.setAttribute('aria-expanded','false');
    document.documentElement.classList.remove('chat-lock');
    if(refocus) fab.focus();
  }

  fab.addEventListener('click', () => root.classList.contains('open') ? close() : open());
  root.querySelector('.chat-x').addEventListener('click', () => close());
  panel.addEventListener('keydown', e => { if(e.key === 'Escape') close(); });
  form.addEventListener('submit', e => {
    e.preventDefault();
    const q = input.value.trim(); if(!q) return;
    input.value = ''; reply(q);
  });
  log.addEventListener('click', e => {
    const s = e.target.closest('.chat-sugg button');
    if(s){ reply(s.textContent); return; }
    const a = e.target.closest('a[href^="#"]');
    if(a && small()) close(false);   // on phones, get out of the way so the page is visible
  });
})();
