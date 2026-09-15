/* ---------- icons (minimal inline SVG, no external deps) ---------- */
const ICON = {
  home: (s=20,c="currentColor") => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/></svg>`,
  clipboard: (s=20,c="currentColor") => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="17" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><line x1="8" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="16" y2="15"/></svg>`,
  users: (s=20,c="currentColor") => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><circle cx="17.5" cy="9" r="2.4"/><path d="M21 20c0-2.5-1.8-4.3-3.9-4.9"/></svg>`,
  star: (s=16,c="currentColor",filled=false) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="${filled?c:'none'}" stroke="${c}" stroke-width="1.6" stroke-linejoin="round"><path d="M12 3.5l2.7 5.6 6.1.6-4.6 4.1 1.3 6-5.5-3.1-5.5 3.1 1.3-6-4.6-4.1 6.1-.6z"/></svg>`,
  plus: (s=24,c="#fff") => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.3" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  x: (s=20,c="currentColor") => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>`,
  trash: (s=15,c="currentColor") => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="7" x2="20" y2="7"/><path d="M6 7l1 14h10l1-14"/><path d="M9 7V4h6v3"/></svg>`,
  calendar: (s=12,c="currentColor") => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/></svg>`,
  camera: (s=13,c="currentColor") => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7l1.5-3h5L16 7"/><circle cx="12" cy="13.5" r="3.3"/></svg>`,
  wifi: (s=13,c="currentColor") => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9a12 12 0 0 1 16 0"/><path d="M7.5 12.8a7.5 7.5 0 0 1 9 0"/><path d="M10.5 16.5a3.2 3.2 0 0 1 3 0"/><circle cx="12" cy="19.5" r="0.6" fill="${c}"/></svg>`,
  network: (s=13,c="currentColor") => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="6" rx="1.5"/><line x1="7" y1="7" x2="7" y2="7"/><path d="M6 10v3M12 10v6M18 10v3"/><rect x="3" y="13" width="7" height="6" rx="1.5"/><rect x="15" y="13" width="7" height="6" rx="1.5"/></svg>`,
  router: (s=13,c="currentColor") => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="12" width="18" height="7" rx="2"/><path d="M8 12V8a2 2 0 0 1 2-2"/><path d="M16 12V6a2 2 0 0 0-2-2"/><circle cx="8" cy="15.5" r="0.8" fill="${c}"/><circle cx="12" cy="15.5" r="0.8" fill="${c}"/></svg>`,
  check: (s=16,c="#fff") => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  trend: (s=24,c="currentColor") => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 17 9 11 13 15 21 6"/><polyline points="15 6 21 6 21 12"/></svg>`,
};

const TABS = [
  { key: "dashboard", label: "Overview", icon: "home" },
  { key: "visits", label: "Site Visits", icon: "clipboard" },
  { key: "clients", label: "Clients", icon: "users" },
  { key: "reviews", label: "Reviews", icon: "star" },
];

const SERVICES = [
  "Free Site Assessment",
  "Enterprise WiFi Install",
  "IP Camera System",
  "Network Cabling",
  "Managed IT Support",
  "System Upgrade",
];

const COLORS = {
  navy: "#0e2a3d", teal: "#1c6e70", brass: "#b98b3e", coral: "#c1503f",
  slate: "#64748a", bronze: "#9c6b3e", silver: "#8a93a0", gold: "#c9a227",
};

const STATUS_COLOR = { Lead: COLORS.coral, Prospect: COLORS.brass, Active: COLORS.teal };
const TIER_COLOR = { Bronze: COLORS.bronze, Silver: COLORS.silver, Gold: COLORS.gold };

/* ---------- state + persistence ---------- */
const STORAGE_KEY = "rsvi-data";
let data = loadData();
let currentTab = "dashboard";

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { clients: [], visits: [], reviews: [] };
  } catch (e) {
    return { clients: [], visits: [], reviews: [] };
  }
}
function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
const uid = () => Math.random().toString(36).slice(2, 10);
const todayISO = () => new Date().toISOString().slice(0, 10);
function fmtDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
function esc(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}

