const app = document.querySelector("#app");
let state;

function resetState() {
  state = { screen: "menu", day: 1, delivered: [], receivedOrder: {}, active: [], requested: {}, log: [], sentToday: false, attempts: 0, notice: null, selectedTab: "evidence", modal: null, evidenceSearch: "", evidenceSort: "newest", requestSearch: "" };
}
resetState();

function esc(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}
function findRequest(code) { return CASE_001.requests.find(item => item.code === code); }
function hasEvidence(code) { return state.delivered.includes(code); }
function addLog(message) { state.log.unshift({ day: state.day, message }); }
function automaticForDay(day) { return CASE_001.automatic.filter(item => item.day === day); }
function deliverDue() {
  const due = state.active.filter(item => item.arrival === state.day);
  due.forEach(item => {
    state.delivered.push(item.code);
    state.receivedOrder[item.code] = Object.keys(state.receivedOrder).length;
    addLog(`<strong>${esc(item.code)}</strong> delivered: ${esc(findRequest(item.code)?.title || item.title)}`);
  });
  state.active = state.active.filter(item => item.arrival !== state.day);
  automaticForDay(state.day).forEach(item => {
    state.delivered.push(item.code);
    state.receivedOrder[item.code] = Object.keys(state.receivedOrder).length;
    addLog(`<strong>${esc(item.code)}</strong> released automatically: ${esc(item.title)}`);
  });
}
function deliveredItems() {
  const auto = CASE_001.automatic.filter(item => state.delivered.includes(item.code));
  const requested = state.delivered.map(findRequest).filter(Boolean);
  return [...auto, ...requested].map(item => ({ ...item, receivedAt: state.receivedOrder[item.code] ?? 0 }));
}
function documentFor(item) {
  if (CASE_001_DOCUMENTS[item.code]) return CASE_001_DOCUMENTS[item.code];
  const request = findRequest(item.code);
  return { sections: [
    { heading: "Returned record extract", kind: "text", content: item.body || request?.body || "The requested record package has been received." },
    { heading: "Package details", kind: "table", columns: ["Field", "Recorded value"], rows: [["Evidence code", item.code], ["Package title", item.title || request?.title], ["Delivery status", "Received"]] }
  ] };
}
function openDocument(code) { state.modal = code; render(); }
function closeDocument() { state.modal = null; render(); }
function canRequest(request) {
  if (state.day < 2) return { ok: false, reason: "Available after the Day 1 briefing" };
  if (state.sentToday) return { ok: false, reason: "One new request per day" };
  if (state.active.length >= 2) return { ok: false, reason: "Two active requests already" };
  if (state.requested[request.code]) return { ok: false, reason: "Already requested" };
  if (state.day + request.duration > CASE_001.deadline) return { ok: false, reason: "Would arrive after the deadline" };
  const missing = request.prerequisites.filter(prerequisite => {
    if (prerequisite === "DAY5") return state.day < 5;
    if (prerequisite === "RECORDER") return !(hasEvidence("DAT-01") || hasEvidence("DAT-02"));
    return !hasEvidence(prerequisite);
  });
  if (missing.length) return { ok: false, reason: `Needs ${missing.join(" or ")} first` };
  return { ok: true, reason: "" };
}
function startGame() {
  resetState();
  state.screen = "case";
  addLog("Case opened. Day 1 briefing received.");
  render();
}
function goMenu() { resetState(); render(); }
function requestEvidence(code) {
  const request = findRequest(code);
  const check = canRequest(request);
  if (!check.ok) return;
  const arrival = state.day + request.duration;
  state.requested[code] = true;
  state.active.push({ code, arrival });
  state.sentToday = true;
  addLog(`<strong>${esc(code)}</strong> requested. Expected arrival: start of Day ${arrival}.`);
  state.notice = { kind: "success", text: `${code} is now processing and will arrive at the start of Day ${arrival}.` };
  render();
}
function advanceDay() {
  if (state.day >= CASE_001.deadline) return showFindings(true);
  state.day += 1;
  state.sentToday = false;
  state.notice = null;
  deliverDue();
  if (state.day === CASE_001.deadline) state.notice = { kind: "error", text: "Day 19 has arrived. This is your final day to submit findings." };
  render();
}
function showFindings(forced = false) {
  state.screen = "findings";
  state.forced = forced;
  render();
}
function submitFindings(form) {
  const data = new FormData(form);
  const evidence = Array.from(form.querySelectorAll("input[name=evidence]:checked")).map(input => input.value);
  const needed = ["SYS-07", "CMP-07", "REF-05"].every(code => evidence.includes(code));
  const recorder = evidence.includes("DAT-01") || evidence.includes("DAT-02");
  const runway = evidence.includes("APT-04") || evidence.includes("WRK-09");
  const correct = data.get("primary") === "hydraulic-hose" && data.get("system") === "green-yellow" && data.get("approach") === "late-touchdown" && data.get("contributor") === "workload" && needed && recorder && runway;
  state.attempts += 1;
  if (correct) {
    state.screen = "success";
    state.result = "Your findings establish the physical failure, hydraulic-system escalation, crew workload, late touchdown, and insufficient stopping margin with supporting evidence.";
  } else if (state.attempts >= 3 || state.forced) {
    state.screen = "failure";
    state.result = "The investigation has ended without a sufficiently supported explanation. The full author conclusion is now available for review.";
  } else {
    state.screen = "case";
    state.notice = { kind: "error", text: "Submission unsuccessful. Your findings need stronger causal links or supporting evidence. You may continue investigating." };
  }
  render();
}

