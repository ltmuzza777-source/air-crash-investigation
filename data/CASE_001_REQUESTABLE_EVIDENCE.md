# Case 001 — Requestable Evidence Data

Status: Fictional working data pack. Author-only material is marked explicitly.

This file implements every request listed in `CASE_001_EVIDENCE_SCHEDULE.md`. The
player-facing result is the material under **Returned evidence**. The notes under
**Author checks** are not shown to the player. All times are local time and all
request durations use the Case 001 rule: a request sent on Day N with duration D
arrives at the start of Day N + D.

## Shared case facts

- BlueWing Airlines Flight 96 is an A320-232 operating Hobart–Melbourne.
- The event occurs in daylight on a dry Hobart Runway 12 with a light headwind.
- The initiating event occurs after liftoff during landing-gear retraction.
- The aircraft remains powered by two operating engines throughout the event.
- A leak in the green hydraulic system is followed by PTU operation, yellow-system overheating, and crew isolation of the yellow supply.
- The aircraft returns to Hobart, remains high and fast, touches down late, and overruns the runway.
- All occupants survive; there is no fire. Damage is concentrated in the landing gear and lower fuselage.

## Data conventions

`Normal` means the item does not support that proposed alternative as the principal explanation. `Non-conclusive` means the item is useful context but cannot establish causation by itself. No item names the complete accident chain in its player-facing text.

## One-day requests

### REF-01 — Aircraft operating manual extracts

- Duration: 1 day. Prerequisite: none. Role: background.
- Returned evidence: Extracts covering the A320-232 aircraft description, normal system indications, landing-gear operation, and terminology used in the operator's manuals. The extracts identify the green, yellow, and blue hydraulic systems and the PTU as a transfer device between the green and yellow systems; they do not interpret Flight 96.
- Author checks: Establishes vocabulary without identifying the failed hose. Consistent with the initial recorder extract and does not claim that the PTU itself failed.

### REF-02 — Aircraft limitations

- Duration: 1 day. Prerequisite: none. Role: supporting.
- Returned evidence: Applicable operating limitations for the aircraft configuration, including abnormal hydraulic-system operation, landing-gear configuration, approach-speed margins, and use of braking and reverse thrust. The document states that a limitation is not, by itself, proof that the limitation was exceeded.
- Author checks: Supports later performance reasoning without locking exact values that remain provisional in the overview.

### REF-03 — Normal procedures

- Duration: 1 day. Prerequisite: none. Role: background.
- Returned evidence: Normal departure, after-takeoff, approach, landing, and go-around procedure extracts, including the normal callouts and division of pilot duties. The extracts describe the expected stabilized-approach gates and the requirement to discontinue an approach that is not stabilized.
- Author checks: Provides a benchmark for the later crew decision; it does not say the crew violated a particular procedure.

### REF-04 — Abnormal and emergency procedures

- Duration: 1 day. Prerequisite: none. Role: core.
- Returned evidence: Procedure extracts for hydraulic-system abnormalities, hydraulic-overheat indications, landing-gear abnormalities, and a go-around from an unstable approach. The material distinguishes an abnormal indication from a confirmed component failure and lists the actions available to the crew.
- Author checks: Supports the procedural/decision finding. It must not state that a go-around was technically impossible.

### REF-05 — Aircraft system description

- Duration: 1 day. Prerequisite: none. Role: core.
- Returned evidence: A system schematic and explanatory notes for the green, yellow, and blue hydraulic circuits, engine-driven pumps, reservoirs, PTU, and relevant landing-gear actuators. The notes explain that PTU operation can transfer power between systems but does not transfer hydraulic fluid.
- Author checks: Required before REF-13. Supports the green-to-yellow escalation without naming the ruptured hose.

### REF-12 — Aircraft performance charts

- Duration: 1 day. Prerequisite: none. Role: core.
- Returned evidence: Manufacturer-style charts for landing distance and go-around performance for a range of landing masses, runway slopes, wind components, and system configurations. The charts state their assumptions and show that a late touchdown materially reduces the runway margin; they do not give a single certified answer for Flight 96.
- Author checks: Required by CMP-07. Exact mass and braking configuration remain to be combined with recorder and runway evidence.

### ORG-01 — Operator procedures

