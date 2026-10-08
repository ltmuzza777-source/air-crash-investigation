# Case Design Template

## Status and purpose

Status: Working design template.

Use this template to plan each fictional investigation before creating its player-facing evidence or implementing it in the game.

Related documents:
- `GAME_OVERVIEW.md`
- `EVIDENCE_REQUEST_CATALOGUE.md`
- `FINDINGS_AND_SUBMISSION_SYSTEM.md`

This template separates the actual accident sequence from what the player initially knows. It also connects evidence, request timing, and submission requirements.

Blank fields and suggested tables are planning aids, not additional game rules.

## 1. Case identification

| Field | Case details |
|---|---|
| Case ID | |
| Working title | |
| Version and status | |
| Intended difficulty | |
| Intended real-world playtime | |
| Aircraft type | |
| Operator and flight purpose | |
| Departure and destination | |
| Location and environment | |
| Accident or incident type | |
| Outcome, including injuries and damage | |
| In-game investigation deadline | |

### Design objective

What should this case challenge the player to do?

Examples include reconstructing a sequence, distinguishing between competing explanations, recognising a contributing factor, or choosing the right evidence requests.

> [Describe the intended challenge.]

### Required background knowledge

What does the player need to understand, and what explanations or reference material will the case provide?

> [Record assumptions and planned assistance.]

## 2. Hidden truth: what actually happened

This section is author-only.

### Accident summary

Write a clear account of the event before designing the clues.

> [Describe what happened and why.]

### Actual sequence of events

| Time or sequence position | Event | Immediate consequence | Evidence that could reveal it |
|---|---|---|---|
| | | | |

Distinguish between:
- Conditions present before the flight.
- The initiating event or unsafe condition.
- Subsequent actions, failures, or changes.
- The final accident or incident outcome.

### Causal findings

| Finding ID | Finding | Role in the sequence | Essential to solving the case? |
|---|---|---|---|
| | | Primary cause / underlying cause / contributing factor / consequence | |

Do not force every case into a single mechanical-failure explanation. Record multiple interacting causes where the case requires them.

### Uncertainties

Identify details that remain genuinely uncertain, even after all available evidence is reviewed.

> [Record what cannot be established and what the player should not be required to claim.]

## 3. Technical consistency and verification

### Details requiring verification

| Technical claim or assumption | Source or verification method | Status | Changes needed |
|---|---|---|---|
| | | Unchecked / verified / revise | |

Include, where relevant:
- Aircraft capabilities and system behaviour.
- Available recording equipment.
- Flight performance and event timing.
- Procedures and operational constraints.
- The feasibility of examinations or tests.
- The limits of what each evidence item can establish.

### Fictional elements

> [Identify invented aircraft identifiers, organisations, locations, people, and events.]

Keep fictional scenario details distinct from technical claims that require verification.

## 4. Player-facing opening

### Opening briefing

Write the information the player receives when the investigation begins.

> [Draft the briefing.]

The briefing should describe the known event without revealing unestablished causes.

### Initial evidence package

| Evidence ID | Title | What the player receives | Why it is available initially |
|---|---|---|---|
| | | | |

### Initial investigative leads

What reasonable questions can the player ask after reviewing the opening package?

| Initial observation | Possible explanation or question | Available way to investigate |
|---|---|---|
| | | |

The opening should provide a sensible starting point without identifying the solution.

## 5. Master evidence map

List every evidence item, including initially supplied material, requested material, and automatic releases.

| Evidence ID | Player-facing title | Contents and format | Delivery method | Author-only investigative purpose |
|---|---|---|---|---|
| | | | Initial / requested / automatic | |

For each item, record the following details where needed.

### Evidence item worksheet

- Evidence ID:
- Player-facing title:
- Source:
- Contents:
- Format:
- Delivery method:
- Findings it supports:
- Explanations it challenges or rules out:
- Other evidence needed to interpret it:
- Limitations or uncertainty:
- Reliability concerns, if any:
- Whether it is essential, optional, contextual, or non-conclusive:

