const CASE_001 = {
  title: "BlueWing Airlines Flight 96",
  route: "Hobart → Melbourne",
  aircraft: "Airbus A320-232",
  deadline: 19,
  automatic: [
    { day: 2, code: "APT-01", title: "Airport layout and scene note", body: "Hobart Runway 12 was dry and open in daylight. The aircraft came to rest beyond the paved runway. There was no fire and all occupants survived." },
    { day: 2, code: "DAT-00", title: "Basic recorded-data package", body: "The supplied sample shows an in-flight return to Hobart, a high and fast approach, touchdown at 10:36:36 local time, and groundspeed reaching zero at 10:37:20. The sample is not a complete recorder download." },
    { day: 3, code: "CVR-01", title: "Cockpit voice recorder transcript", body: "Selected cockpit and radio excerpts covering departure, the abnormal indications, the return decision, the approach, and the runway excursion." },
    { day: 4, code: "WX-01", title: "Airport weather observations", body: "Daylight conditions, good visibility, a light headwind, and a dry runway. No significant thunderstorm, icing, or turbulence condition affected the airport." },
    { day: 4, code: "ATC-01", title: "ATC communications transcript", body: "The crew requested an expedited return to Hobart. Controllers provided vectors and landing support; the approach was compressed and the aircraft remained high until late in the approach." },
    { day: 5, code: "INT-01", title: "Flight crew first statement", body: "The crew describe multiple aircraft warnings, a high workload, and their belief that a go-around would be unsafe. This is a subjective account and does not establish that a go-around was technically impossible." },
    { day: 6, code: "WRK-00", title: "General damage photographs", body: "Photographs show substantial damage to the landing gear and lower fuselage after the aircraft left the runway. There is no fire." }
  ],
  requests: [
    ["REF-01","Aircraft operating manual extracts",1,"background",[],"Extracts covering aircraft systems, landing-gear operation, and manual terminology. The extracts describe the green, yellow, and blue hydraulic systems and the PTU without interpreting Flight 96."],
    ["REF-02","Aircraft limitations",1,"supporting",[],"Applicable limitations for abnormal hydraulic operation, landing gear, approach speed, braking, and reverse thrust. A limitation is not by itself proof that it was exceeded."],
    ["REF-03","Normal procedures",1,"background",[],"Normal departure, approach, landing, and go-around procedures, including stabilized-approach gates and pilot task sharing."],
    ["REF-04","Abnormal and emergency procedures",1,"core",[],"Procedure extracts for hydraulic abnormalities, hydraulic overheat, landing-gear abnormalities, and a go-around from an unstable approach."],
    ["REF-05","Aircraft system description",1,"core",[],"System notes and schematic for the green, yellow, and blue hydraulic circuits, pumps, reservoirs, PTU, and landing-gear actuators. PTU operation transfers power, not hydraulic fluid."],
    ["REF-12","Aircraft performance charts",1,"core",[],"Performance charts for landing and go-around across landing masses, wind, runway conditions, and system configurations. They show that a late touchdown reduces runway margin."],
    ["ORG-01","Operator procedures",1,"supporting",[],"BlueWing procedures for abnormal-system coordination, task sharing, approach briefings, stabilized-approach monitoring, and go-around decisions."],
    ["WX-02","Relevant weather forecasts",1,"rule-out",[],"Forecasts show daylight, dry conditions, a light headwind, good visibility, and no significant thunderstorm, icing, or turbulence condition at Hobart."],
    ["APT-07","Relevant NOTAMs",1,"rule-out",[],"Runway 12 was open. No NOTAM reported a closure or braking-surface restriction relevant to the landing."],
    ["OPS-06","Weight-and-balance calculations",1,"supporting",[],"The aircraft was within takeoff and landing limits. No abnormal cargo shift is identified."],
    ["HUM-06","Crew duty roster",1,"rule-out",[],"The captain and first officer worked a normal duty period with no unexpected extension before Flight 96."],
    ["MNT-01","Aircraft technical log",2,"supporting",[],"The technical log for the preceding sectors and departure sector shows no open defect for the hydraulic systems, PTU, landing gear, brakes, engines, or flight controls. The pre-departure release was signed."],
    ["MNT-02","Recent maintenance work package",2,"rule-out",[],"Recent task cards show no task opened the affected right main-gear-door hydraulic line. Checks on unrelated work were satisfactory."],
    ["MNT-03","Historical maintenance records",2,"supporting",[],"Selected history for the aircraft and right main-gear-door hydraulic installation. Routine inspections are recorded, with no earlier Flight 96 leak report."],
    ["MNT-04","Deferred defect records",2,"rule-out",[],"No open hydraulic, gear, brake, engine, or flight-control defect affected this flight."],
    ["MNT-05","Component installation history",2,"supporting",[],"Installation and removal records for the relevant hose assembly and right main-gear-door hardware. The record does not itself identify the failure mechanism."],
    ["MNT-06","Component service history",2,"supporting",[],"Available service, cycle, overhaul, and repair history for component H96-RMGD-HYD-04. No prior leak report is recorded; one earlier operator period is incomplete."],
    ["MNT-07","Maintenance compliance records",2,"supporting",[],"Required inspections and task intervals covering the hydraulic installation were recorded as completed. The records cannot guarantee that an internal defect would have been visible."],
    ["MNT-08","Aircraft modification records",2,"core",[],"The aircraft configuration record shows that Flight 96 did not have the later PTU-related protective modification used in comparison material."],
    ["MNT-09","Previous crew defect reports",2,"background",[],"Earlier-sector reports contain no prior report of abnormal PTU noise, gear-door leakage, or brake malfunction."],
    ["HUM-02","Aircraft-type training records",2,"supporting",[],"Both pilots held current A320 qualifications and had completed hydraulic-system and abnormal-gear training modules."],
    ["HUM-03","Recurrent training and checking records",2,"supporting",[],"Both pilots passed recent recurrent checks and simulator grading with no outstanding remediation item."],
    ["HUM-05","Flight experience and logbook extracts",2,"background",[],"Both pilots were current and experienced on type. Neither record contains a directly comparable hydraulic event."],
    ["HUM-07","Work-and-rest history",2,"rule-out",[],"Recorded duty, rest, and sleep opportunity show no roster or record-based fatigue exceedance."],
    ["INT-02","Cabin crew interview",2,"background",[],"Cabin staff heard unusual sounds after takeoff, prepared for an expedited landing, and saw no smoke or fire. They cannot identify the hydraulic source."],
    ["INT-07","Airport operations staff interview",2,"background",[],"Airport staff describe runway availability, emergency notification, and the aircraft's final position beyond the paved surface."],
    ["INT-08","Emergency responder interview",2,"background",[],"Responders saw the aircraft beyond the runway, evacuated occupants, observed no fire, and saw unidentified fluid around the right main-gear area."],
    ["INT-11","Targeted follow-up interview (crew)",2,"supporting",["DAY5"],"The crew answer follow-up questions about cautions, PTU noise, gear indications, workload, approach stabilisation, and their belief that a go-around was unsafe."],
    ["ATC-02","ATC controller interview",2,"supporting",[],"The controller describes the urgent return, vectors, clearances, and an aircraft that appeared high on final. The controller did not assess aircraft systems."],
    ["ATC-03","Radar track data",2,"supporting",[],"Surveillance track shows the return routing, compressed descent, alignment with Runway 12, and an aircraft above the nominal approach path until late in the approach."],
    ["APT-02","Runway inspection records",2,"rule-out",[],"Inspection found no foreign-object debris, standing water, oil film, or structural runway defect that explains the overrun."],
    ["APT-03","Runway surface-condition information",2,"rule-out",[],"Runway 12 was dry, serviceable, and within the airport's normal surface-condition reporting range."],
    ["ORG-02","Operational notices and bulletins",2,"supporting",[],"Current BlueWing notices cover unstable approaches, abnormal-system briefings, and go-around decision-making. None directed crews to continue an unstable approach."],
    ["ORG-06","Similar defect or event reports",2,"supporting",[],"De-identified reports involving hydraulic leaks, PTU operation, and abnormal landing-gear indications show that system interactions can create high workload. None is identical to Flight 96."],
    ["REF-06","Maintenance manual extracts",2,"supporting",[],"Inspection, removal, installation, and pressure-testing instructions for the relevant hose and landing-gear-door circuit, including limits for detecting internal deterioration."],
    ["REF-10","Manufacturer service information",2,"core",[],"Technical information describes the interaction of green pressure loss, PTU operation, yellow temperature rise, and protective isolation for the relevant configuration."],
    ["WRK-01","Accident-site survey",3,"supporting",[],"Site measurements place the aircraft beyond the paved runway and record debris distribution and visible fluid traces. There is no evidence of airborne breakup or a pre-landing ground collision."],
    ["WRK-03","Detailed wreckage photographs",3,"supporting",[],"Annotated photographs cover the right main-gear-door area, landing gear, wheels, brakes, lower fuselage, spoilers, and thrust reversers without labelling the initiating failure."],
    ["WRK-09","Landing-gear and brake examination",3,"core",[],"Gear and brake damage is consistent with a high-energy runway excursion. No primary pre-landing brake failure is identified; post-event damage limits what can be inferred."],
    ["WRK-10","Impact-mark examination",3,"supporting",[],"Tire marks, runway marks, ground scars, and aircraft impact points place touchdown well beyond the intended touchdown zone and show continued travel to the runway end."],
    ["SYS-07","Hydraulic-system examination",3,"core",[],"The green circuit has a ruptured flexible hose at the right main-gear-door installation and a depleted green reservoir. The PTU is mechanically intact. The yellow circuit shows heat exposure and subsequent isolation."],
    ["SYS-17","Warning-system examination",3,"supporting",[],"Relevant sensors, annunciators, and warning pathways show no warning-system defect that explains the sequence. The supplied indications are technically plausible for this configuration."],
    ["DAT-01","Additional flight-recorder parameters",3,"core",[],"Additional parameters show green pressure falling after gear retraction, yellow temperature rising during PTU operation, yellow pressure unavailable after isolation, both engines operating, and a high/fast approach before late touchdown."],
    ["DAT-02","Detailed recorder extract",3,"core",[],"A time-aligned extract from 10:23:00–10:37:25 shows selected speed, altitude, path, gear, hydraulic indications, pump/PTU selections, spoilers, brakes, reverse thrust, and engine status."],
    ["DAT-07","Aircraft system fault logs",3,"supporting",[],"System logs contain hydraulic pressure/temperature and landing-gear configuration events, but no text diagnosis of a ruptured hose."],
    ["DAT-08","Engine-monitoring data",3,"rule-out",[],"Both engines remain within their recorded operating pattern. No engine shutdown or power-loss event explains the return or overrun."],
    ["DAT-11","Airport surveillance footage",3,"supporting",[],"Airport footage shows the return, approach, touchdown, long ground roll, and departure from the runway. It does not show cockpit instruments or identify the hydraulic failure."],
    ["DAT-12","External photographs or video",3,"background",[],"Passenger and airport-worker images show the aircraft in the runway and overrun areas, no fire, and substantial landing-gear/lower-fuselage damage."],
    ["APT-04","Runway friction test results",3,"core",[],"Post-event friction measurements show a dry, serviceable runway and do not support unusually poor runway friction as the primary explanation."],
    ["CMP-03","Fleet defect history",3,"supporting",[],"Comparable A320 records include hydraulic hose-flexing and PTU-related events, but configuration differences mean they do not prove a fleet-wide defect here."],
    ["ORG-07","Safety audit findings",3,"supporting",[],"BlueWing met sampled maintenance and unstable-approach monitoring requirements. Auditors noted general workload-reporting opportunities but no finding tied directly to Flight 96."],
    ["ORG-11","Management or operational staff interview",3,"background",[],"Operations staff describe dispatch, emergency support, and response. No operational instruction required the crew to continue an unstable approach."],
    ["LAB-05","Material-property testing",4,"core",["SYS-07"],"Material from the ruptured hose shows localised loss of flexibility and deterioration at a repeatedly flexed section. The result is consistent with progressive degradation."],
    ["LAB-08","Comparison with an undamaged component",4,"core",["SYS-07"],"Comparison with an undamaged hose shows localised surface and internal differences at a flexing bend, but does not establish when the deterioration became detectable."],
    ["REF-13","Manufacturer technical clarification",4,"supporting",["REF-05"],"The manufacturer confirms that the recorded green-pressure loss, PTU operation, yellow-temperature rise, and protective isolation are technically plausible for this configuration."],
    ["HUM-11","Toxicology report",4,"rule-out",[],"No impairing substance is identified in crew toxicology. The report does not assess stress, workload, or judgement during the event."],
    ["LAB-09","Manufacturer-specified component test",5,"core",["SYS-07"],"The recovered hose fails at the identified flexing section under the specified pressure, flex, and leak test. Post-event handling limits what can be reconstructed."],
    ["CMP-05","Manufacturer test results",5,"supporting",["SYS-07"],"The PTU passes its bench test. The hose examination is consistent with local deterioration and leakage, with post-event testing limitations recorded."],
    ["CMP-06","Targeted simulator test",5,"supporting",["REF-04","RECORDER"],"A simulator comparison shows rapidly increasing workload and confirms that a go-around remained technically available, while abnormal indications could influence the crew's decision."],
    ["CMP-07","Aircraft performance reconstruction",5,"core",["REF-12","RECORDER"],"Using mass, wind, runway condition, recorder data, and braking findings, the reconstruction places touchdown materially beyond the intended zone and finds insufficient remaining runway margin for the observed stop." ]
  ].map(([code,title,duration,role,prerequisites,body]) => ({ code, title, duration, role, prerequisites, body }))
};