- Duration: 1 day. Prerequisite: none. Role: supporting.
- Returned evidence: BlueWing procedures for abnormal-system coordination, captain/first-officer task sharing, approach briefings, stabilized-approach monitoring, go-around decisions, and post-event reporting.
- Author checks: Fictional operator context. Supports workload and decision analysis; does not establish that the operator caused the event.

### WX-02 — Relevant weather forecasts

- Duration: 1 day. Prerequisite: none. Role: rule-out.
- Returned evidence: Forecasts available before departure and for the expected Hobart return: daylight, dry conditions, light headwind, good visibility, and no forecast thunderstorm, icing, or significant turbulence affecting the airport.
- Author checks: Deliberate dead end. Compatible with automatic WX-01 and does not rule out the mechanical sequence.

### APT-07 — Relevant NOTAMs

- Duration: 1 day. Prerequisite: none. Role: rule-out.
- Returned evidence: NOTAM review for Hobart on the event date. Runway 12 was open; no NOTAM closed the runway or reported a braking-surface restriction relevant to the landing. Routine works and lighting notices did not affect the daylight landing.
- Author checks: Does not substitute for APT-02, APT-03, or APT-04. No hidden runway closure.

### OPS-06 — Weight-and-balance calculations

- Duration: 1 day. Prerequisite: none. Role: supporting.
- Returned evidence: Dispatch load sheet and reconstructed weight-and-balance calculation. The aircraft was within takeoff and landing limits, with a landing mass in the range used by the supplied performance material; no abnormal cargo shift is identified.
- Author checks: Supports, but does not alone prove, the stopping analysis. The exact final mass must match CMP-07's reconstruction.

### HUM-06 — Crew duty roster

- Duration: 1 day. Prerequisite: none. Role: rule-out.
- Returned evidence: Planned and recorded roster for the captain and first officer. Both reported for a normal duty period, with no rostered extension or unexpected duty before Flight 96.
- Author checks: Deliberate fatigue lead. Does not claim that workload had no effect during the emergency.

## Two-day requests

### MNT-01 — Aircraft technical log

- Duration: 2 days. Prerequisite: none. Role: supporting.
- Returned evidence: The technical log for the preceding sectors and the departure sector. No open defect was carried for the hydraulic systems, PTU, landing gear, brakes, engines, or flight controls; the pre-departure release was signed.
- Author checks: Supports a sudden in-flight failure and rules out a known deferred defect, but does not rule out an undetected developing condition.

### MNT-02 — Recent maintenance work package

- Duration: 2 days. Prerequisite: none. Role: rule-out.
- Returned evidence: Recent scheduled-work records and task cards. No recent task opened the affected right main-gear-door hydraulic line, and post-maintenance functional checks on unrelated work were satisfactory.
- Author checks: Deliberate dead end. No maintenance mistake is established by this package.

### MNT-03 — Historical maintenance records

- Duration: 2 days. Prerequisite: none. Role: supporting.
- Returned evidence: Selected inspection and repair history for the aircraft and its right main landing-gear hydraulic installation. The records show routine inspections and no earlier recorded leak on Flight 96; several inspections refer to hose-flexing and chafe checks without recording a defect.
- Author checks: Makes an age/degradation theory reasonable without proving it. Must not invent an ignored defect.

### MNT-04 — Deferred defect records

- Duration: 2 days. Prerequisite: none. Role: rule-out.
- Returned evidence: The deferred-defect register and applicable operating restrictions. There was no open hydraulic, gear, brake, engine, or flight-control defect affecting this flight.
- Author checks: Deliberate dead end; agrees with MNT-01 and the crew's initial statement.

### MNT-05 — Component installation history

- Duration: 2 days. Prerequisite: none. Role: supporting.
- Returned evidence: Installation/removal records for the hose assembly and associated right main-gear-door hardware. The installed hose is the aircraft's recorded unit; installation and removal dates are provided, but the record does not itself identify the failure mechanism.
- Author checks: Provides provenance for SYS-07/LAB-05. Use a consistent fictional component identifier: `H96-RMGD-HYD-04`.

### MNT-06 — Component service history

