# Timing Rules

Status: Working design draft.

Related documents: GAME_OVERVIEW.md, CASE_DESIGN_TEMPLATE.md, FINDINGS_AND_SUBMISSION_SYSTEM.md

This document defines how in-game days, request delivery, automatic releases, and the deadline work. It builds on the limits already agreed in GAME_OVERVIEW.md (one new request per day, two active requests at most, three submissions maximum, player-controlled day advancement).

## 1. Day numbering

- The case starts on Day 1. The player sees the briefing and opening evidence package.
- A deadline of "Day X" means Day X is the last day the player can act on.

## 2. During a day

- The player may send one new evidence request, provided fewer than two requests are active.
- A new request starts processing immediately.
- The player may submit a report at any time while attempts remain.
- Time does not pass until the player chooses to end the day.

## 3. Request arrival

- A request sent on Day N with a duration of D days arrives at the start of Day N + D.
- Example: a 1-day request sent on Day 3 arrives at the start of Day 4.
- On delivery the request's slot frees, so the player can send a new request that same day (if they have not already used that day's request).
- The interface shows the exact arrival day before the player commits to a request.

## 4. Ending a day

When the player ends the day, the game performs these steps in order:

1. Advance the day counter.
2. Deliver any requests due on the new day and free their slots.
3. Release any scheduled automatic evidence for the new day.
4. Check the deadline.

Deliveries and automatic releases appear together at the start of the day, so their relative order does not affect the player.

## 5. Deadline

- If the player ends Day X, the game goes directly to a final submission screen. The player cannot skip it or continue investigating.
- If an attempt remains, the player may submit a report. An unsuccessful final report ends the case in failure.
- The three-attempt limit takes precedence. The deadline never grants a fourth attempt.
- Requests still outstanding at the deadline are lost.
- The interface blocks any request that would arrive after Day X, with a message such as "This would not arrive before the deadline."

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
- A forced final submission resolves the open question about a player who declines to submit at the deadline.
- Blocking requests that cannot arrive in time prevents wasted requests.

## 8. Open decisions

- Whether the player can choose to "decline to submit" at the deadline (counts as failure, shows the full explanation), as a gentler alternative to the forced submission.
- Whether the player can cancel an active request.
- How long the first case's deadline should be, and its request durations (set per case in CASE_DESIGN_TEMPLATE.md).
- Whether the automatic-release schedule for Case 001 includes anything on Day 1.

## 9. Revision log

| Date | Change |
|---|---|
| 2026-10-12 | Initial draft of timing rules. |