/* ---------- tab bar ---------- */
function renderTabBar() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    const t = TABS.find((x) => x.key === btn.dataset.tab);
    const active = t.key === currentTab;
    btn.classList.toggle("active", active);
    btn.innerHTML = `${ICON[t.icon](22, active ? COLORS.teal : COLORS.slate)}<span>${t.label}</span>`;
    btn.onclick = () => { currentTab = t.key; render(); };
  });
}

/* ---------- shared bits ----------- */
function statusPill(text, color) {
  return `<span class="pill" style="background:${color}1A;color:${color}">${esc(text)}</span>`;
}
function equipRow(v) {
  return `<div class="equip-row">
    <div class="equip-item">${ICON.camera(13, COLORS.slate)}<span>${v.cameras || 0}</span></div>
    <div class="equip-item">${ICON.wifi(13, COLORS.slate)}<span>${v.accessPoints || 0}</span></div>
    <div class="equip-item">${ICON.network(13, COLORS.slate)}<span>${v.switches || 0}</span></div>
    <div class="equip-item">${ICON.router(13, COLORS.slate)}<span>${v.routers || 0}</span></div>
  </div>`;
}
function starsHTML(rating, size = 14) {
  return `<div class="stars">${[1,2,3,4,5].map(i => ICON.star(size, COLORS.brass, i <= rating)).join("")}</div>`;
}
function emptyState(iconKey, title, body) {
  return `<div class="empty-state">
    <div class="circle">${ICON[iconKey](24, COLORS.slate)}</div>
    <p class="title">${esc(title)}</p>
    <p class="body">${esc(body)}</p>
  </div>`;
}

/* ---------- main render dispatch ---------- */
function render() {
  renderTabBar();
  const main = document.getElementById("main-content");
  const fab = document.getElementById("fab");

  if (currentTab === "dashboard") {
    main.innerHTML = renderDashboard();
    fab.classList.add("hidden");
  } else if (currentTab === "visits") {
    main.innerHTML = renderVisits();
    showFab(() => openSheet("visit"));
  } else if (currentTab === "clients") {
    main.innerHTML = renderClients();
    showFab(() => openSheet("client"));
  } else {
    main.innerHTML = renderReviews();
    showFab(() => openSheet("review"));
  }
  wireRowActions();
}

function showFab(onClick) {
  const fab = document.getElementById("fab");
  fab.innerHTML = ICON.plus(24, "#fff");
  fab.classList.remove("hidden");
  fab.onclick = onClick;
}

/* ---------- dashboard ---------- */
function renderDashboard() {
  const activeClients = data.clients.filter((c) => c.status === "Active").length;
  const upcoming = data.visits.filter((v) => v.status === "Scheduled").length;
  const avgRating = data.reviews.length
    ? (data.reviews.reduce((s, r) => s + r.rating, 0) / data.reviews.length).toFixed(1)
    : "—";

  const recent = [
    ...data.visits.map((v) => ({ kind: "visit", ...v })),
    ...data.reviews.map((r) => ({ kind: "review", ...r })),
  ].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 5);

  const recentHTML = recent.length === 0
    ? emptyState("trend", "Nothing yet", "Log a site visit or a review and it'll show up here.")
    : recent.map((item) => item.kind === "visit"
        ? `<div class="card"><div class="card-row"><span class="card-title">${esc(item.clientName)}</span><span class="date-inline">${fmtDate(item.date)}</span></div><p class="card-sub" style="margin-top:2px">${esc(item.service)}</p></div>`
        : `<div class="card"><div class="card-row"><span class="card-title">${esc(item.clientName)}</span><span class="date-inline">${fmtDate(item.date)}</span></div>${starsHTML(item.rating, 12)}</div>`
      ).join("");

  return `
    <div class="stat-row">
      <div class="stat-card"><span class="value">${activeClients}</span><span class="label">Active Clients</span></div>
      <div class="stat-card"><span class="value">${upcoming}</span><span class="label">Upcoming Visits</span></div>
      <div class="stat-card"><span class="value">${avgRating}</span><span class="label">Avg. Rating</span></div>
    </div>
    <div class="quick-row">
      <button class="quick-btn" id="qa-visit">${ICON.clipboard(16,"#fff")} New Site Visit</button>
      <button class="quick-btn" id="qa-client">${ICON.users(16,"#fff")} New Client</button>
    </div>
    <p class="section-label">Recent activity</p>
    ${recentHTML}
  `;
}