- Duration: 2 days. Prerequisite: none. Role: supporting.
- Returned evidence: Available service, operating-cycle, overhaul, and repair history for `H96-RMGD-HYD-04`. The history contains no prior leak report and no documented repair of the rupture location; service-life information is incomplete for one earlier operator period.
- Author checks: Supports but does not conclusively establish deterioration. The stated gap preserves reasonable uncertainty.

### MNT-07 — Maintenance compliance records

- Duration: 2 days. Prerequisite: none. Role: supporting.
- Returned evidence: Compliance status for scheduled inspections and applicable task intervals covering the hydraulic installation. Required tasks were recorded as completed within their intervals; the records do not guarantee that an internal defect would have been visible.
- Author checks: Avoids a false maintenance-failure conclusion and fits the overview's provisional wording.

### MNT-08 — Aircraft modification records

- Duration: 2 days. Prerequisite: none. Role: core.
- Returned evidence: Aircraft configuration and modification status, including the installed PTU-related protection configuration and applicable equipment standard. The record shows that Flight 96's aircraft did not have the later protective modification used in the comparison material.
- Author checks: Supports the escalation explanation. Keep wording factual; the modification status is not itself the initiating failure.

### MNT-09 — Previous crew defect reports

- Duration: 2 days. Prerequisite: none. Role: background.
- Returned evidence: Selected reports from earlier sectors. They contain routine nuisance reports unrelated to the hydraulic systems and no prior report of abnormal PTU noise, gear-door leakage, or brake malfunction.
- Author checks: Useful context and a rule-out of a known recurring cockpit symptom, not proof that no defect existed.

### HUM-02 — Aircraft-type training records

- Duration: 2 days. Prerequisite: none. Role: supporting.
- Returned evidence: Captain and first officer A320 conversion records, including hydraulic-system and abnormal-gear training modules. Both held current aircraft-type qualifications.
- Author checks: Supports competence and establishes that the crew had been taught the relevant system concepts; it does not remove human-performance uncertainty.

### HUM-03 — Recurrent training and checking records

- Duration: 2 days. Prerequisite: none. Role: supporting.
- Returned evidence: Recent recurrent checks and simulator grading. Both pilots passed normal and abnormal procedures; the records note no outstanding remediation item.
- Author checks: Avoids caricaturing the crew. It leaves the real-time workload and judgement issue open.

### HUM-05 — Flight experience and logbook extracts

- Duration: 2 days. Prerequisite: none. Role: background.
- Returned evidence: Recent flight experience and A320 sector history for both pilots. Both were current and experienced on type; neither record contains a directly comparable hydraulic event.
- Author checks: Background only; does not turn experience into proof of correct decision-making.

### HUM-07 — Work-and-rest history

- Duration: 2 days. Prerequisite: none. Role: rule-out.
- Returned evidence: Recorded duty, rest, and sleep-opportunity history for the preceding days. No roster or record-based fatigue exceedance is identified.
- Author checks: Deliberate dead end. Do not state that fatigue is impossible, only that this evidence does not support it as a primary factor.

### INT-02 — Cabin crew interview

- Duration: 2 days. Prerequisite: none. Role: background.
- Returned evidence: Lead cabin crew interview. Cabin staff heard unusual aircraft sounds after takeoff, received a request to prepare for an expedited landing, and saw no smoke or fire. They cannot identify the hydraulic source.
- Author checks: Corroborates urgency and survival facts without solving the cause.

### INT-07 — Airport operations staff interview

- Duration: 2 days. Prerequisite: none. Role: background.
- Returned evidence: Hobart operations staff account of runway availability, daylight conditions, emergency-service notification, and the aircraft's final position beyond the paved surface.
- Author checks: Consistent with the automatic scene note and APT evidence; no invented runway contamination.

### INT-08 — Emergency responder interview

- Duration: 2 days. Prerequisite: none. Role: background.
- Returned evidence: First responder account: the aircraft stopped beyond the runway, occupants evacuated, there was no fire, and fluid was observed around the right main-gear area after the aircraft stopped. The fluid was not identified at the scene.
- Author checks: Scene observation only; prevents the interview from becoming a laboratory conclusion.

### INT-11 — Targeted follow-up interview (crew)

