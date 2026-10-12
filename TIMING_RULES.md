# Timing Rules

Status: Working design draft.

Related documents: GAME_OVERVIEW.md, CASE_DESIGN_TEMPLATE.md, FINDINGS_AND_SUBMISSION_SYSTEM.md, CASE_001_EVIDENCE_SCHEDULE.md, EVIDENCE_REQUEST_CATALOGUE.md

This document defines how in-game days, request delivery, automatic releases, and the deadline work. It builds on the limits already agreed in GAME_OVERVIEW.md (one new request per day, two active requests at most, three submissions maximum, player-controlled day advancement).

## 1. Day numbering and Day 1

- The case starts on Day 1.
- A deadline of "Day X" means Day X is the last day the player can act on.
- Day 1 is a simple verbal-style brief, as if the player were sitting in the office and being told about the incident. For Case 001 this is along the lines of: "A plane overran a runway at Hobart."
- Day 1 also shows the game disclaimer: this is a fictional game and not a reconstruction of a real accident.
- Day 1 contains only the brief and disclaimer. Any opening evidence is decided in the case's release schedule (see section 8). The current Case 001 draft schedule releases no data on Day 1; the first data arrives on Day 2.

## 2. During a day

- The player may send one new evidence request, provided fewer than two requests are active.
- A new request starts processing immediately once confirmed (see section 3).
- The player may submit a report at any time while attempts remain.
- Time does not pass until the player chooses to end the day.

## 3. Sending requests

- Requests are final. Once sent, a request cannot be cancelled or taken back, because in real life a request consumes resources and cannot be undone.
- Before sending, the player must confirm with a prompt such as: "Are you sure you want to send this request? This action cannot be undone."
- The prompt also shows the exact arrival day, so the player sees the cost before committing.
- A request sent on Day N with a duration of D days arrives at the start of Day N + D.
- Example: a 1-day request sent on Day 3 arrives at the start of Day 4.
- A request that arrives at the start of the deadline day (N + D = X) is allowed, because the player can still act on Day X.
- On delivery the request's slot frees, so the player can send a new request that same day (if they have not already used that day's request).
- Some requests have prerequisites (for example, a laboratory test that needs a component examination delivered first). These are set per case in the evidence schedule, and the request stays unavailable until the prerequisite has been delivered.

## 4. Ending a day

When the player ends the day, the game performs these steps in order:

1. Advance the day counter.
2. Deliver any requests due on the new day and free their slots.
3. Release any scheduled automatic evidence for the new day.
4. Check the deadline.

Deliveries and automatic releases appear together at the start of the day, so their relative order does not affect the player.

## 5. Deadline

- If the player ends Day X, the game goes directly to a final submission screen. The player cannot skip it, decline to submit, or continue investigating.
- The player must submit a report even if it is incomplete or wrong. There is no option to leave without submitting.
- An unsuccessful final report ends the case in failure.
- The three-attempt limit takes precedence. The deadline never grants a fourth attempt.
- Requests still outstanding at the deadline are lost.
- The interface blocks any request that would arrive after Day X, with a message such as "This would not arrive before the deadline."

### Deadline for Case 001

- Set: Day 19 (decided 2026-10-12). CASE_001_EVIDENCE_SCHEDULE.md is drafted around this deadline. It is still subject to playtesting.
- With one request per day, a Day 19 deadline allows at most 18 requests, since a request sent on Day 19 could not arrive in time. The two-active limit and multi-day turnarounds mean the practical number is lower. The evidence schedule estimates roughly 12 to 14 requests.
- The seven-request core route in the evidence schedule finishes on Day 13, which leaves about six spare days for wrong leads, rule-out requests, and writing the report.
- The draft schedule uses request durations from 1 to 5 days. Both the deadline and durations should be tuned through testing. A shorter deadline (for example Day 10) increases pressure; a longer one (for example Day 21) makes the case more forgiving. If testing shows Day 19 is too relaxed, tighten it.

## 6. Worked example (deadline Day 19)

| Day | Action | Active requests after action |
|---|---|---|
| 1 | Send Request A (2 days) | A (due Day 3) |
| 2 | Send Request B (3 days) | A, B (B due Day 5) |
| 3 | A arrives, slot frees; send Request C (1 day) | B, C (C due Day 4) |
| 4 | C arrives; send Request D | B, D |

The one-new-request-per-day and two-active-request limits hold throughout. This example is generic and does not reflect Case 001's schedule, where no requests are sent on Day 1 because no data has arrived yet.

## 7. Rationale

- Freeing a slot on arrival stops the player being stuck for a day after a result lands.
- A forced final submission means every case ends with a report and full feedback, with no way to avoid the outcome.
- Irreversible requests with a confirmation prompt make the player weigh each request and mirror real investigations.
- Blocking requests that cannot arrive in time prevents wasted requests.

## 8. Open decisions

- Whether the Day 19 deadline for Case 001 holds up in playtesting (it may prove too relaxed or too tight).
- Final request durations for Case 001. The draft evidence schedule proposes 1 to 5 days per request; these need playtesting.
- Whether any opening evidence should accompany the Day 1 brief. The current schedule assumes none, which is still to be confirmed.
- Whether the player can send a request on Day 1 at all, given the brief contains no data to follow up.

## 9. Resolved decisions

| Question | Decision |
|---|---|
| Can the player decline to submit at the deadline? | No. The player must submit a report even if unfinished or wrong. |
| Can the player cancel an active request? | No. Requests are irreversible, and the player must confirm before sending. |
| What happens on Day 1 of Case 001? | A simple office-style brief plus the game disclaimer. |
| Can a request arrive on the deadline day? | Yes. Arrival at the start of Day X is allowed; arrival after Day X is blocked. |
| What is Case 001's deadline? | Day 19 (set 2026-10-12), subject to playtesting. |
| What is released automatically in Case 001? | Drafted in CASE_001_EVIDENCE_SCHEDULE.md (Days 2 to 6, nothing from Day 7). Still subject to testing. |
| Does the example core route respect the request limits? | Yes. It was rebuilt in CASE_001_EVIDENCE_SCHEDULE.md and checked against both limits and the dependencies. |

## 10. Revision log

| Date | Change |
|---|---|
| 2026-10-12 | Initial draft of timing rules. |
| 2026-10-12 | Recorded decisions: forced submission, irreversible requests with confirmation, Day 1 brief and disclaimer. Proposed Day 14 deadline. |
| 2026-10-12 | Linked the Case 001 evidence schedule and request catalogue. Added arrival-on-deadline-day rule and request prerequisites. Updated open decisions to reflect the drafted schedule and flagged problems in its example route. |
| 2026-10-12 | Resolved the example-route problem after the schedule was corrected. Noted that the core route finishes on Day 13, so the Day 14 deadline may be tight. |
| 2026-10-12 | Changed the Case 001 deadline from Day 14 to Day 19. Updated the request estimate, spare-time note, worked example, open decisions, and resolved decisions. |
