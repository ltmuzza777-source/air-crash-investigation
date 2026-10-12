# Case 001 — Evidence Schedule

Status: Working draft.
Author-only: Contains roles and intended solution logic. Must not be shown to the player.

Related documents: TIMING_RULES.md, EVIDENCE_REQUEST_CATALOGUE.md, CASE_001_OVERVIEW.md, CASE_DESIGN_TEMPLATE.md

This document plans what the player receives automatically each day and what they can request in Case 001. Request IDs refer to EVIDENCE_REQUEST_CATALOGUE.md. Durations and the deadline are proposals and need testing.

## 1. Timing assumptions

- Proposed deadline: Day 14.
- One new request per day; at most two active requests.
- A request sent on Day N with duration D arrives at the start of Day N + D.
- Requests are irreversible and need player confirmation.
- Automatic releases appear at the start of the day, together with request deliveries.
- Maximum request duration: 5 days.

## 2. Automatic releases

Automatic evidence is not requestable. Automatic items give the player a factual starting picture without solving the case.

| Day | Released automatically | Notes |
|---|---|---|
| 1 | Office-style brief ("a plane overran a runway at Hobart") and game disclaimer | No data on Day 1. |
| 2 | Basic recorded-data package; airport layout and charts (APT-01); short scene note (aircraft final position, dry runway, no fire, all occupants survived) | Recorded data is a sample set, not a full download. |
| 3 | Cockpit voice recorder transcript | Readout takes time. |
| 4 | Airport weather observations (WX-01); ATC communications transcript (ATC-01) | |
| 5 | Flight crew first statement (INT-01) | Subjective. Includes the crew's belief that a go-around was unsafe. |
| 6 | General damage and runway-excursion photographs | |
| 7 onwards | None | The player drives the investigation. |

## 3. Requestable evidence

The "Role" column is for author planning: Core (needed to reach the cause), Supporting (strengthens or explains), Rule-out (eliminates a plausible theory), Background (context only).

### 3.1 One-day requests

| ID | Request | Role | Prerequisite |
|---|---|---|---|
| REF-01 | Aircraft operating manual extracts | Background | None |
| REF-02 | Aircraft limitations | Supporting | None |
| REF-03 | Normal procedures | Background | None |
| REF-04 | Abnormal and emergency procedures | Core | None |
| REF-05 | Aircraft system description | Core | None |
| REF-12 | Aircraft performance charts | Core | None |
| ORG-01 | Operator procedures | Supporting | None |
| WX-02 | Relevant weather forecasts | Rule-out | None |
| APT-07 | Relevant NOTAMs | Rule-out | None |
| OPS-06 | Weight-and-balance calculations | Supporting | None |
| HUM-06 | Crew duty roster | Rule-out | None |

### 3.2 Two-day requests

| ID | Request | Role | Prerequisite |
|---|---|---|---|
| MNT-01 | Aircraft technical log | Supporting | None |
| MNT-02 | Recent maintenance work package | Rule-out | None |
| MNT-03 | Historical maintenance records | Supporting | None |
| MNT-04 | Deferred defect records | Rule-out | None |
| MNT-05 | Component installation history | Supporting | None |
| MNT-06 | Component service history | Supporting | None |
| MNT-07 | Maintenance compliance records | Supporting | None |
| MNT-08 | Aircraft modification records | Core | None |
| MNT-09 | Previous crew defect reports | Background | None |
| HUM-02 | Aircraft-type training records | Supporting | None |
| HUM-03 | Recurrent training and checking records | Supporting | None |
| HUM-05 | Flight experience and logbook extracts | Background | None |
| HUM-07 | Work-and-rest history | Rule-out | None |
| INT-02 | Cabin crew interview | Background | None |
| INT-07 | Airport operations staff interview | Background | None |
| INT-08 | Emergency responder interview | Background | None |
| INT-11 | Targeted follow-up interview (crew) | Supporting | Day 5 crew statement received |
| ATC-02 | ATC controller interview | Supporting | None |
| ATC-03 | Radar track data | Supporting | None |
| APT-02 | Runway inspection records | Rule-out | None |
| APT-03 | Runway surface-condition information | Rule-out | None |
| ORG-02 | Operational notices and bulletins | Supporting | None |
| ORG-06 | Similar defect or event reports | Supporting | None |
| REF-06 | Maintenance manual extracts | Supporting | None |
| REF-10 | Manufacturer service information | Core | None |

### 3.3 Three-day requests

| ID | Request | Role | Prerequisite |
|---|---|---|---|
| WRK-01 | Accident-site survey | Supporting | None |
| WRK-03 | Detailed wreckage photographs | Supporting | None |
| WRK-09 | Landing-gear and brake examination | Core | None |
| WRK-10 | Impact-mark examination | Supporting | None |
| SYS-07 | Hydraulic-system examination | Core | None |
| SYS-17 | Warning-system examination | Supporting | None |
| DAT-01 | Additional flight-recorder parameters | Core | None |
| DAT-02 | Detailed recorder extract | Core | None |
| DAT-07 | Aircraft system fault logs | Supporting | None |
| DAT-08 | Engine-monitoring data | Rule-out | None |
| DAT-11 | Airport surveillance footage | Supporting | None |
| DAT-12 | External photographs or video | Background | None |
| APT-04 | Runway friction test results | Core | None |
| CMP-03 | Fleet defect history | Supporting | None |
| ORG-07 | Safety audit findings | Supporting | None |
| ORG-11 | Management or operational staff interview | Background | None |

