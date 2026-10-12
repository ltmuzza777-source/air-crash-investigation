# Timing Rules

Status: Working design draft.

Related documents: GAME_OVERVIEW.md, CASE_DESIGN_TEMPLATE.md, FINDINGS_AND_SUBMISSION_SYSTEM.md

This document defines how in-game days, request delivery, automatic releases, and the deadline work. It builds on the limits already agreed in GAME_OVERVIEW.md (one new request per day, two active requests at most, three submissions maximum, player-controlled day advancement).

## 1. Day numbering and Day 1

- The case starts on Day 1.
- A deadline of "Day X" means Day X is the last day the player can act on.
- Day 1 is a simple verbal-style brief, as if the player were sitting in the office and being told about the incident. For Case 001 this is along the lines of: "A plane overran a runway at Hobart."
- Day 1 also shows the game disclaimer: this is a fictional game and not a reconstruction of a real accident.
- Day 1 contains only the brief and disclaimer. Any opening evidence is decided in the release schedule (see section 8).

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
- On delivery the request's slot frees, so the player can send a new request that same day (if they have not already used that day's request).

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

### Proposed deadline for Case 001

- Proposed: Day 14. This is a suggestion pending discussion of what is released each day.
- With one request per day, a Day 14 deadline allows at most 13 requests, since a request sent on Day 14 could not arrive in time. The two-active limit and multi-day turnarounds mean the practical number will be lower.
- This gives the player room to follow leads and recover from a wrong one, without allowing every item in the catalogue to be requested.
- It should be tuned after the release schedule and request durations are set. A shorter deadline (for example Day 10) increases pressure; a longer one (for example Day 21) makes the case more forgiving.

## 6. Worked example (deadline Day 14)

| Day | Action | Active requests after action |
|---|---|---|
| 1 | Send Request A (2 days) | A (due Day 3) |
| 2 | Send Request B (3 days) | A, B (B due Day 5) |
| 3 | A arrives, slot frees; send Request C (1 day) | B, C (C due Day 4) |
| 4 | C arrives; send Request D | B, D |

The one-new-request-per-day and two-active-request limits hold throughout.

## 7. Rationale

- Freeing a slot on arrival stops the player being stuck for a day after a result lands.
- A forced final submission means every case ends with a report and full feedback, with no way to avoid the outcome.
- Irreversible requests with a confirmation prompt make the player weigh each request and mirror real investigations.
- Blocking requests that cannot arrive in time prevents wasted requests.

## 8. Open decisions

- Final length of the Case 001 deadline (Day 14 is proposed).
- Request durations for Case 001, set per case in CASE_DESIGN_TEMPLATE.md.
- What evidence is released automatically on each day after Day 1, and whether any opening evidence accompanies the Day 1 brief.

## 9. Resolved decisions

| Question | Decision |
|---|---|
| Can the player decline to submit at the deadline? | No. The player must submit a report even if unfinished or wrong. |
| Can the player cancel an active request? | No. Requests are irreversible, and the player must confirm before sending. |
| What happens on Day 1 of Case 001? | A simple office-style brief plus the game disclaimer. |

## 10. Revision log

| Date | Change |
|---|---|
| 2026-10-12 | Initial draft of timing rules. |
| 2026-10-12 | Recorded decisions: forced submission, irreversible requests with confirmation, Day 1 brief and disclaimer. Proposed Day 14 deadline. |