// Player-facing document contents. Author roles are intentionally kept out of
// this display layer; the player sees the records and must interpret them.
const CASE_001_FULL_CVR_TRANSCRIPT = `# Case 001: BlueWing Airlines Flight 96
## Cockpit voice recorder — selected transcript

Status: Working draft; technical and timeline review pending.
Availability: All excerpts are supplied in the initial evidence package. None are requestable.
Gaps represent omitted uneventful recording, not missing or unavailable evidence.

Date: To be assigned, 2012
Time standard: Local time
Departure and intended destination: Hobart–Melbourne

### Speaker key
- CAPT — Captain, pilot flying.
- FO — First officer, pilot monitoring.
- GND — Hobart Ground.
- TWR — Hobart Tower.
- APP — Approach controller.
- CABIN — Lead cabin crew member, via interphone.
- SOUND — Recorded non-speech sound.
- AUTO — Automated aircraft announcement.

Only intelligible speech is transcribed. Radio transmissions received in the cockpit are included.

## Excerpt 1 — Ground preparation and engine start

| Time | Speaker | Transcript |
|---|---|---|
| 10:06:12 | CAPT | “Ready for the departure briefing?” |
| 10:06:15 | FO | “Go ahead.” |
| 10:06:18 | CAPT | “Runway one two, departure as cleared, then Melbourne.” |
| 10:06:25 | CAPT | “I’ll fly; you handle the radios and monitor.” |
| 10:06:30 | CAPT | “Before V1, we stop for the appropriate serious failure.” |
| 10:06:36 | CAPT | “After V1, we continue, get airborne, then deal with it.” |
| 10:06:43 | FO | “Understood.” |
| 10:06:47 | FO | “Weather’s good, runway dry.” |
| 10:06:52 | CAPT | “Any outstanding aircraft defects?” |
| 10:06:56 | FO | “Nothing outstanding in the technical log.” |
| 10:07:03 | CAPT | “Before-start checklist.” |
| 10:07:07 | FO | “Cockpit preparation?” |
| 10:07:10 | CAPT | “Completed.” |
| 10:07:14 | FO | “Fuel quantity?” |
| 10:07:17 | CAPT | “Checked against the flight plan.” |
| 10:07:22 | FO | “Doors?” |
| 10:07:25 | CAPT | “Closed.” |
| 10:07:29 | FO | “Parking brake?” |
| 10:07:32 | CAPT | “On.” |
| 10:07:38 | FO | “Hobart Ground, BlueWing ninety-six, request pushback and start.” |
| 10:07:46 | GND | “BlueWing ninety-six, pushback and start approved.” |
| 10:07:51 | FO | “Pushback and start approved, BlueWing ninety-six.” |
| 10:08:16 | CAPT | “Starting engine two.” |
| 10:08:20 | FO | “Monitoring.” |
| 10:08:48 | FO | “Engine two stable.” |
| 10:08:54 | CAPT | “Starting engine one.” |
| 10:09:23 | FO | “Engine one stable.” |
| 10:09:30 | CAPT | “After-start checks.” |
| 10:09:42 | FO | “Hydraulic indications normal.” |
| 10:09:47 | CAPT | “Checked.” |
| 10:10:04 | FO | “Flight controls?” |
| 10:10:08 | CAPT | “Checking.” |
| 10:10:23 | FO | “Full movement, indications correct.” |
| 10:10:29 | CAPT | “Good.” |

### Recording selection gap
10:10:30–10:17:40: Uneventful ground activity omitted.

## Excerpt 2 — Taxi and departure preparation

| Time | Speaker | Transcript |
|---|---|---|
| 10:17:41 | FO | “Hobart Ground, BlueWing ninety-six, ready to taxi.” |
| 10:17:48 | GND | “BlueWing ninety-six, taxi to the runway one two holding point.” |
| 10:17:54 | FO | “Runway one two holding point, BlueWing ninety-six.” |
| 10:18:10 | CAPT | “Brake check.” |
| 10:18:15 | CAPT | “Normal.” |
| 10:19:02 | FO | “Cabin reports ready.” |
| 10:19:07 | CAPT | “Before-takeoff checklist.” |
| 10:19:13 | FO | “Flight controls?” |
| 10:19:16 | CAPT | “Checked.” |
| 10:19:20 | FO | “Takeoff configuration?” |
| 10:19:23 | CAPT | “Checked.” |
| 10:19:29 | FO | “Departure briefing?” |
| 10:19:32 | CAPT | “Confirmed.” |
| 10:19:38 | FO | “Checklist complete.” |
| 10:20:07 | FO | “Hobart Tower, BlueWing ninety-six, ready runway one two.” |
| 10:20:15 | TWR | “BlueWing ninety-six, line up runway one two.” |
| 10:20:21 | FO | “Line up runway one two, BlueWing ninety-six.” |

### Recording selection gap
10:20:22–10:21:57: Uneventful line-up activity omitted.

## Excerpt 3 — Takeoff and initial climb

| Time | Speaker | Transcript |
|---|---|---|
| 10:21:58 | TWR | “BlueWing ninety-six, wind one two zero degrees, six knots, runway one two cleared for takeoff.” |
| 10:22:06 | FO | “Cleared for takeoff runway one two, BlueWing ninety-six.” |
| 10:22:12 | CAPT | “Ready?” |
| 10:22:14 | FO | “Ready.” |
| 10:22:18 | CAPT | “Takeoff.” |
| 10:22:26 | FO | “Thrust set.” |
| 10:22:43 | FO | “One hundred knots.” |
| 10:22:45 | CAPT | “Checked.” |
| 10:22:56 | FO | “V1.” |
| 10:22:59 | FO | “Rotate.” |
| 10:23:07 | FO | “Positive climb.” |
| 10:23:10 | CAPT | “Gear up.” |
| 10:23:12 | FO | “Gear up.” |
| 10:23:21 | CAPT | “Gear taking longer?” |
| 10:23:25 | FO | “Still showing in transit.” |
| 10:23:29 | CAPT | “Keep an eye on it.” |
| 10:23:45 | FO | “No caution showing.” |
| 10:23:49 | CAPT | “We’ll keep climbing.” |
| 10:24:08 | FO | “Hobart Tower, BlueWing ninety-six, airborne.” |
| 10:24:14 | TWR | “BlueWing ninety-six, contact Approach.” |
| 10:24:19 | FO | “Approach, BlueWing ninety-six.” |
| 10:24:28 | FO | “Approach, BlueWing ninety-six, climbing on departure.” |
| 10:24:36 | APP | “BlueWing ninety-six, identified, continue climb as cleared.” |
| 10:24:42 | FO | “Continue climb, BlueWing ninety-six.” |
| 10:24:58 | CAPT | “Let’s look at the gear indication.” |
| 10:25:03 | FO | “It hasn’t completed.” |
| 10:25:08 | CAPT | “Leave the configuration for now.” |

## Excerpt 4 — Warnings and emergency declaration

| Time | Speaker | Transcript |
|---|---|---|
| 10:25:17 | SOUND | [Warning chime.] |
| 10:25:20 | FO | “Green hydraulic reservoir low level.” |
| 10:25:24 | CAPT | “I have control.” |
| 10:25:27 | FO | “You have control.” |
| 10:25:31 | SOUND | [Further warning chime.] |
| 10:25:34 | FO | “Yellow reservoir overheat as well.” |
| 10:25:39 | CAPT | “Both?” |
| 10:25:42 | FO | “Green low level, yellow overheat.” |
| 10:25:47 | CAPT | “Stop the climb; tell them we need to come back.” |
| 10:25:54 | FO | “Mayday, Mayday, Mayday, BlueWing ninety-six, hydraulic failure, request immediate return to Hobart.” |
| 10:26:07 | APP | “BlueWing ninety-six, roger Mayday, runway one two available, say intentions.” |
| 10:26:16 | FO | “Stand by.” |
| 10:26:20 | CAPT | “Take us around for one two.” |
| 10:26:24 | CAPT | “Keep it close.” |
| 10:26:29 | FO | “Request vectors back to runway one two, BlueWing ninety-six.” |
| 10:26:38 | APP | “BlueWing ninety-six, turn left heading zero three zero, maintain present altitude.” |
| 10:26:46 | FO | “Left zero three zero, maintain present altitude, BlueWing ninety-six.” |
| 10:26:54 | CAPT | “Start the ECAM actions.” |
| 10:27:01 | FO | “PTU off.” |
| 10:27:05 | CAPT | “Confirmed, off.” |
| 10:27:12 | FO | “Green engine pump off.” |
| 10:27:16 | CAPT | “Confirmed.” |
| 10:27:23 | FO | “Yellow engine pump off for the overheat.” |
| 10:27:28 | CAPT | “Confirmed.” |
| 10:27:36 | SOUND | [Warning chime.] |
| 10:27:40 | FO | “Yellow pressure’s down now.” |
| 10:27:45 | CAPT | “What have we still got?” |
| 10:27:49 | FO | “Blue pressure’s normal.” |
| 10:27:54 | CAPT | “Controls feel heavier.” |
| 10:28:00 | FO | “There are more flight-control messages.” |
| 10:28:05 | CAPT | “One at a time.” |
| 10:28:11 | FO | “Both engines are normal.” |
| 10:28:16 | CAPT | “All right.” |

## Excerpt 5 — Return preparation and cockpit workload

| Time | Speaker | Transcript |
|---|---|---|
| 10:28:26 | APP | “BlueWing ninety-six, advise persons on board and fuel remaining when able.” |
| 10:28:34 | FO | “We’ll advise shortly, BlueWing ninety-six.” |
| 10:28:40 | CAPT | “Get the cabin ready first.” |
| 10:28:45 | FO | “Cabin, cockpit.” |
| 10:28:49 | CABIN | “Go ahead.” |
| 10:28:52 | FO | “We have a hydraulic problem and are returning immediately.” |
| 10:28:58 | FO | “Prepare for an emergency landing.” |
| 10:29:03 | CABIN | “How long have we got?” |
| 10:29:07 | FO | “About six minutes, possibly less.” |
| 10:29:12 | CABIN | “Understood.” |
| 10:29:19 | CAPT | “Where are we on the checklist?” |
| 10:29:23 | FO | “Still working through the dual hydraulic items.” |
| 10:29:29 | CAPT | “We need the gear down.” |
| 10:29:34 | FO | “Gravity extension.” |
| 10:29:38 | CAPT | “Do that.” |
| 10:30:04 | SOUND | [Mechanical handling noise.] |
| 10:30:22 | FO | “Three green.” |
| 10:30:26 | CAPT | “Good.” |
| 10:30:31 | FO | “Normal brakes unavailable.” |
| 10:30:35 | FO | “We’ll be relying on the remaining brake reserve.” |
| 10:30:41 | CAPT | “We’ve got the runway.” |
| 10:30:47 | FO | “We still need the landing-distance assessment.” |
| 10:30:52 | CAPT | “Get what you can; we’re coming in.” |
| 10:31:02 | APP | “BlueWing ninety-six, turn left heading three three zero.” |
| 10:31:08 | FO | “Left three three zero, BlueWing ninety-six.” |
| 10:31:15 | FO | “We could ask for a wider circuit.” |
| 10:31:19 | CAPT | “I don’t want to stay airborne with these warnings.” |
| 10:31:25 | FO | “Understood.” |
| 10:31:33 | CAPT | “How’s the yellow temperature?” |
| 10:31:38 | FO | “Still showing overheat.” |
| 10:31:43 | CAPT | “Leave it isolated.” |

### Recording selection gap
10:31:44–10:32:35: Routine radio coordination and cockpit activity omitted.

## Excerpt 6 — Final turn and landing decision

| Time | Speaker | Transcript |
|---|---|---|
| 10:32:36 | APP | “BlueWing ninety-six, runway one two is on your left, report visual.” |
| 10:32:44 | CAPT | “I’ve got it.” |
| 10:32:47 | FO | “Runway visual, BlueWing ninety-six.” |
| 10:32:54 | APP | “BlueWing ninety-six, cleared visual approach runway one two, contact Tower.” |
| 10:33:02 | FO | “Visual approach one two, Tower, BlueWing ninety-six.” |
| 10:33:12 | FO | “Hobart Tower, BlueWing ninety-six, returning visual runway one two.” |
| 10:33:20 | TWR | “BlueWing ninety-six, runway one two cleared to land, wind one two zero degrees, six knots, emergency services standing by.” |
| 10:33:31 | FO | “Cleared to land one two, BlueWing ninety-six.” |
| 10:33:38 | FO | “We’re close in.” |
| 10:33:42 | CAPT | “Turning final.” |
| 10:33:49 | FO | “Still high.” |
| 10:33:53 | CAPT | “Coming down.” |
| 10:34:00 | FO | “Speed’s above target.” |
| 10:34:05 | CAPT | “I’m bringing it back.” |
| 10:34:12 | FO | “Landing configuration isn’t fully settled yet.” |
| 10:34:18 | CAPT | “Keep checking it.” |
| 10:34:28 | AUTO | “One thousand.” |
| 10:34:32 | FO | “Not stable.” |
| 10:34:36 | CAPT | “We’ll get it.” |
| 10:34:43 | FO | “Do you want to go around?” |
| 10:34:48 | CAPT | “With the hydraulics like this?” |
| 10:34:53 | CAPT | “No, we need to get it on the ground.” |
| 10:35:01 | FO | “Both engines are available.” |
| 10:35:06 | CAPT | “It’s the controls I’m concerned about.” |
| 10:35:11 | CAPT | “We’re landing.” |
| 10:35:18 | FO | “Checked.” |
| 10:35:29 | AUTO | “Five hundred.” |
| 10:35:33 | FO | “Still fast.” |
| 10:35:37 | CAPT | “Runway’s clear.” |
| 10:35:43 | FO | “Cabin ready.” |
| 10:35:48 | CAPT | “Brace, brace.” |

## Excerpt 7 — Touchdown and runway overrun

| Time | Speaker | Transcript |
|---|---|---|
| 10:36:00 | AUTO | “One hundred.” |
| 10:36:22 | AUTO | “Fifty.” |
| 10:36:24 | AUTO | “Forty.” |
| 10:36:26 | AUTO | “Thirty.” |
| 10:36:28 | AUTO | “Twenty.” |
| 10:36:29 | AUTO | “Retard.” |
| 10:36:30 | FO | “We’re floating.” |
| 10:36:31 | CAPT | “Come on.” |
| 10:36:32 | FO | “Long.” |
| 10:36:36 | SOUND | [Touchdown noise.] |
| 10:36:40 | CAPT | “Reverse.” |
| 10:36:44 | FO | “Checking.” |
| 10:36:48 | CAPT | “Braking.” |
| 10:36:52 | FO | “Deceleration’s low.” |
| 10:36:57 | CAPT | “I’m on the brakes.” |
| 10:37:02 | FO | “End of the runway.” |
| 10:37:06 | CAPT | “Hold on.” |
| 10:37:10 | SOUND | [Heavy rumbling and repeated impacts.] |
| 10:37:14 | SOUND | [Loud impact; loose objects audible.] |
| 10:37:20 | FO | “Stopped.” |
| 10:37:24 | CAPT | “Engines shut down.” |
| 10:37:29 | FO | “Shutting down.” |
| 10:37:35 | FO | “Tower, BlueWing ninety-six, we’ve overrun, aircraft stopped beyond the runway.” |
| 10:37:44 | TWR | “BlueWing ninety-six, emergency vehicles approaching.” |
| 10:37:50 | CAPT | “Evacuate, evacuate.” |
| 10:37:56 | SOUND | [Evacuation command audible over cabin public-address system.] |

## Excerpt 8 — Immediate aftermath

| Time | Speaker | Transcript |
|---|---|---|
| 10:38:08 | FO | “No fire visible on this side.” |
| 10:38:13 | CAPT | “Check with the cabin.” |
| 10:38:18 | FO | “Cabin, cockpit, report conditions.” |
| 10:38:24 | CABIN | “Evacuation underway, no smoke in the cabin.” |
| 10:38:31 | CAPT | “Keep us advised.” |
| 10:38:39 | TWR | “BlueWing ninety-six, fire crews are alongside.” |
| 10:38:46 | FO | “Received, BlueWing ninety-six.” |
| 10:39:04 | FO | “I thought we’d have more braking than that.” |
| 10:39:11 | CAPT | “We were a long way down.” |
| 10:39:20 | FO | “Yes.” |
| 10:39:43 | CABIN | “Cabin sweep complete, no passengers remaining.” |
| 10:39:49 | CAPT | “Understood, we’re coming out.” |

End of selected transcript.`;