/* ---------- site visits ---------- */
function renderVisits() {
  if (data.visits.length === 0) {
    return emptyState("clipboard", "No visits yet", "Tap the + button to log a free assessment or a scheduled site visit.");
  }
  return data.visits.map((v) => `
    <div class="card" data-visit="${v.id}">
      <div class="card-row">
        <div><p class="card-title">${esc(v.clientName)}</p><p class="card-sub">${esc(v.service)}</p></div>
        <button class="icon-btn" data-action="delete-visit" data-id="${v.id}">${ICON.trash(15, COLORS.slate)}</button>
      </div>
      ${equipRow(v)}
      <div class="card-footer">
        <div class="date-inline">${ICON.calendar(12, COLORS.slate)}${fmtDate(v.date)}</div>
        <button data-action="toggle-visit" data-id="${v.id}">${statusPill(v.status, v.status === "Completed" ? COLORS.teal : COLORS.brass)}</button>
      </div>
    </div>
  `).join("");
}

/* ---------- clients ---------- */
function renderClients() {
  if (data.clients.length === 0) {
    return emptyState("users", "No clients yet", "Add a client to start tracking engagement and service tier.");
  }
  return data.clients.map((c) => `
    <div class="card">
      <div class="card-row">
        <p class="card-title">${esc(c.name)}</p>
        <button class="icon-btn" data-action="delete-client" data-id="${c.id}">${ICON.trash(15, COLORS.slate)}</button>
      </div>
      <div style="display:flex;gap:6px;margin-top:6px">
        ${statusPill(c.status, STATUS_COLOR[c.status])}
        ${c.tier ? statusPill(c.tier, TIER_COLOR[c.tier]) : ""}
      </div>
      <div class="date-inline" style="margin-top:10px">${ICON.calendar(12, COLORS.slate)}Last contact ${fmtDate(c.lastContact)}</div>
      ${c.notes ? `<p class="notes-line">${esc(c.notes)}</p>` : ""}
    </div>
  `).join("");
}

/* ---------- reviews ---------- */
function renderReviews() {
  if (data.reviews.length === 0) {
    return emptyState("star", "No reviews yet", "Add client feedback here to track satisfaction over time.");
  }
  return data.reviews.map((r) => `
    <div class="card">
      <div class="card-row">
        <div><p class="card-title">${esc(r.clientName)}</p>${starsHTML(r.rating)}</div>
        <button class="icon-btn" data-action="delete-review" data-id="${r.id}">${ICON.trash(15, COLORS.slate)}</button>
      </div>
      ${r.comment ? `<p class="notes-line">${esc(r.comment)}</p>` : ""}
      <span class="date-inline" style="margin-top:6px">${fmtDate(r.date)}</span>
    </div>
  `).join("");
}

/* ---------- row action wiring ---------- */
function wireRowActions() {
  document.querySelectorAll('[data-action="delete-visit"]').forEach((el) =>
    el.onclick = () => { data.visits = data.visits.filter((v) => v.id !== el.dataset.id); saveData(); render(); });
  document.querySelectorAll('[data-action="toggle-visit"]').forEach((el) =>
    el.onclick = () => {
      const v = data.visits.find((v) => v.id === el.dataset.id);
      v.status = v.status === "Scheduled" ? "Completed" : "Scheduled";
      saveData(); render();
    });
  document.querySelectorAll('[data-action="delete-client"]').forEach((el) =>
    el.onclick = () => { data.clients = data.clients.filter((c) => c.id !== el.dataset.id); saveData(); render(); });
  document.querySelectorAll('[data-action="delete-review"]').forEach((el) =>
    el.onclick = () => { data.reviews = data.reviews.filter((r) => r.id !== el.dataset.id); saveData(); render(); });

  const qaVisit = document.getElementById("qa-visit");
  const qaClient = document.getElementById("qa-client");
  if (qaVisit) qaVisit.onclick = () => openSheet("visit");
  if (qaClient) qaClient.onclick = () => openSheet("client");
}

