(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const money = n => "$" + n.toLocaleString("en-CA");
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const MONTHS = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  /* ---------- nav ---------- */
  const nav = $("#nav"), burger = $("#burger"), sticky = $("#stickyCta");
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("is-solid", y > 40);
    sticky.classList.toggle("is-on", y > window.innerHeight * 0.8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open);
  });
  $$("#mobileMenu a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", false);
  }));

  /* ---------- hero slideshow ---------- */
  const slides = $$(".hero__media img"), dots = $(".hero__dots");
  let cur = 0, timer;
  slides.forEach((_, i) => {
    const b = document.createElement("button");
    b.setAttribute("aria-label", "Show photo " + (i + 1));
    b.addEventListener("click", () => { go(i); restart(); });
    dots.appendChild(b);
  });
  const go = i => {
    slides[cur].classList.remove("is-active");
    dots.children[cur].classList.remove("is-on");
    cur = (i + slides.length) % slides.length;
    slides[cur].classList.add("is-active");
    dots.children[cur].classList.add("is-on");
  };
  const restart = () => { clearInterval(timer); timer = setInterval(() => go(cur + 1), 7000); };
  dots.children[0].classList.add("is-on");
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) restart();

  /* ---------- tours ---------- */
  const toursEl = $("#tours");
  const nextDeparture = t => {
    const [m, d] = Object.entries(t.departures)[0];
    return isNaN(m) ? `${m.slice(0, 3)} ${d.split(",")[0].replace("*", "")}, 2027` : d;
  };
  toursEl.innerHTML = TOURS.map(t => `
    <button class="tour reveal" data-id="${t.id}" data-cat="${t.cat.join(" ")}" aria-label="View ${esc(t.days)} day ${esc(t.title)} itinerary">
      <div class="tour__media">
        <img src="${IMG + t.img}" alt="" loading="lazy">
        ${t.badge ? `<span class="badge">${esc(t.badge)}</span>` : ""}
        <div class="tour__days"><b>${t.days}</b><small>days</small></div>
      </div>
      <div class="tour__body">
        <p class="tour__region">${esc(t.region)}</p>
        <h3 class="tour__title">${esc(t.title)}</h3>
        <div class="tour__foot">
          <div class="price"><small>${t.from ? "From" : "Per person"}</small><b>${money(t.price)}</b> <span>CAD</span></div>
          <div class="tour__next">Next departure<b>${esc(nextDeparture(t))}</b></div>
        </div>
      </div>
    </button>`).join("");

  let activeFilter = "all";
  const applyFilters = (cat = activeFilter, month = "", len = "") => {
    activeFilter = cat;
    $$("#tourFilters .chip").forEach(c => c.classList.toggle("is-on", c.dataset.filter === cat));
    let shown = 0;
    $$(".tour", toursEl).forEach(card => {
      const t = TOURS.find(x => x.id === card.dataset.id);
      const ok = (cat === "all" || t.cat.includes(cat)) && (!month || t.months.includes(+month)) && (!len || t.len === len);
      card.classList.toggle("is-hidden", !ok);
      if (ok) shown++;
    });
    const note = $("#filterNote");
    if (month || len) {
      const bits = [month && "travelling in " + ["", "", "", "", "", "May", "June", "July", "August", "September", "October"][month], len && { short: "up to 5 days", mid: "7 to 10 days", long: "13 days" }[len]].filter(Boolean);
      note.innerHTML = `<span>${shown ? `Showing ${shown} tour${shown > 1 ? "s" : ""}` : "No scheduled tours match"} ${bits.join(", ")}.${shown ? "" : " We'd be happy to build a custom trip for you."}</span><button type="button" id="clearFilter">Clear</button>`;
      note.hidden = false;
      $("#clearFilter").onclick = () => { note.hidden = true; applyFilters("all"); };
    } else $("#filterNote").hidden = true;
  };
  $$("#tourFilters .chip").forEach(c => c.addEventListener("click", () => applyFilters(c.dataset.filter)));

  $("#finder").addEventListener("submit", e => {
    e.preventDefault();
    const type = $("#finderType").value;
    if (type === "day") return $("#day-tours").scrollIntoView();
    if (type === "group") return $("#groups").scrollIntoView();
    applyFilters("all", $("#finderMonth").value, $("#finderLen").value);
    $("#journeys").scrollIntoView();
  });

  /* ---------- drawer ---------- */
  const drawer = $("#drawer"), body = $("#drawerBody");
  let lastFocus;
  const openTour = id => {
    const t = TOURS.find(x => x.id === id);
    if (!t) return;
    const g = t.gallery.slice(0, 3);
    body.innerHTML = `
      <div class="dg">${g.map((s, i) => `<img src="${IMG + s}" alt="" ${i ? 'loading="lazy"' : ""}>`).join("")}</div>
      <div class="dbody">
        <p class="eyebrow">${t.days}-day tour · ${esc(t.region)}</p>
        <h2 id="drawerTitle">${esc(t.title)}</h2>
        <p>${esc(t.summary)}</p>
        <div class="dfacts">
          <div><small>${t.from ? "From" : "Per person"}</small><b>${money(t.price)}</b></div>
          <div><small>Single supplement</small><b>+${money(t.single)}</b></div>
          <div><small>Deposit</small><b>${money(t.deposit)}</b></div>
        </div>
        <h3>Journey highlights</h3>
        <ul class="dhl">${t.highlights.map(([h, d]) => `<li><b>${esc(h)}</b><span>${esc(d)}</span></li>`).join("")}</ul>
        <h3>What's included</h3>
        <ul class="dinc">${t.includes.map(i => `<li>${esc(i)}</li>`).join("")}</ul>
        <h3>2027 departures</h3>
        <div class="ddep">${Object.entries(t.departures).map(([m, d]) => `<div><b>${esc(m)}</b><span>${esc(d)}</span></div>`).join("")}</div>
        ${/\*/.test(Object.values(t.departures).join("")) ? '<p class="small-print">* New date added</p>' : ""}
        ${t.note ? `<p class="dnote">${esc(t.note)}</p>` : ""}
        ${t.map ? `<h3>Route map</h3><img class="dmap" src="${IMG + t.map}" alt="Route map for the ${esc(t.title)} tour" loading="lazy">` : ""}
        <p class="small-print">Land only, based on double occupancy. Prices in CAD and subject to 15% HST. Please call to confirm availability.</p>
      </div>
      <div class="dcta">
        <div class="price"><small>${t.from ? "From" : "Per person"}</small><b>${money(t.price)}</b> <span>CAD</span></div>
        <div class="dcta__btns">
          <a class="btn btn--ghost" href="${t.url}" target="_blank" rel="noopener">Full itinerary</a>
          <a class="btn btn--accent" href="#enquire" data-enquire="${t.id}">Enquire now</a>
        </div>
      </div>`;
    lastFocus = document.activeElement;
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $(".drawer__panel").scrollTop = 0;
    $(".drawer__close").focus();
  };
  const closeDrawer = () => {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    lastFocus && lastFocus.focus && lastFocus.focus({ preventScroll: true });
  };
  toursEl.addEventListener("click", e => { const c = e.target.closest(".tour"); if (c) openTour(c.dataset.id); });
  $$("[data-open]").forEach(a => a.addEventListener("click", e => { e.preventDefault(); openTour(a.dataset.open); }));
  drawer.addEventListener("click", e => {
    if (e.target.closest("[data-close]")) closeDrawer();
    const enq = e.target.closest("[data-enquire]");
    if (enq) {
      const t = TOURS.find(x => x.id === enq.dataset.enquire);
      setInterest(t.days + " Day");
      closeDrawer();
    }
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer(); });

  /* ---------- day tours ---------- */
  const rail = $("#dayRail");
  rail.innerHTML = DAY_TOURS.map(d => `
    <article class="dt">
      <div class="dt__media"><img src="${IMG + d.img}" alt="${esc(d.title)}" loading="lazy">${d.tag ? `<span class="badge">${esc(d.tag)}</span>` : ""}</div>
      <div class="dt__body">
        <div class="dt__meta"><span class="pill">${esc(d.dur)}</span><span class="pill">${esc(d.when)}</span></div>
        <h3>${esc(d.title)}</h3>
        <p>${esc(d.blurb)}</p>
        <div class="dt__foot">
          <div class="price">${d.adult ? `<small>Adult${d.child ? ` · child ${money(d.child)}` : ""}</small><b>${money(d.adult)}</b>` : "<small>Pricing</small><b>By sailing</b>"}</div>
          <a class="btn btn--dark" href="${d.url}" target="_blank" rel="noopener">Book</a>
        </div>
      </div>
    </article>`).join("");
  $$("[data-rail]").forEach(b => b.addEventListener("click", () => {
    const w = rail.querySelector(".dt").offsetWidth + 22;
    rail.scrollBy({ left: b.dataset.rail === "next" ? w : -w, behavior: "smooth" });
  }));

  /* ---------- seasons ---------- */
  const monthsEl = $("#months"), card = $("#seasonCard");
  monthsEl.innerHTML = SEASONS.map((s, i) => `<button class="month" role="tab" data-i="${i}"><b>${s.m}</b><small>${esc(s.title)}</small></button>`).join("");
  const showSeason = i => {
    const s = SEASONS[i];
    $$(".month", monthsEl).forEach((b, j) => { b.classList.toggle("is-on", i === j); b.setAttribute("aria-selected", i === j); });
    const n = TOURS.filter(t => t.months.includes(s.n)).length;
    card.innerHTML = `<img src="${IMG + s.img}" alt="">
      <div class="season-card__text">
        <p class="eyebrow eyebrow--light">${s.m}</p>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.text)}</p>
        ${s.tags.map(t => `<span class="pill">${esc(t)}</span>`).join("")}
        <br><a href="#journeys" data-month="${s.n}">See ${n} tour${n === 1 ? "" : "s"} departing in ${s.m} →</a>
      </div>`;
  };
  monthsEl.addEventListener("click", e => { const b = e.target.closest(".month"); if (b) showSeason(+b.dataset.i); });
  card.addEventListener("click", e => {
    const a = e.target.closest("[data-month]");
    if (a) { applyFilters("all", a.dataset.month, ""); }
  });
  const nowM = new Date().getMonth() + 1;
  const si = SEASONS.findIndex(s => s.n === nowM);
  showSeason(si >= 0 ? si : 2);

  /* ---------- reviews ---------- */
  const qEl = $("#quotes"), qDots = $("#quoteDots");
  qEl.innerHTML = REVIEWS.map(r => `<figure class="quote"><blockquote>${esc(r.q)}</blockquote><cite>${esc(r.who)}<span>${esc(r.tour)}</span></cite></figure>`).join("");
  qDots.innerHTML = REVIEWS.map((_, i) => `<button aria-label="Show review ${i + 1}"></button>`).join("");
  let q = 0, qt;
  const showQ = i => {
    $$(".quote", qEl).forEach((el, j) => el.classList.toggle("is-on", i === j));
    $$("button", qDots).forEach((el, j) => el.classList.toggle("is-on", i === j));
    q = i;
  };
  $$("button", qDots).forEach((b, i) => b.addEventListener("click", () => { showQ(i); clearInterval(qt); qt = setInterval(() => showQ((q + 1) % REVIEWS.length), 8000); }));
  showQ(0);
  qt = setInterval(() => showQ((q + 1) % REVIEWS.length), 8000);

  /* ---------- guides ---------- */
  $("#guidesGrid").innerHTML = GUIDES.map(([n, f]) => `<figure class="guide reveal"><img src="assets/guides/${f}.jpg" alt="${esc(n)}, McCarthy's Party guide" loading="lazy"><figcaption>${esc(n)}</figcaption></figure>`).join("");

  /* ---------- enquiry ---------- */
  const interest = $("#interest");
  const setInterest = txt => {
    const opt = [...interest.options].find(o => o.text.toLowerCase().includes(txt.toLowerCase()));
    if (opt) interest.value = opt.value;
  };
  $$("[data-interest]").forEach(a => a.addEventListener("click", () => setInterest(a.dataset.interest)));

  $("#enquiryForm").addEventListener("submit", e => {
    e.preventDefault();
    const f = e.target;
    let ok = true;
    $$("[required]", f).forEach(i => {
      const bad = !i.value.trim() || (i.type === "email" && !/^\S+@\S+\.\S+$/.test(i.value));
      i.classList.toggle("is-invalid", bad);
      if (bad) ok = false;
    });
    if (!ok) { $("#formNote").textContent = "Please fill in your name, email and a short message."; return; }
    const d = Object.fromEntries(new FormData(f));
    const bodyTxt = `Name: ${d.first} ${d.last}\nEmail: ${d.email}\nPhone: ${d.phone || "-"}\nInterested in: ${d.interest}\nTravel month: ${d.month}\nTravellers: ${d.pax}\n\n${d.message}`;
    location.href = `mailto:nfldinfo@mccarthysparty.com?subject=${encodeURIComponent("Tour enquiry: " + d.interest)}&body=${encodeURIComponent(bodyTxt)}`;
    const note = $("#formNote");
    note.textContent = "Thanks! Your email app should open with your enquiry ready to send.";
    note.classList.add("is-ok");
  });

  /* ---------- reveal on scroll ---------- */
  $$(".section__head, .custom-cta, .gtile, .stat, .why__body, .enquire__info, .form").forEach(el => el.classList.add("reveal"));
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
  }), { rootMargin: "0px 0px -8% 0px" });
  $$(".reveal").forEach((el, i) => { el.style.transitionDelay = (i % 3) * 80 + "ms"; io.observe(el); });
})();