### 3.4 Four-day requests

| ID | Request | Role | Prerequisite |
|---|---|---|---|
| LAB-05 | Material-property testing | Core | SYS-07 delivered |
| LAB-08 | Comparison with an undamaged component | Core | SYS-07 delivered |
| REF-13 | Manufacturer technical clarification | Supporting | REF-05 delivered |
| HUM-11 | Toxicology report | Rule-out | None |

### 3.5 Five-day requests

| ID | Request | Role | Prerequisite |
|---|---|---|---|
| LAB-09 | Manufacturer-specified component test | Core | SYS-07 delivered |
| CMP-05 | Manufacturer test results | Supporting | SYS-07 delivered |
| CMP-06 | Targeted simulator test | Supporting | REF-04 and DAT-01 or DAT-02 delivered |
| CMP-07 | Aircraft performance reconstruction | Core | REF-12 and DAT-01 or DAT-02 delivered |

## 4. Not offered in Case 001

These catalogue items do not fit the fictional scenario or the aircraft stayed intact:

- Engine teardown and propeller examinations (SYS-01 to SYS-03).
- Fuel-quality and fuel-system testing (SYS-04, SYS-05, LAB-01).
- Pitot-static and air-data testing (SYS-11, SYS-12).
- Ice-protection and pressurisation systems (SYS-10, SYS-16, WX-08).
- Wreckage recovery requests (WRK-04 to WRK-06).

## 5. Deliberate dead ends

These requests should return normal or non-conclusive results so the player can rule theories out:

- Weather and forecasts (WX-02).
- Runway condition and NOTAMs (APT-02, APT-03, APT-07).
- Crew fatigue and toxicology (HUM-06, HUM-07, HUM-11).
- Engine monitoring data (DAT-08).
- Recent maintenance and deferred defects (MNT-02, MNT-04).

## 6. Dependencies summary

- LAB-05, LAB-08, LAB-09 and CMP-05 need SYS-07 delivered first.
- CMP-07 needs REF-12 and a recorder request (DAT-01 or DAT-02).
- CMP-06 needs REF-04 and a recorder request.
- INT-11 needs the Day 5 crew statement.
- REF-13 needs REF-05.

## 7. Deadline check

With two active slots and an average duration of about 2 to 3 days, the player can receive roughly 8 to 10 requests by Day 14. The seven-request core route below respects every rule, but it finishes on Day 13 and keeps both slots busy for most of the case, so it leaves little room for wrong leads. The deadline, the durations of the core requests, or the length of the longest chain (DAT-02 then CMP-07) should be reviewed in testing.

Example core route (to be tested). Rules checked: at most one request sent per day, at most two active at any time, dependencies delivered before the dependent request is sent.

| Day sent | Request | Duration | Arrives | Active after sending | Dependency check |
|---|---|---|---|---|---|
| 2 | DAT-02 | 3 | 5 | DAT-02 | None |
| 3 | REF-12 | 1 | 4 | DAT-02, REF-12 | None |
| 4 | SYS-07 | 3 | 7 | DAT-02, SYS-07 | REF-12 arrived Day 4, slot freed |
| 5 | CMP-07 | 5 | 10 | SYS-07, CMP-07 | REF-12 and DAT-02 delivered |
| 7 | LAB-05 | 4 | 11 | CMP-07, LAB-05 | SYS-07 delivered Day 7 |
| 10 | APT-04 | 3 | 13 | LAB-05, APT-04 | CMP-07 arrived Day 10, slot freed |
| 11 | REF-05 | 1 | 12 | APT-04, REF-05 | LAB-05 arrived Day 11, slot freed |

Notes on the route:

- No request can be sent on Day 6, Days 8 and 9, because both slots are full.
- The last item arrives on Day 13, one day before the deadline.
- CMP-07 is the longest chain: DAT-02 (3 days) must arrive before CMP-07 (5 days) can be sent, so it cannot arrive before Day 10 even if sent as early as possible.
- REF-05 is last here because nothing else depends on it, but a player may reasonably request it earlier.

## 8. Open items

- Confirm that no automatic release should occur on Day 1.
- Playtest the example route and decide whether Day 14 is long enough, given that it finishes on Day 13 with no room for a wrong lead.
- Write each request's actual returned content, which must stay consistent with the case facts.
- Verify technical details listed in CASE_001_OVERVIEW.md before writing hydraulic and laboratory results.
- Decide whether any requests should be unavailable until another is delivered beyond those in section 6.
- Revisit durations if the case turns out too easy or too tight in testing.

## 9. Revision log

| Date | Change |
|---|---|
| 2026-10-12 | Initial draft of Case 001 evidence schedule. |
| 2026-10-12 | Rebuilt the example core route in section 7 so it respects the one-request-per-day and two-active limits. The core route now finishes on Day 13 rather than Day 12, and the deadline is flagged for testing. |