/* ---------- sheets (add forms) ---------- */
function openSheet(kind) {
  const container = document.getElementById("sheet-container");
  container.classList.remove("hidden");
  container.innerHTML = kind === "visit" ? visitSheetHTML() : kind === "client" ? clientSheetHTML() : reviewSheetHTML();
  container.onclick = (e) => { if (e.target === container) closeSheet(); };
  document.getElementById("sheet-close").onclick = closeSheet;
  if (kind === "visit") wireVisitSheet();
  if (kind === "client") wireClientSheet();
  if (kind === "review") wireReviewSheet();
}
function closeSheet() {
  const container = document.getElementById("sheet-container");
  container.classList.add("hidden");
  container.innerHTML = "";
}

function sheetShell(title, bodyHTML) {
  return `<div class="sheet">
    <div class="grabber"></div>
    <div class="sheet-head"><h2>${esc(title)}</h2><button id="sheet-close">${ICON.x(20, COLORS.slate)}</button></div>
    ${bodyHTML}
  </div>`;
}

function visitSheetHTML() {
  return sheetShell("New Site Visit", `
    <div class="field"><label>Client name</label><input type="text" id="f-client" placeholder="e.g. Bluebeard's Beach Club" /></div>
    <div class="field"><label>Service requested</label>
      <select id="f-service">${SERVICES.map((s) => `<option>${esc(s)}</option>`).join("")}</select>
    </div>
    <div class="equip-grid">
      <div class="equip-input">${ICON.camera(14, COLORS.slate)}<input type="number" min="0" id="f-cameras" value="0" /></div>
      <div class="equip-input">${ICON.wifi(14, COLORS.slate)}<input type="number" min="0" id="f-aps" value="0" /></div>
      <div class="equip-input">${ICON.network(14, COLORS.slate)}<input type="number" min="0" id="f-switches" value="0" /></div>
      <div class="equip-input">${ICON.router(14, COLORS.slate)}<input type="number" min="0" id="f-routers" value="0" /></div>
    </div>
    <div class="field"><label>Visit date</label><input type="date" id="f-date" value="${todayISO()}" /></div>
    <div class="field"><label>Status</label>
      <div class="segmented" id="f-status">
        <button class="active" data-val="Scheduled">Scheduled</button>
        <button data-val="Completed">Completed</button>
      </div>
    </div>
    <div class="field"><label>Notes</label><textarea id="f-notes" rows="3" placeholder="Site conditions, cabling runs, follow-ups…"></textarea></div>
    <button class="save-btn" id="f-save" disabled>${ICON.check(16,"#fff")} Save visit</button>
  `);
}

function wireVisitSheet() {
  let status = "Scheduled";
  const clientInput = document.getElementById("f-client");
  const saveBtn = document.getElementById("f-save");
  clientInput.oninput = () => { saveBtn.disabled = clientInput.value.trim().length === 0; };
  document.querySelectorAll("#f-status button").forEach((b) => b.onclick = () => {
    status = b.dataset.val;
    document.querySelectorAll("#f-status button").forEach((x) => x.classList.toggle("active", x === b));
  });
  saveBtn.onclick = () => {
    data.visits.unshift({
      id: uid(),
      clientName: clientInput.value.trim(),
      service: document.getElementById("f-service").value,
      cameras: parseInt(document.getElementById("f-cameras").value || "0", 10),
      accessPoints: parseInt(document.getElementById("f-aps").value || "0", 10),
      switches: parseInt(document.getElementById("f-switches").value || "0", 10),
      routers: parseInt(document.getElementById("f-routers").value || "0", 10),
      date: document.getElementById("f-date").value || todayISO(),
      status,
      notes: document.getElementById("f-notes").value.trim(),
    });
    saveData(); closeSheet(); render();
  };
}