- Duration: 2 days. Prerequisite: Day 5 automatic crew statement received. Role: supporting.
- Returned evidence: Follow-up questions about the sequence of cautions, PTU noise, gear indications, workload, approach stabilisation, and the crew's belief that a go-around was unsafe. The crew describe their perception and actions; they do not establish that a go-around was technically impossible.
- Author checks: The only scheduled dependency beyond the schedule's generic availability. Do not expose an author conclusion in the interview.

### ATC-02 — ATC controller interview

- Duration: 2 days. Prerequisite: none. Role: supporting.
- Returned evidence: Controller account of the crew's urgency, requested return, vectors, altitude and speed clearances, and the controller's observation that the aircraft appeared high on final. The controller did not assess aircraft system status.
- Author checks: Supports rushed geometry and workload, not mechanical causation.

### ATC-03 — Radar track data

- Duration: 2 days. Prerequisite: none. Role: supporting.
- Returned evidence: Processed Hobart surveillance track showing the return routing, descent profile, and alignment with Runway 12. The aircraft turns back promptly, descends on a compressed profile, and remains above the nominal approach path until late in the approach.
- Author checks: Must agree with DAT-01/DAT-02 and the supplied altitude samples; radar does not provide cockpit indications.

### APT-02 — Runway inspection records

- Duration: 2 days. Prerequisite: none. Role: rule-out.
- Returned evidence: Post-event runway inspection. No foreign-object debris, standing water, oil film, or structural runway defect explains the overrun; tire marks and aircraft debris begin near the recorded landing sequence.
- Author checks: Does not provide friction values; APT-04 does that. It remains possible that braking effectiveness varied for aircraft-system reasons.

### APT-03 — Runway surface-condition information

- Duration: 2 days. Prerequisite: none. Role: rule-out.
- Returned evidence: Surface-condition report for Runway 12: dry, serviceable, and within the airport's normal condition reporting range at the relevant time.
- Author checks: Deliberate dead end and consistent with automatic WX-01.

### ORG-02 — Operational notices and bulletins

- Duration: 2 days. Prerequisite: none. Role: supporting.
- Returned evidence: BlueWing notices current on the event date, including a reminder about unstable approaches, abnormal-system briefings, and go-around decision-making. No notice directed crews to continue an unstable approach.
- Author checks: Context for organisational expectations, not proof of a policy failure.

### ORG-06 — Similar defect or event reports

- Duration: 2 days. Prerequisite: none. Role: supporting.
- Returned evidence: De-identified operator and manufacturer event summaries involving hydraulic leaks, PTU operation, and abnormal landing-gear indications. The summaries show that system interactions can generate high workload, but none is identical to Flight 96.
- Author checks: Supports plausibility and comparison only; no direct causal transfer from another event.

### REF-06 — Maintenance manual extracts

- Duration: 2 days. Prerequisite: none. Role: supporting.
- Returned evidence: Maintenance-manual extracts for inspection, removal, installation, and pressure testing of the relevant flexible hose and landing-gear-door circuit. The inspection method has limitations for internal deterioration that is not externally visible.
- Author checks: Required for interpreting LAB-05/LAB-09 and MNT records; does not say the inspection was improperly performed.

### REF-10 — Manufacturer service information

- Duration: 2 days. Prerequisite: none. Role: core.
- Returned evidence: Manufacturer technical information describing the interaction of green-system pressure loss, PTU operation, yellow-system temperature rise, and protective isolation on the relevant aircraft configuration. It identifies expected indications and limitations without applying them to Flight 96.
- Author checks: Central technical context. Must remain a reference document, not an answer key.

## Three-day requests

### WRK-01 — Accident-site survey

- Duration: 3 days. Prerequisite: none. Role: supporting.
- Returned evidence: Survey plan and measurements of the paved runway end, overrun ground, aircraft final position, debris distribution, and visible fluid traces. The aircraft left the paved surface after the landing sequence; there is no evidence of an airborne breakup or pre-landing ground collision.
- Author checks: Supports overrun sequence and survival facts; fluid traces are not identified without laboratory testing.

### WRK-03 — Detailed wreckage photographs

- Duration: 3 days. Prerequisite: none. Role: supporting.
- Returned evidence: Annotated photographs of the right main landing-gear door area, landing gear, wheels, brakes, lower fuselage, spoilers, and thrust reversers. Captions describe damage and location but do not label the initiating failure.
- Author checks: Must preserve uncertainty between impact damage and pre-existing component damage until SYS-07/LAB requests.