function renderMenu() {
  app.innerHTML = `<div class="shell"><section class="hero"><div class="hero-copy"><div class="eyebrow">Air Crash Investigation</div><h1>Every answer has to be earned.</h1><p>Build an evidence-supported explanation of a fictional aviation accident. Choose what to request, manage the clock, and decide when your findings are ready.</p><div class="button-row"><button class="primary" data-action="start">Start Case 001</button></div></div><aside class="hero-card"><div class="eyebrow">Case file 001</div><h2>${esc(CASE_001.title)}</h2><p class="muted">A runway overrun at Hobart Airport. Everyone survived. The cause is not yet known.</p><dl><dt>Aircraft</dt><dd>${esc(CASE_001.aircraft)}</dd><dt>Route</dt><dd>${esc(CASE_001.route)}</dd><dt>Deadline</dt><dd>Day ${CASE_001.deadline}</dd><dt>Requests</dt><dd>${CASE_001.requests.length}</dd></dl></aside></section></div>`;
}
function renderCase() {
  const evidence = deliveredItems();
  const available = CASE_001.requests.filter(request => !state.requested[request.code]);
  const notice = state.notice ? `<div class="notice ${state.notice.kind}">${esc(state.notice.text)}</div>` : "";
  const tab = state.selectedTab;
  app.innerHTML = `<div class="shell"><header class="topbar"><div><div class="eyebrow">Case 001</div><div class="brand">${esc(CASE_001.title)}</div></div><div class="day-pill">Day ${state.day} / ${CASE_001.deadline}</div></header>${notice}<div class="layout"><section><div class="tab-row"><button class="tab ${tab === "evidence" ? "active" : ""}" data-tab="evidence">Evidence (${evidence.length})</button><button class="tab ${tab === "requests" ? "active" : ""}" data-tab="requests">Request evidence</button><button class="tab ${tab === "findings" ? "active" : ""}" data-action="findings">Draft findings</button></div>${tab === "evidence" ? renderEvidence(evidence) : renderRequests(available)}</section><aside><div class="panel"><div class="panel-heading"><h3>Investigation status</h3></div><div class="stat-grid"><div class="stat"><strong>${state.active.length}</strong><span>active</span></div><div class="stat"><strong>${Object.keys(state.requested).length}</strong><span>requested</span></div><div class="stat"><strong>${3 - state.attempts}</strong><span>reports left</span></div></div><button class="primary" style="width:100%;margin-top:16px" data-action="advance">End Day ${state.day}</button><p class="muted small">Requests arrive at the start of their delivery day. You may send one new request per day and keep two active at a time.</p></div><div class="panel"><div class="panel-heading"><h3>Case log</h3></div><div class="log">${state.log.length ? state.log.map(item => `<div class="log-item"><strong>Day ${item.day}</strong><br>${item.message}</div>`).join("") : '<div class="muted">No events recorded.</div>'}</div></div></aside></div>${state.modal ? renderDocumentModal(state.modal) : ""}</div>`;
}
function renderEvidence(items) {
  if (state.day === 1 && !items.length) return `<div class="panel"><div class="eyebrow">Day 1 briefing</div><h2>A plane overran a runway at Hobart.</h2><p>You are the lead investigator. The aircraft survived the event, but the cause is unknown. Review the material as it arrives, request additional evidence carefully, and submit a structured explanation before the deadline.</p><div class="notice">This is a fictional scenario and not a reconstruction of a real accident.</div></div>`;
  const query = state.evidenceSearch.trim().toLowerCase();
  const filtered = items.filter(item => !query || `${item.code} ${item.title}`.toLowerCase().includes(query));
  const sorted = [...filtered].sort((a, b) => state.evidenceSort === "oldest" ? a.receivedAt - b.receivedAt : b.receivedAt - a.receivedAt);
  return `<div class="panel"><div class="panel-heading"><div><div class="eyebrow">Received material</div><h2>Evidence desk</h2><p class="muted">Open a document to inspect the records, tables, and observations it contains.</p></div></div><div class="evidence-tools"><label class="search-field"><span class="sr-only">Search received evidence</span><input id="evidence-search" type="search" value="${esc(state.evidenceSearch)}" placeholder="Search code or evidence title"></label><label class="sort-field"><span class="sr-only">Sort evidence</span><select id="evidence-sort"><option value="newest" ${state.evidenceSort === "newest" ? "selected" : ""}>Newest first</option><option value="oldest" ${state.evidenceSort === "oldest" ? "selected" : ""}>Oldest first</option></select></label></div><p class="muted small">Showing ${sorted.length} of ${items.length} received document${items.length === 1 ? "" : "s"}.</p><div class="evidence-list">${sorted.length ? sorted.map(item => `<article class="evidence-card"><div class="card-top"><div><div class="code">${esc(item.code)}</div><h3>${esc(item.title)}</h3></div><span class="tag">received</span></div><p class="muted">Document package received and available for review.</p><button class="secondary" data-open-doc="${esc(item.code)}">Open document</button></article>`).join("") : '<p class="muted">No received evidence matches that search.</p>'}</div></div>`;
}
function renderRequests(items) {
  const query = state.requestSearch.trim().toLowerCase();
  const filtered = items.filter(request => !query || `${request.code} ${request.title}`.toLowerCase().includes(query));
  return `<div class="panel"><div class="panel-heading"><div><div class="eyebrow">Choose carefully</div><h2>Request evidence</h2><p class="muted">The arrival day is shown before you commit. Requests cannot be cancelled. The contents are not known until the package arrives.</p></div></div><div class="evidence-tools"><label class="search-field"><span class="sr-only">Search available requests</span><input id="request-search" type="search" value="${esc(state.requestSearch)}" placeholder="Search request code or name"></label></div><p class="muted small">Showing ${filtered.length} of ${items.length} available request${items.length === 1 ? "" : "s"}.</p><div class="request-list">${filtered.map(request => { const check = canRequest(request); return `<article class="request-card"><div class="card-top"><div><div class="code">${request.code}</div><h3>${esc(request.title)}</h3></div><span class="tag">${request.duration} day${request.duration === 1 ? "" : "s"}</span></div><div class="request-meta"><span class="tag">arrives Day ${state.day + request.duration}</span></div><p class="muted">A case-specific ${esc(request.title.toLowerCase())} package will be prepared and delivered.</p><div class="request-actions"><span class="locked">${check.ok ? "Ready to request" : esc(check.reason)}</span><button class="secondary" data-request="${request.code}" ${check.ok ? "" : "disabled"}>Request</button></div></article>`; }).join("") || '<p class="muted">No available requests match that search.</p>'}</div></div>`;
}
function renderDocumentModal(code) {
  const item = deliveredItems().find(entry => entry.code === code) || findRequest(code);
  const document = documentFor(item);
  return `<div class="modal-backdrop" data-close-modal><section class="document-modal" role="dialog" aria-modal="true" aria-label="${esc(item.title)}"><header class="modal-header"><div><div class="code">${esc(item.code)}</div><h2>${esc(item.title)}</h2><p class="muted">Case 001 evidence document</p></div><button type="button" class="secondary" data-close-button>Close</button></header><div class="document-content">${document.sections.map(section => section.kind === "table" ? `<section><h3>${esc(section.heading)}</h3><div class="table-wrap"><table><thead><tr>${section.columns.map(column => `<th>${esc(column)}</th>`).join("")}</tr></thead><tbody>${section.rows.map(row => `<tr>${row.map(cell => `<td>${esc(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></section>` : section.kind === "pre" ? `<section><h3>${esc(section.heading)}</h3><pre class="transcript">${esc(section.content)}</pre></section>` : `<section><h3>${esc(section.heading)}</h3><p class="evidence-body">${esc(section.content)}</p></section>`).join("")}</div></section></div>`;
}
function renderFindings() {
  const evidence = deliveredItems().filter(item => item.code && !["APT-01","DAT-00","CVR-01","WX-01","ATC-01","INT-01","WRK-00"].includes(item.code));
  return `<div class="shell"><header class="topbar"><div><div class="eyebrow">Case 001</div><div class="brand">Final findings</div></div><div class="day-pill">Day ${state.day} / ${CASE_001.deadline}</div></header><section class="panel"><div class="eyebrow">Submission ${state.attempts + 1} of 3</div><h2>${state.forced ? "The deadline has arrived" : "Build your explanation"}</h2><p class="muted">Select the findings that your investigation supports, then link the evidence you obtained. Your written explanation is recorded with the report.</p><form id="findings-form" class="form-grid"><label>Primary initiating failure<select name="primary" required><option value="">Select one</option><option value="hydraulic-hose">Flexible hydraulic hose rupture</option><option value="engine-failure">Engine failure</option><option value="runway">Runway surface problem</option><option value="crew-error">Crew error as the initiating event</option></select></label><label>System sequence<select name="system" required><option value="">Select one</option><option value="green-yellow">Green hydraulic loss followed by PTU/yellow-system escalation</option><option value="engine">Loss of engine power</option><option value="brakes">Primary brake failure</option><option value="weather">Weather deterioration</option></select></label><label>Approach and outcome<select name="approach" required><option value="">Select one</option><option value="late-touchdown">Rushed high/fast approach and late touchdown led to the overrun</option><option value="normal-landing">Normal approach and normal touchdown</option><option value="runway-contamination">Runway contamination caused the overrun</option></select></label><label>Contributing factor<select name="contributor" required><option value="">Select one</option><option value="workload">High workload and the crew's decision to continue the approach</option><option value="fatigue">Crew fatigue</option><option value="weather">Severe weather</option><option value="maintenance">A proven maintenance error</option></select></label><fieldset><legend>Supporting evidence links</legend><div class="request-list">${evidence.length ? evidence.map(item => `<label class="evidence-card"><span><input type="checkbox" name="evidence" value="${item.code}"> <span class="code">${item.code}</span> — ${esc(item.title)}</span></label>`).join("") : '<p class="muted">Obtain evidence before submitting.</p>'}</div></fieldset><label>Written explanation<textarea name="explanation" placeholder="Explain the sequence of events, primary cause, contributing factors, and how the evidence supports your findings."></textarea></label><div class="button-row"><button type="submit" class="primary">Submit findings</button><button type="button" class="secondary" data-action="back">Return to evidence</button></div></form></section></div>`;
}
function renderResult(success) {
  return `<div class="shell"><section class="result"><div class="result-icon">${success ? "✓" : "!"}</div><div class="eyebrow">Case 001 concluded</div><h1>${success ? "Investigation complete" : "Investigation closed"}</h1><p>${esc(state.result)}</p><div class="panel"><h3>${success ? "What your report established" : "Review note"}</h3><p class="muted">${success ? "You connected the physical evidence, recorded data, system behaviour, approach path, and stopping performance into a coherent explanation." : "The author answer explains the complete event sequence after the case ends. In a full release this would be replaced with the case debrief."}</p></div><div class="button-row" style="justify-content:center"><button class="primary" data-action="start">Restart Case 001</button><button class="secondary" data-action="menu">Return to menu</button></div></section></div>`;
}
function render() {
  if (state.screen === "menu") renderMenu();
  else if (state.screen === "case") renderCase();
  else if (state.screen === "findings") app.innerHTML = renderFindings();
  else renderResult(state.screen === "success");
}

app.addEventListener("click", event => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "start") return startGame();
  if (action === "menu") return goMenu();
  if (action === "advance") return advanceDay();
  if (action === "findings") return showFindings(false);
  if (action === "back") { state.screen = "case"; state.selectedTab = "evidence"; return render(); }
  const tab = event.target.closest("[data-tab]")?.dataset.tab;
  if (tab) { state.selectedTab = tab; return render(); }
  const code = event.target.closest("[data-request]")?.dataset.request;
  if (code) requestEvidence(code);
  const openCode = event.target.closest("[data-open-doc]")?.dataset.openDoc;
  if (openCode) openDocument(openCode);
  if (event.target.closest("[data-close-button]")) { event.stopPropagation(); return closeDocument(); }
  if (event.target.matches("[data-close-modal]")) return closeDocument();
  if (event.target.closest("#evidence-sort")) return;
});
app.addEventListener("input", event => {
  if (!["evidence-search", "request-search"].includes(event.target.id)) return;
  const searchId = event.target.id;
  if (searchId === "evidence-search") state.evidenceSearch = event.target.value;
  if (searchId === "request-search") state.requestSearch = event.target.value;
  const cursor = event.target.selectionStart;
  render();
  const replacement = document.querySelector(`#${searchId}`);
  if (replacement) { replacement.focus(); replacement.setSelectionRange(cursor, cursor); }
});
app.addEventListener("change", event => {
  if (event.target.id === "evidence-sort") { state.evidenceSort = event.target.value; render(); }
});
app.addEventListener("submit", event => {
  if (event.target.id === "findings-form") { event.preventDefault(); submitFindings(event.target); }
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && state.modal) closeDocument();
});
render();