function clientSheetHTML() {
  return sheetShell("New Client", `
    <div class="field"><label>Client name</label><input type="text" id="f-name" placeholder="Business name" /></div>
    <div class="field"><label>Status</label>
      <div class="segmented" id="f-cstatus">
        <button class="active" data-val="Lead">Lead</button>
        <button data-val="Prospect">Prospect</button>
        <button data-val="Active">Active</button>
      </div>
    </div>
    <div class="field"><label>Service tier</label>
      <div class="segmented" id="f-tier">
        <button data-val="Bronze">Bronze</button>
        <button data-val="Silver">Silver</button>
        <button data-val="Gold">Gold</button>
      </div>
    </div>
    <div class="field"><label>Last contact</label><input type="date" id="f-lastcontact" value="${todayISO()}" /></div>
    <div class="field"><label>Notes</label><textarea id="f-cnotes" rows="3" placeholder="Context, decision-maker, property size…"></textarea></div>
    <button class="save-btn" id="f-csave" disabled>${ICON.check(16,"#fff")} Save client</button>
  `);
}

function wireClientSheet() {
  let status = "Lead";
  let tier = "";
  const nameInput = document.getElementById("f-name");
  const saveBtn = document.getElementById("f-csave");
  nameInput.oninput = () => { saveBtn.disabled = nameInput.value.trim().length === 0; };
  document.querySelectorAll("#f-cstatus button").forEach((b) => b.onclick = () => {
    status = b.dataset.val;
    document.querySelectorAll("#f-cstatus button").forEach((x) => x.classList.toggle("active", x === b));
  });
  document.querySelectorAll("#f-tier button").forEach((b) => b.onclick = () => {
    tier = tier === b.dataset.val ? "" : b.dataset.val;
    document.querySelectorAll("#f-tier button").forEach((x) => x.classList.toggle("active", x.dataset.val === tier));
  });
  saveBtn.onclick = () => {
    data.clients.unshift({
      id: uid(),
      name: nameInput.value.trim(),
      status,
      tier: tier || null,
      lastContact: document.getElementById("f-lastcontact").value || todayISO(),
      notes: document.getElementById("f-cnotes").value.trim(),
    });
    saveData(); closeSheet(); render();
  };
}

function reviewSheetHTML() {
  return sheetShell("New Review", `
    <div class="field"><label>Client name</label><input type="text" id="f-rclient" placeholder="Who left the review?" /></div>
    <div class="field"><label>Rating</label>
      <div class="star-picker" id="f-rating">
        ${[1,2,3,4,5].map((i) => `<button data-val="${i}">${ICON.star(26, COLORS.brass, i <= 5)}</button>`).join("")}
      </div>
    </div>
    <div class="field"><label>Comment</label><textarea id="f-rcomment" rows="3" placeholder="What did they say?"></textarea></div>
    <div class="field"><label>Date</label><input type="date" id="f-rdate" value="${todayISO()}" /></div>
    <button class="save-btn" id="f-rsave" disabled>${ICON.check(16,"#fff")} Save review</button>
  `);
}

function wireReviewSheet() {
  let rating = 5;
  const clientInput = document.getElementById("f-rclient");
  const saveBtn = document.getElementById("f-rsave");
  const starBtns = document.querySelectorAll("#f-rating button");
  const paintStars = () => starBtns.forEach((b, i) => b.innerHTML = ICON.star(26, COLORS.brass, i + 1 <= rating));
  paintStars();
  starBtns.forEach((b, i) => b.onclick = () => { rating = i + 1; paintStars(); });
  clientInput.oninput = () => { saveBtn.disabled = clientInput.value.trim().length === 0; };
  saveBtn.onclick = () => {
    data.reviews.unshift({
      id: uid(),
      clientName: clientInput.value.trim(),
      rating,
      comment: document.getElementById("f-rcomment").value.trim(),
      date: document.getElementById("f-rdate").value || todayISO(),
    });
    saveData(); closeSheet(); render();
  };
}

/* ---------- install prompt (PWA) ---------- */
let deferredInstallEvent = null;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstallEvent = e;
  if (!localStorage.getItem("rsvi-install-dismissed")) {
    document.getElementById("install-banner").classList.remove("hidden");
  }
});
document.getElementById("install-btn").onclick = async () => {
  if (!deferredInstallEvent) return;
  deferredInstallEvent.prompt();
  await deferredInstallEvent.userChoice;
  document.getElementById("install-banner").classList.add("hidden");
};
document.getElementById("install-dismiss").onclick = () => {
  document.getElementById("install-banner").classList.add("hidden");
  localStorage.setItem("rsvi-install-dismissed", "1");
};

/* ---------- service worker ---------- */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}

/* ---------- boot ---------- */
render();