### WRK-09 — Landing-gear and brake examination

- Duration: 3 days. Prerequisite: none. Role: core.
- Returned evidence: Examination report for landing gear, wheels, brakes, anti-skid components, spoilers, and thrust reversers. Gear and brake damage is consistent with a high-energy runway excursion; no primary pre-landing brake failure is identified. The report records the systems' post-event condition and limits what can be inferred from impact damage.
- Author checks: Supports the degraded-stopping/late-touchdown finding without claiming that every stopping aid was unavailable.

### WRK-10 — Impact-mark examination

- Duration: 3 days. Prerequisite: none. Role: supporting.
- Returned evidence: Survey of tire marks, runway marks, ground scars, and aircraft impact points. The evidence places touchdown well beyond the intended touchdown zone and shows continued travel to the runway end before entry into unpaved ground.
- Author checks: Exact touchdown distance must remain compatible with CMP-07 and the provisional 1,000-metre-beyond-threshold description.

### SYS-07 — Hydraulic-system examination

- Duration: 3 days. Prerequisite: none. Role: core.
- Returned evidence: Examination of recovered hydraulic components and fluid traces. The green-system circuit has a ruptured flexible hose at the right main-gear-door installation; the green reservoir is depleted. The PTU is mechanically intact. The yellow circuit shows heat exposure and a subsequent isolated supply; post-event testing cannot by itself reproduce every in-flight condition.
- Author checks: This is the gateway for LAB-05, LAB-08, LAB-09, and CMP-05. It identifies the failed component location but not yet why the hose ruptured.

### SYS-17 — Warning-system examination

- Duration: 3 days. Prerequisite: none. Role: supporting.
- Returned evidence: Examination of relevant sensors, annunciators, and recorded warning pathways. No evidence shows a cockpit warning-system defect that would explain the sequence; the warnings and indications in the supplied recorder extract are technically plausible for the examined configuration.
- Author checks: Supports interpreting warnings as real system information and rules out a false-warning theory.

### DAT-01 — Additional flight-recorder parameters

- Duration: 3 days. Prerequisite: none. Role: core.
- Returned evidence: Additional recorder parameters for hydraulic pressures and temperatures, landing-gear position, flight-path angle, selected configuration, brake and spoiler status, and engine thrust/reverse indications. The data shows green pressure falling after gear retraction, yellow temperature rising during PTU operation, yellow pressure becoming unavailable after isolation, both engines remaining operative, and the approach remaining high/fast before late touchdown.
- Author checks: Must not claim more precision than the fictional recorder source supports. Valid alternative to DAT-02 for CMP-06/CMP-07.

### DAT-02 — Detailed recorder extract

- Duration: 3 days. Prerequisite: none. Role: core.
- Returned evidence: A time-aligned detailed extract from 10:23:00 to 10:37:25, including selected airspeed, altitude, vertical path, gear, hydraulic indications, pump/PTU selections, spoilers, brakes, reverse thrust, and engine status. It shows the same sequence as the basic package at finer resolution and places the late touchdown and continued ground roll in the same timeline.
- Author checks: Valid alternative to DAT-01. Required for the example core route and compatible with CMP-07.

### DAT-07 — Aircraft system fault logs

- Duration: 3 days. Prerequisite: none. Role: supporting.
- Returned evidence: Non-volatile maintenance and system-log entries for the event. The logs contain hydraulic pressure/temperature-related events and landing-gear configuration events, but do not record a text diagnosis of a ruptured hose; some event timestamps are lower-resolution than the recorder data.
- Author checks: Corroborates the system sequence without becoming a magic answer.

### DAT-08 — Engine-monitoring data

- Duration: 3 days. Prerequisite: none. Role: rule-out.
- Returned evidence: Engine-monitoring extract for both engines. Engine speeds, temperatures, and thrust-related parameters remain within the recorded operating pattern for the flight; no engine shutdown or power-loss event explains the return or overrun.
- Author checks: Deliberate dead end and consistent with the flight-data package.

### DAT-11 — Airport surveillance footage

- Duration: 3 days. Prerequisite: none. Role: supporting.
- Returned evidence: Time-stamped airport camera footage showing the aircraft's return, approach, touchdown, long ground roll, and departure from the runway. Camera angles do not show cockpit instruments or identify the hydraulic failure.
- Author checks: Visual corroboration only; timing must align with 10:36:36 touchdown and 10:37:20 stop.

