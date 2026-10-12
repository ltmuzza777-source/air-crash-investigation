# Air Crash Investigation — Game Overview

Status: Initial concept and agreed gameplay rules. This document describes the intended game, not features already implemented.

Related documents: TIMING_RULES.md, CASE_001_OVERVIEW.md, CASE_001_EVIDENCE_SCHEDULE.md, EVIDENCE_REQUEST_CATALOGUE.md, CASE_DESIGN_TEMPLATE.md, FINDINGS_AND_SUBMISSION_SYSTEM.md

## Short Summary

A single-player, browser-based air crash investigation simulator in which the player analyses evidence, strategically requests additional information, and publishes a detailed report explaining what caused a fictional accident. The player controls the passage of in-game days, but faces a case-specific deadline, limited evidence requests, and a maximum of three report submissions. Success depends on aviation knowledge, investigative judgement, and evidence-supported reasoning rather than guessing a failure label.

## Player Role and Experience

The player is the sole investigative decision-maker: they review the available material, choose investigative leads, interpret results, and make the final findings. There are no other players or investigators providing conclusions. Documents and transcripts can contain information from other people, but the player must interpret that information independently.

The intended experience is a realistic, demanding simulation that puts real-world aviation knowledge to the test. Cases should reward careful reading, technical understanding, comparison of evidence, and willingness to revise an initial theory.

## Case Design

Cases are fictional, but may draw on real-world technical information and accident mechanisms. Aircraft operators, people, and circumstances are fictionalised. The game shows a disclaimer on Day 1 explaining that its scenarios are fictional and any resemblance to actual people, organisations, or events is coincidental.

Each case should be large, detailed, internally consistent, and engaging. The initial development focus is one substantial case; the longer-term goal is a collection of cases.

Available evidence depends on the aircraft and accident circumstances. Not every case has every evidence type: for example, a case may have no cockpit voice recording. Missing evidence should be part of the case design, rather than filled in simply to make every case identical.

## Evidence

Each case contains a prepared collection of information behind the scenes. Some evidence is relevant to the cause, some provides background, and some is non-conclusive or unrelated to the cause. The player does not receive the entire collection immediately.

Planned evidence types include:

- Flight recorder data, where available, including parameters such as airspeed, altitude, pitch, and engine information.
- Pilot voice transcripts, where recordings are available.
- Maintenance and mechanical records.
- ATC interview material.
- Wreckage recovery or examination information.
- Other case-specific documents.

Eyewitness material is a potential future addition.

Day 1 is a simple office-style briefing that introduces the accident, together with the game disclaimer. Additional information arrives automatically during the first few in-game days, following a case-specific release schedule. After that opening phase, the player must increasingly decide what further information to request. Not every day produces new evidence.

A request need not reveal the cause to have value: it may help test or rule out a theory. The challenge is to distinguish what the evidence establishes from what the player merely suspects.

## Evidence Request Rules

- The player may send a maximum of one new evidence request per in-game day.
- A maximum of two requests may be active at the same time.
- Requests may overlap across days, provided both limits are respected.
- If two requests are active, the player cannot send another until a slot becomes available.
- Each request displays its completion time before the player commits to it.
- Before sending, the player must confirm with a prompt such as "Are you sure you want to send this request? This action cannot be undone."
- Requests are final: once sent, a request cannot be cancelled or taken back, because in real life it would waste resources.
- Requests that could not arrive before the deadline are blocked.
- Turnaround times vary by request and case: an ATC interview can take less time than recovering wreckage from the ocean.
- Completed requests deliver their associated information and cease to occupy an active slot.

These limits prevent the player from requesting everything immediately. They must prioritise leads, consider turnaround times, and decide which evidence is likely to matter before the deadline.

## In-Game Days and Deadline

Time advances only when the player chooses to end the current day. Reading, reviewing data, thinking, and drafting findings do not consume real-time-limited play sessions: the player can spend as long as they want within an in-game day.

Advancing a day progresses pending requests and any scheduled evidence releases. New information arrives only when its release or completion conditions are met; ending a day does not guarantee a delivery. The exact order of steps, day numbering, and deadline handling are defined in TIMING_RULES.md.

Each case has a deadline. The narrative stakes are the danger of another similar accident if the underlying cause remains unresolved. The available number of days is one component of case difficulty. Exact deadlines and request durations are set individually for each case. Case 001 currently proposes a Day 14 deadline.

## Core Gameplay Loop

1. Read the case briefing and initial evidence.
2. Review the information and develop possible explanations.
3. Select an additional evidence request, if the daily allowance and active-request limit permit it.
4. Analyse available material and refine the emerging explanation.
5. End the day when ready.
6. Review any new evidence and repeat the investigation cycle.
7. Publish a formal findings report when sufficiently confident. On reaching the deadline, a final report must be submitted.

## Final Investigation Report

The player finishes by publishing a substantial, formal but game-friendly explanation of the accident. A short label such as 'engine failure' is insufficient: the report must explain what happened and what caused it.

Proposed report sections, subject to later design decisions:

- Sequence of events.
- Primary cause or causes.
- Contributing factors.
- Supporting evidence and reasoning.
- Remaining uncertainties.
- Safety recommendations, if included in the final design.

The precise submission interface and assessment method are described in FINDINGS_AND_SUBMISSION_SYSTEM.md where decided. This overview does not assume AI assessment, keyword matching, multiple-choice findings, or a particular scoring system.

## Submissions, Success, and Failure

The player has a maximum of three report submissions per case.

- A correct report completes the case successfully.
- An incorrect report submitted before the deadline uses one attempt, but the player can continue investigating if attempts remain.
- On reaching the deadline, the player must make a final submission, even if the report is unfinished or incorrect. They cannot decline to submit.
- An incorrect deadline submission ends the case in failure.
- Three unsuccessful submissions exhaust the attempt allowance and end the case in failure, even if time remains.
- The deadline does not provide a fourth attempt.

The three-attempt rule takes precedence over the final-opportunity rule. The exact feedback shown after a rejected report is still to be specified.

## Platform and Development Scope

The game is intended to run in a browser. Development is managed through GitHub. Cloudflare is the intended deployment platform, but its connection still needs to be configured. No framework, backend, database, or assessment service has been selected through this concept discussion.

Initial scope:

- Single-player gameplay.
- One large, detailed fictional case.
- Initial and scheduled evidence releases.
- Requestable evidence with visible turnaround times.
- One new request per day and two active requests maximum.
- Player-controlled day advancement and a case deadline.
- Formal report submission with a three-attempt limit.
- Case success and failure outcomes.

Future expansion includes additional cases and eyewitness evidence.

## Current Status

- Case 001 (BlueWing Airlines Flight 96, Hobart) has a working overview, transcript, basic recorded-data package, and draft evidence schedule.
- Timing rules are drafted in TIMING_RULES.md.
- No code has been written yet.

## Open Design Decisions

The following are not yet agreed and should not be treated as confirmed features:

- Case 001's final deadline, request durations, and the content of each requestable item.
- How the player browses and selects requests, and how specific a request must be.
- The report editor, assessment method, acceptance criteria, and rejection feedback.
- Whether a second accident is a guaranteed scripted event or a possible narrative consequence.
- Analysis tools such as interactive graphs, timelines, notes, bookmarks, and evidence linking.
- Reference material, tutorials, hints, and expectations around outside research.
- Saving, resuming, restarting, and replaying cases.
- Technical implementation and Cloudflare deployment setup.

## Design Principle

The central challenge is not simply finding the right document. It is deciding what to investigate, using limited time effectively, interpreting incomplete information, and presenting an explanation that the evidence supports.
