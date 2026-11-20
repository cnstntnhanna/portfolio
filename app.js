/* Renders the portfolio from PORTFOLIO (js/data.js) and wires up interactions. */
(function () {
  "use strict";
  const D = PORTFOLIO;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };
  const toast = (msg) => {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 2200);
  };
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!D.config.showTodoBadges) document.body.classList.add("no-todo");
  const P = D.profile, C = D.contact;
  const fullName = `${P.firstName} ${P.middleInitial} ${P.lastName}`;

  /* ---------- THEME ---------- */
  const saved = store.get("theme");
  const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme = saved || (prefersDark ? "dark" : "light");
  $("#themeToggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next; store.set("theme", next);
  });

  /* ---------- HERO ---------- */
  $("#heroName").innerHTML = `<span>${esc(P.firstName)}</span><span class="last">${esc(P.middleInitial)} ${esc(P.lastName)}</span>`;
  $("#heroTagline").textContent = P.tagline;
  $("#heroPhoto").src = P.photo;
  $("#stats").innerHTML = P.stats.map((s) => `<li><b data-count="${s.value}" data-suffix="${esc(s.suffix)}">0${esc(s.suffix)}</b><span>${esc(s.label)}</span></li>`).join("");

  // typing effect
  (function typing() {
    const el = $("#typed"); const words = P.roles; let w = 0, i = 0, del = false;
    if (reduceMotion) { el.textContent = words[0]; return; }
    (function tick() {
      const word = words[w];
      el.textContent = word.slice(0, i);
      if (!del && i === word.length) { del = true; return setTimeout(tick, 1500); }
      if (del && i === 0) { del = false; w = (w + 1) % words.length; }
      i += del ? -1 : 1;
      setTimeout(tick, del ? 35 : 75);
    })();
  })();

  // count-up stats
  function countUp() {
    $$("[data-count]").forEach((el) => {
      const end = +el.dataset.count, suf = el.dataset.suffix || "";
      if (reduceMotion) { el.textContent = end + suf; return; }
      const t0 = performance.now();
      (function step(t) {
        const p = Math.min((t - t0) / 1100, 1);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suf;
        if (p < 1) requestAnimationFrame(step);
      })(t0);
    });
  }
  countUp();

  /* ---------- ABOUT ---------- */
  $("#aboutIntro").textContent = P.intro;
  $("#aboutObjective").textContent = P.careerObjective;
  $("#goals").innerHTML = P.immersionGoals.map((g) => `<li>${esc(g)}</li>`).join("");

  /* ---------- RESUME ---------- */
  const info = [["Name", fullName], ["Email", C.email && `<a href="mailto:${esc(C.email)}">${esc(C.email)}</a>`, true],
    ["Phone", C.phone && `<a href="tel:${esc(C.phone)}">${esc(C.phone)}</a>`, true], ["Location", C.location],
    ["Program", "BS Information Technology"], ["School", "STI College Alabang"]];
  $("#personalInfo").innerHTML = info.filter((r) => r[1]).map(([k, v, raw]) => `<div><dt>${k}</dt><dd>${raw ? v : esc(v)}</dd></div>`).join("");
  $("#downloadResume").href = D.resume.pdf;
  $("#downloadResume").setAttribute("download", `${P.lastName}_${P.firstName}_Resume.pdf`);
  $("#openResume").addEventListener("click", () => openModal(`<h3>Resume</h3><img src="${esc(D.resume.image)}" alt="Resume of ${esc(fullName)}" /><a class="btn primary" href="${esc(D.resume.pdf)}" download>Download PDF</a>`));

  const R = D.resume;
  const resumeTabs = {
    Education: () => R.education.map((e) => `<div class="entry"><p class="when">${esc(e.period)}</p><h4>${esc(e.school)}</h4><p>${esc(e.program)}</p></div>`).join(""),
    Leadership: () => R.leadership.map((l) => `<div class="entry"><p class="when">${esc(l.period)}</p><h4>${esc(l.role)}</h4><p>${esc(l.org)}</p></div>`).join("") +
      `<h4 style="margin:22px 0 12px">Achievements</h4><ul class="bullets">${R.leadershipAchievements.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>`,
    Skills: () => `<div class="tag-list">${D.skills.map((s) => `<span class="tag">${esc(s.name)}</span>`).join("")}</div>`,
    Achievements: () => `<ul class="bullets">${D.awards.map((a) => `<li><b>${esc(a.title)}</b> (${esc(a.year)})</li>`).join("")}</ul>`,
    Certifications: () => `<ul class="bullets">${D.certifications.map((c) => `<li>${esc(c.title)}</li>`).join("")}</ul>`,
  };
  const tabsEl = $("#resumeTabs"), panel = $("#resumePanel");
  function showTab(name) {
    $$(".tab", tabsEl).forEach((b) => b.setAttribute("aria-selected", b.dataset.tab === name));
    panel.innerHTML = resumeTabs[name](); panel.style.animation = "none"; void panel.offsetWidth; panel.style.animation = "";
  }
  tabsEl.innerHTML = Object.keys(resumeTabs).map((k) => `<button class="tab" role="tab" data-tab="${k}">${k}</button>`).join("");
  tabsEl.addEventListener("click", (e) => { const b = e.target.closest(".tab"); if (b) showTab(b.dataset.tab); });
  tabsEl.addEventListener("keydown", (e) => {
    if (!["ArrowRight", "ArrowLeft"].includes(e.key)) return;
    const tabs = $$(".tab", tabsEl), i = tabs.findIndex((t) => t.getAttribute("aria-selected") === "true");
    const n = tabs[(i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length]; n.focus(); showTab(n.dataset.tab);
  });
  showTab("Education");

  /* ---------- SKILLS ---------- */
  const types = ["All", ...new Set(D.skills.map((s) => s.type))];
  let skillFilter = "All";
  const chipsEl = $("#skillChips"), proofEl = $("#skillProof");
  function renderSkillProof(s) {
    proofEl.innerHTML = s ? `<p class="kind">${esc(s.type)} skill</p><h3>${esc(s.name)}</h3><p>${esc(s.proof)}</p>` :
      `<p class="kind">Tip</p><h3>Pick a skill</h3><p>Select any skill on the left to see where I have used it.</p>`;
  }
  function renderSkills() {
    $("#skillFilters").innerHTML = types.map((t) => `<button class="pill ${t === skillFilter ? "on" : ""}" data-t="${t}" aria-pressed="${t === skillFilter}">${t === "All" ? "All skills" : t}</button>`).join("");
    chipsEl.innerHTML = D.skills.filter((s) => skillFilter === "All" || s.type === skillFilter)
      .map((s) => `<button class="chip" data-n="${esc(s.name)}"><small>${esc(s.type)}</small>${esc(s.name)}</button>`).join("");
  }
  $("#skillFilters").addEventListener("click", (e) => { const b = e.target.closest(".pill"); if (!b) return; skillFilter = b.dataset.t; renderSkills(); renderSkillProof(); });
  chipsEl.addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    $$(".chip", chipsEl).forEach((c) => c.classList.toggle("sel", c === b));
    renderSkillProof(D.skills.find((s) => s.name === b.dataset.n));
  });
  renderSkills(); renderSkillProof();

  /* ---------- ACHIEVEMENTS ---------- */
  $("#awards").innerHTML = D.awards.map((a) => `<article class="award reveal"><p class="yr">${esc(a.year)}</p><h4>${esc(a.title)}</h4>${a.detail ? `<p>${esc(a.detail)}</p>` : ""}</article>`).join("");
  $("#certs").innerHTML = D.certifications.map((c) => `<article class="cert reveal">${c.image ? `<img src="${esc(c.image)}" alt="Certificate: ${esc(c.title)}" data-zoom />` : ""}<p class="type">${esc(c.type)}</p><h4>${esc(c.title)}</h4>${c.date || c.issuer ? `<p>${esc([c.issuer, c.date].filter(Boolean).join(" · "))}</p>` : ""}</article>`).join("");
  $("#certs").addEventListener("click", (e) => { const i = e.target.closest("[data-zoom]"); if (i) openModal(`<img src="${i.src}" alt="${esc(i.alt)}" />`); });

  /* ---------- PROJECTS ---------- */
  const cats = ["All", ...new Set(D.projects.map((p) => p.category))];
  let projFilter = "All";
  const icons = { Leadership: "🏆", Documentation: "📝", Presentation: "🎤", Community: "🤝", "School Project": "💻" };
  function renderProjects() {
    $("#projectFilters").innerHTML = cats.map((c) => `<button class="pill ${c === projFilter ? "on" : ""}" data-c="${c}" aria-pressed="${c === projFilter}">${c}</button>`).join("");
    $("#projectGrid").innerHTML = D.projects.map((p, i) => ({ p, i })).filter(({ p }) => projFilter === "All" || p.category === projFilter).map(({ p, i }) =>
      `<button class="project reveal in" data-i="${i}"><div class="thumb">${p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy" />` : icons[p.category] || "📁"}</div>
        <div class="body"><span class="cat">${esc(p.category)} · ${esc(p.date)}</span><h4>${esc(p.title)}${p.todo ? ' <span class="todo" data-todo>Add details</span>' : ""}</h4><p>${esc(p.description)}</p><span class="more">View details →</span></div></button>`).join("");
  }
  $("#projectFilters").addEventListener("click", (e) => { const b = e.target.closest(".pill"); if (b) { projFilter = b.dataset.c; renderProjects(); } });
  $("#projectGrid").addEventListener("click", (e) => {
    const b = e.target.closest(".project"); if (!b) return;
    const p = D.projects[+b.dataset.i];
    const internal = p.link && p.link.startsWith("#");
    openModal(`<p class="eyebrow">${esc(p.category)} · ${esc(p.date)}</p><h3>${esc(p.title)}</h3><p style="color:var(--muted);font-weight:600">Role: ${esc(p.role)}</p>
      ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" />` : ""}<p style="margin-top:12px">${esc(p.description)}</p>
      ${p.link ? `<a class="btn primary" href="${esc(p.link)}" ${internal ? 'data-close' : 'target="_blank" rel="noopener"'}>${internal ? "Jump to section" : "Open the output"}</a>` : ""}`);
  });
  renderProjects();

  /* ---------- HTE ---------- */
  const H = D.hte, comps = H.companies;
  const ctabs = $("#companyTabs"), cpanel = $("#companyPanel");
  ctabs.innerHTML = comps.map((c, i) => `<button class="ctab" role="tab" data-i="${i}"><span class="rk">${c.rank}</span>${esc(c.short)}</button>`).join("");
  function showCompany(i) {
    const c = comps[i];
    $$(".ctab", ctabs).forEach((b) => b.setAttribute("aria-selected", +b.dataset.i === i));
    cpanel.innerHTML = `<h3>${esc(c.name)}</h3><p class="ind">${esc(c.industry)}</p>
      <div class="cp-grid">
        <div class="cp-block full"><h4>Company name &amp; background</h4><p>${esc(c.background)}</p></div>
        <div class="cp-block"><h4>Industry classification</h4><p>${esc(c.industryDetail)}</p></div>
        <div class="cp-block"><h4>Learning &amp; training opportunities</h4><p>${esc(c.learning)}</p></div>
        <div class="cp-block full pc"><div class="pro"><h4>Advantages</h4><ul>${c.pros.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div><div class="con"><h4>Disadvantages</h4><ul>${c.cons.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div></div>
        <div class="cp-block"><h4>Accessibility &amp; convenience</h4><p>${esc(c.access)}</p></div>
        <div class="cp-block"><h4>Potential for career growth</h4><p>${esc(c.growth)}</p></div>
        <div class="cp-block full"><h4>Skills I could develop here</h4><p>${esc(c.skills)}</p></div>
      </div>
      <div class="score-row">${H.criteria.map((k) => `<span class="score">${esc(k.label)}<b>${c.ratings[k.key]}/5</b></span>`).join("")}</div>`;
  }
  ctabs.addEventListener("click", (e) => { const b = e.target.closest(".ctab"); if (b) showCompany(+b.dataset.i); });
  showCompany(0);

  // comparison + weights
  const weights = {}; H.criteria.forEach((k) => (weights[k.key] = 3));
  const wGrid = $("#weightsGrid");
  wGrid.innerHTML = H.criteria.map((k) => `<div class="w"><label for="w_${k.key}">${esc(k.label)} <output id="o_${k.key}">3</output></label><input type="range" id="w_${k.key}" data-k="${k.key}" min="0" max="5" step="1" value="3" /></div>`).join("");
  const score = (c) => { const tw = Object.values(weights).reduce((a, b) => a + b, 0); return tw ? H.criteria.reduce((s, k) => s + c.ratings[k.key] * weights[k.key], 0) / tw : 0; };
  function renderCompare() {
    const scores = comps.map(score), best = scores.indexOf(Math.max(...scores));
    $("#cmpTable").innerHTML = `<thead><tr><th>Criteria</th>${comps.map((c) => `<th>${esc(c.short)}</th>`).join("")}</tr></thead><tbody>
      <tr><th scope="row">Industry</th>${comps.map((c) => `<td style="text-align:center">${esc(c.industry)}</td>`).join("")}</tr>
      ${H.criteria.map((k) => `<tr><th scope="row">${esc(k.label)}</th>${comps.map((c) => `<td class="n">${c.ratings[k.key]}</td>`).join("")}</tr>`).join("")}
      <tr class="total ${best >= 0 ? "best" : ""}"><th scope="row">Overall (out of 5)</th>${comps.map((c, i) => `<td class="n ${i === best ? "hl" : ""}">${scores[i].toFixed(1)}</td>`).join("")}</tr></tbody>`;
    const order = comps.map((c, i) => ({ c, s: scores[i] })).sort((a, b) => b.s - a.s);
    $("#ranking").innerHTML = order.map((o, i) => `<div class="rank"><span class="pos">${i + 1}</span><span>${esc(o.c.short)}</span><span class="bar"><i style="width:${(o.s / 5) * 100}%"></i></span><b>${o.s.toFixed(1)}</b></div>`).join("");
  }
  wGrid.addEventListener("input", (e) => {
    const r = e.target.closest("input[type=range]"); if (!r) return;
    weights[r.dataset.k] = +r.value; $("#o_" + r.dataset.k).textContent = r.value; renderCompare();
  });
  $("#resetWeights").addEventListener("click", () => {
    H.criteria.forEach((k) => { weights[k.key] = 3; $("#w_" + k.key).value = 3; $("#o_" + k.key).textContent = 3; }); renderCompare(); toast("Weights reset");
  });
  renderCompare();

  $("#recoTitle").textContent = comps[0].name + " (first choice)";
  $("#recoText").textContent = H.recommendation;
  $("#guideQs").innerHTML = H.guideQuestions.map((g, i) => `<div class="acc"><button aria-expanded="false" aria-controls="ans${i}">${esc(g.q)}</button><div class="ans" id="ans${i}"><div><p>${esc(g.a)}</p></div></div></div>`).join("");
  $("#guideQs").addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) b.setAttribute("aria-expanded", b.getAttribute("aria-expanded") !== "true"); });
  $("#sourceList").innerHTML = H.sources.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join("");

  /* ---------- REFLECTION ---------- */
  $("#reflectionText").innerHTML = D.reflection.map((p) => `<p>${esc(p)}</p>`).join("");
  const wc = D.reflection.join(" ").trim().split(/\s+/).length;
  $("#wordCount").textContent = `${wc} words · ${Math.max(1, Math.round(wc / 200))} min read`;

  /* ---------- PLAN + VIDEO ---------- */
  $("#planTimeline").innerHTML = D.plan.map((p) => `<li class="reveal"><p class="when">${esc(p.when)}</p><h4>${esc(p.title)}</h4><p>${esc(p.text)}</p></li>`).join("");
  $("#videoBox").innerHTML = D.video.youtubeId
    ? `<h3 class="sub" style="text-align:center">Video introduction</h3><div class="frame"><iframe src="https://www.youtube-nocookie.com/embed/${esc(D.video.youtubeId)}" title="Video introduction" allowfullscreen loading="lazy"></iframe></div>`
    : `<p class="todo" data-todo style="display:block;text-align:center;margin:0">Bonus: add your 1–2 minute video introduction (set video.youtubeId in data.js)</p>`;

  /* ---------- CONTACT ---------- */
  const rows = [["✉", "Email", C.email, `mailto:${C.email}`, true], ["☎", "Phone", C.phone, `tel:${C.phone}`], ["⌖", "Location", C.location],
    ["in", "LinkedIn", C.linkedin && "View my LinkedIn profile", C.linkedin], ["f", "Facebook", C.facebook && "Facebook profile", C.facebook], ["</>", "GitHub", C.github && "GitHub profile", C.github]];
  $("#contactList").innerHTML = rows.filter((r) => r[2]).map(([ic, label, val, href, copy]) => {
    const inner = `<span class="ic">${ic}</span><div><small>${label}</small><span>${esc(val)}</span></div>${copy ? `<button type="button" data-copy="${esc(val)}">Copy</button>` : ""}`;
    return href ? `<a class="crow" href="${esc(href)}" ${href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${inner}</a>` : `<div class="crow">${inner}</div>`;
  }).join("") + (C.linkedin ? "" : `<p class="todo" data-todo style="margin:0">Add your LinkedIn link (bonus points)</p>`);
  $("#contactList").addEventListener("click", (e) => {
    const b = e.target.closest("[data-copy]"); if (!b) return;
    e.preventDefault(); e.stopPropagation();
    (navigator.clipboard ? navigator.clipboard.writeText(b.dataset.copy) : Promise.reject()).then(() => toast("Email copied"), () => toast("Press Ctrl+C to copy"));
  });
  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault(); const f = new FormData(e.target);
    const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    location.href = `mailto:${C.email}?subject=${encodeURIComponent("Portfolio message from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
  });
  $("#year").textContent = new Date().getFullYear();

  /* ---------- MODAL ---------- */
  const modal = $("#modal");
  function openModal(html) { $("#modalBody").innerHTML = html; if (!modal.open) modal.showModal(); }
  $("#modalClose").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => { if (e.target === modal || e.target.closest("[data-close]")) modal.close(); });

  /* ---------- NAV, SCROLL SPY, REVEAL, PROGRESS ---------- */
  const nav = $("#nav"), links = $$("#navLinks a"), progress = $("#progress"), toTop = $("#toTop");
  $("#menuBtn").addEventListener("click", (e) => { const o = $("#navLinks").classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded", o); });
  links.forEach((a) => a.addEventListener("click", () => $("#navLinks").classList.remove("open")));
  toTop.addEventListener("click", () => scrollTo({ top: 0 }));
  addEventListener("scroll", () => {
    const h = document.documentElement;
    progress.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + "%";
    nav.classList.toggle("scrolled", h.scrollTop > 10);
    toTop.classList.toggle("show", h.scrollTop > 700);
  }, { passive: true });

  const spy = new IntersectionObserver((es) => es.forEach((en) => {
    if (en.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach((s) => spy.observe(s));

  const rv = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); rv.unobserve(en.target); } }), { threshold: 0.12 });
  $$(".reveal").forEach((el) => rv.observe(el));
  // safety net: never leave content hidden
  setTimeout(() => $$(".reveal").forEach((el) => { if (el.getBoundingClientRect().top < innerHeight) el.classList.add("in"); }), 1200);
})();