### DAT-12 — External photographs or video

- Duration: 3 days. Prerequisite: none. Role: background.
- Returned evidence: A small set of passenger and airport-worker photographs showing the aircraft on the runway and in the overrun area. The images show no fire and substantial landing-gear/lower-fuselage damage; perspective and timestamps are imperfect.
- Author checks: Must not reveal a close-up of the hose or create a second independent damage narrative.

### APT-04 — Runway friction test results

- Duration: 3 days. Prerequisite: none. Role: core.
- Returned evidence: Post-event friction measurements and surface assessment for Runway 12. The runway was dry and within the expected serviceable range; the results do not support unusually poor runway friction as the primary explanation for the overrun.
- Author checks: Important combination with WRK-09 and CMP-07. Avoid saying friction was perfect or that it cannot affect any stopping calculation.

### CMP-03 — Fleet defect history

- Duration: 3 days. Prerequisite: none. Role: supporting.
- Returned evidence: De-identified fleet history for comparable A320 hydraulic hose and PTU-related reports. Similar hose-flexing and hydraulic-interaction events exist, but the records vary in configuration and do not prove a fleet-wide defect on Flight 96.
- Author checks: Supports a plausible degradation mechanism and the need for manufacturer information, not an automatic design-defect finding.

### ORG-07 — Safety audit findings

- Duration: 3 days. Prerequisite: none. Role: supporting.
- Returned evidence: Relevant BlueWing safety-audit extracts. The operator met the sampled maintenance and unstable-approach monitoring requirements; auditors noted general workload-reporting opportunities but no finding tied directly to Flight 96.
- Author checks: Contributing organisational context must remain optional, not a substitute for the physical cause.

### ORG-11 — Management or operational staff interview

- Duration: 3 days. Prerequisite: none. Role: background.
- Returned evidence: Interview with BlueWing operations staff about dispatch, emergency support, and post-event response. Staff confirm that no operational instruction required the crew to continue an unstable approach and cannot diagnose the aircraft systems.
- Author checks: Background and rule-out of a dispatch directive, not a blame document.

## Four-day requests

### LAB-05 — Material-property testing

- Duration: 4 days. Prerequisite: SYS-07 delivered. Role: core.
- Returned evidence: Laboratory comparison of material from the ruptured hose with the specified material and an undamaged section from the same assembly. The tested material shows localised loss of flexibility and deterioration at the repeatedly flexed section; the result is consistent with progressive degradation, while impact damage cannot be inferred from this test alone.
- Author checks: Supports the initiating component condition. Must not assert a precise age or maintenance omission not shown by the sample.

### LAB-08 — Comparison with an undamaged component

- Duration: 4 days. Prerequisite: SYS-07 delivered. Role: core.
- Returned evidence: Side-by-side examination of the ruptured hose section and an undamaged comparable hose. The failed section has localised surface and internal condition differences at a flexing bend; the comparison does not establish when the deterioration became detectable.
- Author checks: Alternative/companion support for LAB-05. Do not make the reference component a perfect control for all service history.

### REF-13 — Manufacturer technical clarification

- Duration: 4 days. Prerequisite: REF-05 delivered. Role: supporting.
- Returned evidence: Manufacturer response to a neutral technical question about the recorded green-pressure loss, PTU operation, yellow-temperature rise, and protective isolation. The response confirms that the sequence is technically plausible for the recorded configuration and distinguishes system interaction from a PTU mechanical failure.
- Author checks: Must not apply the conclusion to Flight 96 beyond the supplied facts. REF-05 is the only prerequisite.

### HUM-11 — Toxicology report

- Duration: 4 days. Prerequisite: none. Role: rule-out.
- Returned evidence: Toxicology findings for the flight crew, with laboratory limitations and chain-of-custody notes. No impairing substance is identified; the report does not assess stress, workload, or judgement during the event.
- Author checks: Deliberate dead end; complements HUM-06/HUM-07 without claiming perfect human performance.

## Five-day requests

### LAB-09 — Manufacturer-specified component test