### Evidence principles

- Evidence presents observations, records, statements, or examination results.
- It should not automatically provide the complete investigative conclusion.
- Background and non-conclusive material may be included.
- A plausible alternative explanation is not the same as fabricated or contradictory evidence.
- Any intentional discrepancy must have a planned explanation or be identified as unresolved.
- Player-facing titles must not reveal hidden significance.

## 6. Competing explanations

Plan the reasonable alternatives the player may consider.

| Explanation | Why it initially seems plausible | Evidence that tests it | Final status and reason |
|---|---|---|---|
| | | | Supported / ruled out / unresolved |

Not every alternative needs its own dedicated request. Some may be tested through evidence useful for several investigative questions.

Avoid requiring the player to rule out every imaginable cause.

## 7. Evidence request plan

Use the request catalogue as a library. A case does not need to include every request type.

| Case request ID | Catalogue reference, if applicable | Player-facing request name | Evidence returned | Duration in in-game days | Prerequisites or availability |
|---|---|---|---|---|---|
| | | | | | |

### Request-specific notes

For each request, record:
- Why the player might reasonably choose it.
- Whether it is available immediately or unlocked later.
- What happens if the material is unavailable or inconclusive.
- Whether it opens a meaningful follow-up request.
- Whether it duplicates evidence already supplied.

### Timing conventions

Define timing explicitly for the case:
- Starting day number:
- When a newly submitted request begins processing:
- When completed results arrive:
- When active-request slots become available again:
- Whether automatic releases occur before or after request results:
- When the deadline is enforced:

Follow the existing limits:
- One new evidence request per in-game day.
- A maximum of two active requests at a time.
- Request durations visible to the player.
- Time advances when the player ends the day.

Do not introduce exceptions without recording them as proposed changes to the game rules.

## 8. Automatic events and deadline

### Scheduled information

| Day or trigger | Information or event | Evidence IDs involved | Purpose |
|---|---|---|---|
| | | | |

Automatic releases should help establish or develop the investigation without making appropriate evidence requests unnecessary.

### Deadline rationale

Why does this investigation have a time limit?

> [Describe the fictional risk of recurrence or other agreed case-specific rationale.]

### Deadline handling

- Last opportunity to submit:
- What happens to outstanding requests:
- What the player sees if time runs out:
- How the case restarts:

Keep deadline handling consistent with the game overview. Record unresolved details rather than silently inventing new rules.

## 9. Submission and accepted solution

Use the hybrid system defined in `FINDINGS_AND_SUBMISSION_SYSTEM.md`.

### Structured submission fields

| Field | Available choices or choice set | Multiple selections allowed? | Author notes |
|---|---|---|---|
| | | | |

Ensure the fields can express the case’s causal sequence without displaying the complete correct explanation as one option.

### Essential findings and evidence requirements

| Essential finding ID | Accepted structured finding | Accepted alternatives | Required supporting evidence or combinations |
|---|---|---|---|
| | | | |

Distinguish between:
- Evidence items all required together.
- Alternative combinations that are independently sufficient.
- Optional evidence that strengthens a finding but is not necessary.

### Major contradictions

| Contradictory finding or combination | Why it conflicts with the case |
|---|---|
| | |

### Optional findings

| Optional finding | Supporting evidence | Why it is not essential |
|---|---|---|
| | | |

### Success conditions

Confirm that the case uses the proposed success rule:
1. All essential findings are established.
2. Their evidence requirements are satisfied.
3. No major contradictory finding is included.

Record any unresolved assessment decisions, including the treatment of unsupported or irrelevant selections.

### Written report prompt

> [Write the case’s report prompt.]

The written explanation forms part of the report but is not automatically assessed for meaning in the initial version.

## 10. Submission feedback and case conclusion

### Unsuccessful submission feedback

| Assessment issue | Player-facing feedback | Spoiler risk |
|---|---|---|
| | | |

