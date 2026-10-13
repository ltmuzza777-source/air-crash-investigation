const app = document.querySelector("#app");
const roleLabels = { core: "Core", supporting: "Supporting", background: "Background", "rule-out": "Rule-out" };
let state;

function resetState() {
  state = { screen: "menu", day: 1, delivered: [], active: [], requested: {}, log: [], sentToday: false, attempts: 0, notice: null, selectedTab: "evidence" };
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
    addLog(`<strong>${esc(item.code)}</strong> delivered: ${esc(findRequest(item.code)?.title || item.title)}`);
  });
  state.active = state.active.filter(item => item.arrival !== state.day);
  automaticForDay(state.day).forEach(item => {
    state.delivered.push(item.code);
    addLog(`<strong>${esc(item.code)}</strong> released automatically: ${esc(item.title)}`);
  });
}
function deliveredItems() {
  const auto = CASE_001.automatic.filter(item => state.delivered.includes(item.code));
  const requested = state.delivered.map(findRequest).filter(Boolean);
  return [...auto, ...requested];
}
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
  app.innerHTML = `<div class="shell"><header class="topbar"><div><div class="eyebrow">Case 001</div><div class="brand">${esc(CASE_001.title)}</div></div><div class="day-pill">Day ${state.day} / ${CASE_001.deadline}</div></header>${notice}<div class="layout"><section><div class="tab-row"><button class="tab ${tab === "evidence" ? "active" : ""}" data-tab="evidence">Evidence (${evidence.length})</button><button class="tab ${tab === "requests" ? "active" : ""}" data-tab="requests">Request evidence</button><button class="tab ${tab === "findings" ? "active" : ""}" data-action="findings">Draft findings</button></div>${tab === "evidence" ? renderEvidence(evidence) : renderRequests(available)}</section><aside><div class="panel"><div class="panel-heading"><h3>Investigation status</h3></div><div class="stat-grid"><div class="stat"><strong>${state.active.length}</strong><span>active</span></div><div class="stat"><strong>${Object.keys(state.requested).length}</strong><span>requested</span></div><div class="stat"><strong>${3 - state.attempts}</strong><span>reports left</span></div></div><button class="primary" style="width:100%;margin-top:16px" data-action="advance">End Day ${state.day}</button><p class="muted small">Requests arrive at the start of their delivery day. You may send one new request per day and keep two active at a time.</p></div><div class="panel"><div class="panel-heading"><h3>Case log</h3></div><div class="log">${state.log.length ? state.log.map(item => `<div class="log-item"><strong>Day ${item.day}</strong><br>${item.message}</div>`).join("") : '<div class="muted">No events recorded.</div>'}</div></div></aside></div></div>`;
}
function renderEvidence(items) {
  if (state.day === 1 && !items.length) return `<div class="panel"><div class="eyebrow">Day 1 briefing</div><h2>A plane overran a runway at Hobart.</h2><p>You are the lead investigator. The aircraft survived the event, but the cause is unknown. Review the material as it arrives, request additional evidence carefully, and submit a structured explanation before the deadline.</p><div class="notice">This is a fictional scenario and not a reconstruction of a real accident.</div></div>`;
  return `<div class="panel"><div class="panel-heading"><div><div class="eyebrow">Received material</div><h2>Evidence desk</h2></div></div><div class="evidence-list">${items.length ? items.map(item => `<article class="evidence-card"><div class="card-top"><div><div class="code">${esc(item.code)}</div><h3>${esc(item.title)}</h3></div><span class="tag">received</span></div><div class="evidence-body">${esc(item.body)}</div></article>`).join("") : '<p class="muted">No evidence has arrived yet. End the day to receive the next scheduled release.</p>'}</div></div>`;
}
function renderRequests(items) {
  return `<div class="panel"><div class="panel-heading"><div><div class="eyebrow">Choose carefully</div><h2>Request evidence</h2><p class="muted">The arrival day is shown before you commit. Requests cannot be cancelled.</p></div></div><div class="request-list">${items.map(request => { const check = canRequest(request); return `<article class="request-card"><div class="card-top"><div><div class="code">${request.code}</div><h3>${esc(request.title)}</h3></div><span class="tag">${request.duration} day${request.duration === 1 ? "" : "s"}</span></div><div class="request-meta"><span class="tag">${roleLabels[request.role]}</span><span class="tag">arrives Day ${state.day + request.duration}</span></div><p>${esc(request.body)}</p><div class="request-actions"><span class="locked">${check.ok ? "Ready to request" : esc(check.reason)}</span><button class="secondary" data-request="${request.code}" ${check.ok ? "" : "disabled"}>Request</button></div></article>`; }).join("")}</div></div>`;
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
});
app.addEventListener("submit", event => {
  if (event.target.id === "findings-form") { event.preventDefault(); submitFindings(event.target); }
});
render();