- Duration: 5 days. Prerequisite: SYS-07 delivered. Role: core.
- Returned evidence: Manufacturer-specified pressure, flex, and leak test of the recovered hose assembly. The hose fails at the previously identified flexing section under the specified test conditions; the result is limited by post-event handling and cannot independently reconstruct the in-flight time of rupture.
- Author checks: Alternative core support for LAB-05/LAB-08. The result is not a finding of improper maintenance.

### CMP-05 — Manufacturer test results

- Duration: 5 days. Prerequisite: SYS-07 delivered. Role: supporting.
- Returned evidence: Manufacturer laboratory report covering the hose, PTU, and relevant hydraulic components. The PTU passes its bench test; the hose examination is consistent with local deterioration and leakage, and the report lists the limits of post-event testing.
- Author checks: Reinforces that the PTU was an escalation mechanism rather than the initiating failed component.

### CMP-06 — Targeted simulator test

- Duration: 5 days. Prerequisites: REF-04 and DAT-01 or DAT-02 delivered. Role: supporting.
- Returned evidence: Scenario-based simulator comparison using the recorded aircraft configuration and system indications. The test shows that the crew could perceive a rapidly increasing workload and that a go-around remained a technically available option, although the workload and abnormal indications could reasonably influence the crew's decision.
- Author checks: Supports contributing human-performance findings without declaring the decision irrational or technically forced.

### CMP-07 — Aircraft performance reconstruction

- Duration: 5 days. Prerequisites: REF-12 and DAT-01 or DAT-02 delivered. Role: core.
- Returned evidence: Performance reconstruction using the recovered mass range, recorded wind and runway condition, recorder-derived approach/landing data, and the available braking-system findings. The reconstruction places touchdown materially beyond the intended touchdown zone and finds that the remaining runway margin was insufficient for the observed stopping performance; uncertainty ranges are shown rather than a single false-precision value.
- Author checks: Required for the overrun finding. It must combine late touchdown with degraded stopping capability and must not treat hydraulic loss alone as an automatic overrun.

## Author consistency matrix

| Finding the player may reach | Minimum evidence combinations | Relevant alternatives / rule-outs |
|---|---|---|
| Green hydraulic pressure was lost after takeoff | DAT-01 or DAT-02 plus SYS-07; DAT-07 may corroborate | MNT-01/MNT-04 rule out a known pre-flight defect |
| The initiating physical event involved the right main-gear-door hose | SYS-07 plus WRK-03, with LAB-05, LAB-08, or LAB-09 strengthening the mechanism | MNT-05/MNT-06 establish provenance; post-event damage limits certainty |
| PTU operation and yellow-system overheating increased the system problem | REF-05 or REF-10 plus DAT-01/DAT-02; SYS-07 corroborates | MNT-08/REF-13 clarify configuration; PTU is not treated as failed |
| Engines remained operative and engine failure is not the primary cause | DAT-08 or DAT-01/DAT-02 | Automatic data already gives a partial lead |
| The return and approach were rushed/high/fast and touchdown was late | DAT-01/DAT-02 plus ATC-03, WRK-10, or DAT-11 | ATC-02 and INT-11 provide human/contextual support |
| Stopping margin was insufficient for the observed landing | CMP-07 plus WRK-09 and APT-04, with OPS-06 useful | APT-02/APT-03 rule out runway contamination/defect as the primary cause |
| Crew workload and decision-making contributed | REF-03/REF-04 plus INT-11; CMP-06 strengthens | HUM records and toxicology do not establish fatigue or impairment |

## Timing and delivery audit

- All request durations are exactly those in the schedule: 11 one-day, 24 two-day, 17 three-day, 4 four-day, and 4 five-day requests.
- Only INT-11 has a case-specific prerequisite in the schedule: the Day 5 crew statement. The laboratory and comparison dependencies are repeated in their sections.
- CMP-07 and CMP-06 accept DAT-01 or DAT-02, as specified. REF-13 requires REF-05.
- No request result contradicts the automatic releases: the runway is dry, the engines remain operating, everyone survives, and no fire occurs.
- The example core route can use DAT-02, REF-12, SYS-07, CMP-07, LAB-05, APT-04, and REF-05 exactly as scheduled; its final result arrives Day 13.
- Requests that arrive after Day 19 remain blocked by the global timing rules; this pack does not add exceptions.