const CASE_001_DOCUMENTS = {
  "APT-01": { sections: [{ heading: "Scene measurements", kind: "table", columns: ["Item", "Recorded value"], rows: [["Runway", "Hobart 12"], ["Runway condition", "Dry; serviceable"], ["Aircraft final position", "Beyond paved runway end"], ["Fire", "None observed"], ["Occupants", "All survived"]] }] },
  "DAT-00": { sections: [{ heading: "Basic recorder sample", kind: "table", columns: ["Local time", "Parameter", "Recorded value"], rows: [["10:22:18", "Groundspeed", "0 kt"], ["10:24:28", "Radio altitude", "1,050 ft"], ["10:30:22", "Indicated airspeed", "174 kt"], ["10:34:28", "Radio altitude", "1,000 ft"], ["10:36:36", "Touchdown", "155 KIAS / 149 kt groundspeed"], ["10:37:20", "Groundspeed", "0 kt"]] }] },
  "CVR-01": { sections: [{ heading: "Full cockpit voice recorder transcript", kind: "pre", content: CASE_001_FULL_CVR_TRANSCRIPT }] },
  "WX-01": { sections: [{ heading: "Airport observations", kind: "table", columns: ["Observation", "Value"], rows: [["Light", "Daylight"], ["Visibility", "> 10 km"], ["Wind", "Light headwind; approximately 6 kt"], ["Runway surface", "Dry"], ["Significant weather", "None reported"]] }] },
  "ATC-01": { sections: [{ heading: "Relevant communications", kind: "table", columns: ["Sequence", "Transmission summary"], rows: [["Return request", "BlueWing 96 requests an expedited return to Hobart."], ["Controller support", "Vectors and landing support provided for Runway 12."], ["Approach", "Aircraft remains high and fast until late in the approach."], ["After landing", "Emergency services are advised of the runway excursion."]] }] },
  "INT-01": { sections: [{ heading: "Crew statement extract", kind: "table", columns: ["Topic", "Crew account"], rows: [["Warnings", "Multiple abnormal indications appeared after takeoff."], ["Workload", "Crew describe a rapidly increasing workload."], ["Go-around", "Crew believed a go-around would be unsafe."], ["Status", "Subjective account; technical feasibility remains to be assessed."]] }] },
  "WRK-00": { sections: [{ heading: "Photograph log", kind: "table", columns: ["Area", "Observed condition"], rows: [["Right main landing gear", "Substantial impact damage"], ["Lower fuselage", "Abrasion and structural damage"], ["Runway/overrun", "Aircraft crossed paved surface into unpaved ground"], ["Fire damage", "None visible"]] }] },
  "REF-05": { sections: [{ heading: "Hydraulic system reference", kind: "table", columns: ["System/component", "Function in the aircraft"], rows: [["Green system", "Supplies relevant landing-gear and other hydraulic functions."], ["Yellow system", "Independent hydraulic circuit with its own reservoir and pump."], ["Blue system", "Separate hydraulic system; not the initiating system in this case."], ["PTU", "Transfers mechanical power between green and yellow systems; it does not transfer fluid."], ["Reservoir", "Stores hydraulic fluid for the associated system."]] }] },
  "REF-04": { sections: [{ heading: "Procedure extract", kind: "table", columns: ["Situation", "Procedure principle"], rows: [["Hydraulic abnormality", "Identify the affected system and complete the applicable abnormal checklist."], ["Hydraulic overheat", "Monitor temperature and follow the specified isolation/overheat procedure."], ["Unstable approach", "Discontinue the approach and go around when the stabilised criteria are not met."], ["Landing configuration", "Confirm gear, braking, spoilers, and thrust-reverser status before landing."]] }] },
  "REF-12": { sections: [{ heading: "Landing-distance reference chart", kind: "table", columns: ["Landing mass", "Wind", "Surface", "Configuration", "Reference distance"], rows: [["58.0 t", "+5 kt", "Dry", "Normal landing", "1,180 m"], ["60.0 t", "+5 kt", "Dry", "Normal landing", "1,240 m"], ["62.0 t", "+5 kt", "Dry", "Normal landing", "1,310 m"], ["60.0 t", "0 kt", "Dry", "Reduced stopping capability", "1,520 m"]] }, { heading: "Flight 96 planning inputs", kind: "table", columns: ["Input", "Value"], rows: [["Estimated landing mass", "60.8 t"], ["Runway available", "2,251 m"], ["Runway condition", "Dry"], ["Touchdown reference", "Approximately 1,000 m beyond threshold"], ["Runway remaining at touchdown", "Approximately 1,251 m"]] }, { heading: "Chart note", kind: "text", content: "These are fictionalised case reference values for investigation gameplay. They are not certified Airbus performance data." }] },
  "MNT-01": { sections: [{ heading: "Technical log entries", kind: "table", columns: ["Sector/date", "Entry", "Status"], rows: [["Previous sector", "No hydraulic-system defect reported", "Closed / no action"], ["Previous sector", "No abnormal PTU report", "No defect recorded"], ["Departure sector", "No landing-gear or brake defect carried", "Released"], ["Departure release", "Aircraft accepted for Flight 96", "Signed"]] }, { heading: "Record note", kind: "text", content: "A clear technical log does not exclude a defect that developed after departure or was not detectable during the recorded checks." }] },
  "MNT-08": { sections: [{ heading: "Configuration record", kind: "table", columns: ["Item", "Flight 96 configuration"], rows: [["Aircraft", "A320-232"], ["PTU protection standard", "Earlier configuration"], ["Later protective modification", "Not installed"], ["Configuration source", "Aircraft modification records"]] }] },
  "ATC-03": { sections: [{ heading: "Processed radar track", kind: "table", columns: ["Track point", "Altitude", "Groundspeed", "Observation"], rows: [["Return initiated", "1,700 ft", "181 kt", "Turn back toward Hobart"], ["Descent established", "1,400 ft", "180 kt", "Compressed descent"], ["Final approach", "500 ft", "169 kt", "Above nominal path"], ["Late final", "100 ft", "163 kt", "High and fast"], ["Touchdown", "0 ft", "149 kt", "Runway 12"]] }] },
  "WRK-09": { sections: [{ heading: "Landing-gear and brake examination", kind: "table", columns: ["Item", "Finding"], rows: [["Main landing gear", "Impact and overload damage consistent with excursion"], ["Brakes", "Post-event damage; no primary pre-landing failure identified"], ["Anti-skid", "Examination limited by impact damage"], ["Spoilers", "Post-event condition recorded for performance reconstruction"], ["Thrust reversers", "Post-event condition recorded; both engines remained operative"]] }] },
  "SYS-07": { sections: [{ heading: "Hydraulic examination", kind: "table", columns: ["Component/indication", "Finding"], rows: [["Green reservoir", "Depleted"], ["Right main-gear-door hose", "Ruptured flexible hose at installation"], ["Green circuit", "Fluid-loss path consistent with hose rupture"], ["PTU", "Mechanically intact on examination"], ["Yellow circuit", "Heat exposure and subsequent isolated supply"]] }, { heading: "Examination limitation", kind: "text", content: "Post-event testing cannot reproduce every in-flight condition. The examination identifies the damaged component and system condition; laboratory testing addresses the material mechanism." }] },
  "DAT-01": { sections: [{ heading: "Additional recorder parameters", kind: "table", columns: ["Local time", "Parameter", "Value"], rows: [["10:23:18", "Green hydraulic pressure", "Begins decreasing"], ["10:23:25", "Gear retraction", "Not complete"], ["10:24:40", "Yellow hydraulic temperature", "Increasing"], ["10:25:31", "Yellow overheat caution", "Presented"], ["10:27:05", "PTU", "Selected OFF"], ["10:27:40", "Yellow pressure", "Low"], ["10:28:11", "Engines", "Both operating"], ["10:36:36", "Touchdown", "155 KIAS / 149 kt groundspeed"]] }] },
  "DAT-02": { sections: [{ heading: "Detailed recorder extract", kind: "table", columns: ["Time", "Altitude", "Speed", "Key recorded state"], rows: [["10:23:12", "75 ft", "—", "Landing-gear selector UP"], ["10:23:18", "—", "—", "Green pressure decreasing"], ["10:25:17", "1,500 ft", "185 kt", "Green reservoir low caution"], ["10:25:31", "—", "—", "Yellow overheat caution"], ["10:27:40", "—", "—", "Yellow hydraulic pressure low"], ["10:30:22", "1,650 ft", "174 kt", "All landing gear down and locked"], ["10:36:36", "0 ft", "155 KIAS", "Touchdown"], ["10:37:20", "0 ft", "0 kt", "Aircraft stopped"]] }] },
  "APT-04": { sections: [{ heading: "Runway friction measurements", kind: "table", columns: ["Runway segment", "Measured friction", "Condition"], rows: [["0–500 m", "0.78", "Dry / serviceable"], ["500–1,000 m", "0.76", "Dry / serviceable"], ["1,000–1,500 m", "0.75", "Dry / serviceable"], ["1,500–2,000 m", "0.77", "Dry / serviceable"]] }, { heading: "Interpretation", kind: "text", content: "The measurements do not support unusually poor runway friction as the primary explanation for the overrun." }] },
  "CMP-07": { sections: [{ heading: "Performance reconstruction", kind: "table", columns: ["Input", "Value used"], rows: [["Landing mass", "60.8 t estimate"], ["Runway", "2,251 m; dry"], ["Wind", "Light headwind; approximately 6 kt"], ["Touchdown point", "Approximately 1,000 m beyond threshold"], ["Touchdown groundspeed", "149 kt"], ["Stopping aids", "Recorded configuration and post-event examination"], ["Remaining runway at touchdown", "Approximately 1,251 m"]] }, { heading: "Result", kind: "table", columns: ["Assessment", "Finding"], rows: [["Touchdown location", "Materially beyond intended touchdown zone"], ["Stopping margin", "Insufficient for the observed stopping performance"], ["Confidence", "Uncertainty range reported; not false precision"]] }] },
  "LAB-05": { sections: [{ heading: "Material-property results", kind: "table", columns: ["Test area", "Result"], rows: [["Failed hose section", "Localised loss of flexibility"], ["Repeated flexing area", "Deterioration identified"], ["Undamaged comparison", "Does not show the same localised condition"], ["Failure timing", "Cannot be determined from material test alone"]] }] },
  "LAB-08": { sections: [{ heading: "Component comparison", kind: "table", columns: ["Comparison", "Observation"], rows: [["Failed flexing bend", "Surface and internal condition differences"], ["Reference hose", "No corresponding localised deterioration"], ["Detectability", "When the condition became visible cannot be established"]] }] },
  "LAB-09": { sections: [{ heading: "Specified component test", kind: "table", columns: ["Test", "Result"], rows: [["Pressure test", "Leak at identified flexing section"], ["Flex test", "Failure reproduced at the section"], ["Post-event limitation", "Test cannot independently reconstruct in-flight rupture time"]] }] },
  "CMP-06": { sections: [{ heading: "Simulator comparison", kind: "table", columns: ["Scenario observation", "Result"], rows: [["Hydraulic indications", "Rapidly increasing workload"], ["Crew task demand", "Multiple indications compete for attention"], ["Go-around", "Technically available in the tested scenario"], ["Human factors", "Workload and abnormal indications could influence the decision"]] }] }
};