Feedback should identify a general weakness without giving the correct finding or naming the exact missing request.

The player has a maximum of three submissions.

### Successful completion

> [Draft the completion message and describe what is revealed.]

### Exhausted attempts or deadline

> [Draft the failure message and describe what is revealed.]

### Post-case explanation

If an answer explanation is shown, it should connect:
- The event sequence.
- The causes and contributing factors.
- The evidence supporting those conclusions.
- Any remaining uncertainty.

The timing and extent of the reveal must follow the agreed game rules or remain marked as undecided.

## 11. Fairness and timing walkthrough

### At least one valid investigation route

Demonstrate a route that obtains sufficient evidence and submits successfully within the limits.

| Day | Evidence available at start | New request | Active requests after submission | Results or events on advancing | Investigator’s possible next step |
|---|---|---|---|---|---|
| | | | | | |

Check:
- No day exceeds one new request.
- No point exceeds two active requests.
- Durations follow the defined timing convention.
- Essential evidence arrives before the submission cutoff.
- The player has a reasonable basis for choosing each essential request.
- The opening package does not require blind guessing.

### Alternative routes

> [Record other valid evidence combinations or request sequences.]

### Recovery from a reasonable mistake

> [Describe whether the intended difficulty allows recovery after an unhelpful request or unsuccessful submission.]

A case need not forgive every choice, but its intended difficulty should be deliberate.

## 12. Assessment tests

| Test submission | Expected result | Reason |
|---|---|---|
| Correct essential findings with sufficient evidence | Success | Meets the accepted solution. |
| Correct cause without required evidence | Incomplete or unsuccessful | Does not meet the evidence requirement. |
| Incorrect cause with relevant-looking evidence | Unsuccessful | Evidence does not establish that cause. |
| Accepted alternative finding and evidence combination | Success | Recognised as valid in the answer specification. |
| Correct optional details but incorrect primary cause | Unsuccessful | Optional findings cannot replace essential findings. |
| Selection of every available factor or evidence item | Must not be a reliable passing strategy | Tests resistance to indiscriminate selection. |
| Correct structured findings with contradictory written prose | Structured result unchanged in the initial version | Documents the limitation of ungraded prose. |

Add case-specific tests for:
- Findings supported by evidence the player has not obtained.
- Duplicate or incompatible selections.
- Missing essential fields.
- Submission at the deadline boundary.
- A third unsuccessful submission.

Define expected handling before implementation.

## 13. Production checklist

### Planning
- [ ] Hidden event sequence is complete.
- [ ] Essential findings are defined.
- [ ] Technical assumptions are verified or clearly flagged.
- [ ] Uncertainty is recorded.
- [ ] Opening package provides reasonable leads.

### Evidence
- [ ] Every evidence item has a stable ID.
- [ ] Evidence contents agree with the hidden sequence.
- [ ] Relevant limitations are stated.
- [ ] Initial, requested, and automatic evidence are distinguished.
- [ ] Player-facing titles avoid spoilers.
- [ ] Essential evidence has an obtainable delivery route.

### Timing
- [ ] Request durations and timing conventions are defined.
- [ ] Deadline handling is defined or flagged as unresolved.
- [ ] At least one valid route fits the request limits and deadline.
- [ ] Intended tolerance for mistakes has been checked.

### Submission
- [ ] Structured fields can represent the accepted solution.
- [ ] Valid alternative findings are included.
- [ ] Evidence combinations are defined.
- [ ] Contradictions and optional findings are distinguished.
- [ ] Feedback avoids revealing the answer.
- [ ] The ungraded status of written prose is clear.

### Release
- [ ] Player-facing material is separated from author-only notes.
- [ ] Assessment tests have expected outcomes.
- [ ] Unresolved decisions are listed.
- [ ] The case has been reviewed before implementation.

## 14. Open decisions and revision log

### Open decisions

| Question | Proposed approach | Status |
|---|---|---|
| | | |

### Revision log

| Version or date | Change | Reason |
|---|---|---|
| | | |
