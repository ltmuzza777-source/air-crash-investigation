# Findings and Submission System

## Status and purpose

Status: Working design draft.

This document defines how players submit their investigation findings and how the game determines whether they have solved a case.

The system combines:
- Structured findings that the game can automatically assess.
- A written explanation that lets the player present their reasoning in a formal, game-friendly report.

The initial design does not require paid AI-based marking.

## 1. Core approach

The player submits a single investigation report containing two parts.

### Part A: Structured findings

The player records their conclusions through selectable fields and attaches supporting evidence.

The game compares these findings against a hidden, case-specific answer specification.

### Part B: Written explanation

The player explains what happened, why it happened, and how the evidence supports their conclusions.

This explanation forms part of the final report, but its meaning is not automatically assessed in the initial version.

The game determines success from the structured findings and their supporting evidence—not from keywords in the written explanation.

## 2. Structured findings

The report should guide the player through the causal explanation without presenting the complete solution as one selectable answer.

Proposed fields are:

| Field | Purpose |
|---|---|
| System or area involved | Identifies the relevant aircraft system, operational area, or other source of the problem. |
| Initiating failure or condition | Identifies the event or condition that started the accident sequence. |
| Underlying cause | Explains why that failure or condition occurred. |
| Resulting effect | Identifies how it affected the aircraft or flight. |
| Contributing factors | Records additional factors that helped produce the outcome. |
| Supporting evidence | Links findings to evidence obtained during the investigation. |

These fields are a starting framework, not a requirement to describe every case as a mechanical failure.

A case involving operational decisions, environmental conditions, or multiple interacting causes must use appropriate labels and allow the necessary findings.

### Selection design

- Options should use neutral wording.
- Selecting an option must not indicate whether it is correct before submission.
- The complete accident explanation should not appear as one ready-made answer.
- Players should be able to revise their findings before submitting.
- Where appropriate, fields should include options such as “not established” or “no contributing factor identified.”
- Cases should support multiple findings where their causal sequence requires them.

The exact interface—dropdowns, searchable lists, selectable cards, or another format—remains undecided.

## 3. Supporting evidence

Players must connect their conclusions to evidence they have obtained.

For each required finding, the player selects the relevant evidence items.

Possessing an evidence item is not enough to earn credit. The player must connect it to an appropriate finding.

The case’s hidden answer specification defines:
- Which evidence supports each finding.
- Whether a combination of evidence items is required.
- Whether alternative evidence combinations are acceptable.
- Which evidence is irrelevant to, or contradicts, a finding.

Players should not be able to cite evidence they have not received.

The written explanation can describe why the evidence matters, but the initial automatic assessment checks the selected evidence links rather than interpreting that explanation.

## 4. Written explanation

The player writes a formal explanation in their own words.

A suggested prompt is:

> Explain the sequence of events, identify the primary cause and contributing factors, and describe how the evidence supports your conclusions.

The interface should encourage more than a short statement such as “engine failure.”

It may provide optional headings:
- Sequence of events.
- Primary cause and underlying explanation.
- Contributing factors.
- Supporting evidence and reasoning.

### Initial assessment limitation

The written explanation is included in the completed report but is not automatically assessed for meaning.

Consequently, the initial system cannot reliably detect whether the written explanation:
- Contradicts the structured findings.
- Misinterprets an evidence item.
- Contains unsupported claims.
- Provides a convincing causal explanation.

The interface must make this distinction clear. Feedback must not claim that the game has assessed the written reasoning when it has only checked structured findings.

Any future automatic assessment of prose would be a separate feature.

## 5. Hidden case answer specification

Each case must have an author-only answer specification.

It should contain:

### Essential findings
The conclusions required to solve the case.

### Accepted alternatives
Other structured representations that are considered valid.

### Evidence requirements
The evidence links or combinations required to support each essential finding.

### Major contradictions
Findings incompatible with the established accident sequence.

### Optional findings
Additional conclusions that improve the report’s completeness but are not required for success.

Optional details must not compensate for an incorrect primary cause.

## 6. Proposed success rule

A submission succeeds when:
1. All essential findings are established.
2. Their required evidence links are satisfied.
3. No major contradictory finding is included.

A correct cause without sufficient evidence may be treated as incomplete rather than successful.

Selecting every possible factor or evidence item should not be a reliable way to pass. The treatment of irrelevant or unsupported selections remains to be decided.

The initial system should distinguish between solving the case and producing an especially complete report. Any optional score or quality rating can be designed separately.

## 7. Submission attempts and feedback

The game’s existing maximum of three submissions applies to this system.

An unsuccessful submission allows the player to continue investigating while attempts and time remain.

Feedback should identify the general weakness without revealing the solution.

Example feedback:
- “Your findings do not yet establish the initiating failure or condition.”
- “One or more essential findings lack sufficient supporting evidence.”
- “Your submission contains findings that conflict with the evidence.”

Feedback should not:
- Name the correct answer.
- Identify the exact missing evidence request.
- Automatically replace an incorrect selection.
- Reveal the full accident sequence before the case is concluded.

The exact feedback detail and end-of-case answer reveal remain undecided.

## 8. Illustrative example

This example demonstrates the submission format only. It is not the first case.

### Structured findings

| Field | Player’s selection |
|---|---|
| System involved | Fuel system |
| Initiating failure or condition | Fuel flow to the engine stopped |
| Underlying cause | Blocked fuel line |
| Resulting effect | Loss of engine power |
| Supporting evidence | Fuel-system inspection report; engine examination report |

### Written explanation

> A blockage in the fuel line interrupted the engine’s fuel supply, resulting in a loss of power. The fuel-system inspection identified the obstruction, while the engine examination supported the conclusion that the power loss resulted from interrupted fuel delivery rather than an internal engine failure.

### Assessment

The game checks whether the structured findings and evidence links satisfy the hidden answer specification.

It does not assess the meaning or quality of the written paragraph in the initial version.

## 9. Case-design safeguards

When designing a case:
- Ensure the selectable findings can express the intended solution.
- Include plausible alternatives without making the correct answer conspicuous.
- Avoid requiring the player to guess a narrowly worded label.
- Ensure essential evidence is obtainable within the case’s time and request constraints.
- Accept alternative findings or evidence combinations where the case genuinely supports them.
- Test both correct submissions and plausible incorrect submissions.
- Check that indiscriminate selection does not produce a successful result.

The structured report should test the player’s investigation, not their ability to exploit the submission interface.

## 10. Decisions still required

Before implementation, decide:
1. Which selection interface to use.
2. Whether players build one causal chain or several linked findings.
3. How unsupported or irrelevant selections affect the result.
4. Whether written explanations are mandatory despite being ungraded.
5. How much feedback each unsuccessful submission provides.
6. Whether prevention recommendations are included.
7. What the player sees after success, exhausted attempts, or the deadline.
