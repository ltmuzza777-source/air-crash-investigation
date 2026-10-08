# Air Crash Investigation — Evidence Request Catalogue

Status: Working design reference.
Purpose: Help plan the first case and future cases.
Scope: Additional evidence the player may request; excludes the initial evidence package.
Not included: Request durations, deadlines, costs, or scheduling.

## 1. Purpose

This catalogue defines the types of additional evidence that may be made requestable in a case.

When designing a case, use it to decide:

- What evidence exists.
- What the player receives automatically.
- What the player must request.
- Which requests help establish the accident sequence or causes.
- Which requests test alternative explanations.
- Which requests provide background without resolving the accident.

This is a library of possibilities, not a requirement to produce every item for every case.

## 2. Core Design Rules

### Case-specific availability

Only include requests appropriate to the aircraft, equipment, people, and circumstances.

A request being listed here does not mean its evidence exists in every case.

### Initial evidence is separate

Documents, recordings, or datasets already supplied to the player are not separate requests.

Additional detail from the same source may be requestable, but it must provide genuinely new material.

### Evidence, not answers

Request results should provide records, observations, statements, measurements, or test results.

They should not hand the player a completed investigation or announce the final cause.

A technical report may explain a component's condition or failure mechanism without deciding its place in the overall accident.

### Neutral request names

Request names must not reveal which theory is correct.

Use:
- Fuel-quality test.
- Engine maintenance history.
- Flight-control examination.

Avoid:
- Test the contaminated fuel.
- Find the maintenance mistake.
- Inspect the failed control cable.

### Useful does not always mean incriminating

Evidence may:

- Support an explanation.
- Contradict an explanation.
- Narrow the possible explanations.
- Establish the sequence of events.
- Provide background.
- Be non-conclusive.
- Be unrelated to the accident's cause.

An apparently normal result can be useful if it helps rule out a plausible theory.

### Meaningful request boundaries

Each selectable request should represent a sensible evidence package or investigative action.

Avoid both extremes:

- One request that reveals almost the entire case.
- Many tiny requests needed to obtain one ordinary document package.

Some catalogue entries overlap. Case authors may combine them where appropriate.

### No other investigator solves the case

Interviews and specialist examinations may supply factual information and technical clarification.

The player remains responsible for connecting that information and making the final findings.

## 3. Catalogue Format

Each entry has:

- ID: A stable reference used during case planning.
- Request: A proposed player-facing name.
- Returns: The type of material the player receives.

IDs are organisational references, not a requirement for how requests appear in the interface.

The exact request wording and returned documents can be adapted to each case.

## 4. Aircraft Records and Maintenance

| ID | Request | Returns |
|---|---|---|
| MNT-01 | Aircraft technical log | Recorded defects, maintenance entries, inspections, and return-to-service information. |
| MNT-02 | Recent maintenance work package | Job sheets, work descriptions, component changes, and checks associated with recent maintenance. |
| MNT-03 | Historical maintenance records | Earlier repairs, inspections, and relevant maintenance history. |
| MNT-04 | Deferred defect records | Unresolved recorded defects and any associated operating restrictions. |
| MNT-05 | Component installation history | Records of when specified components were fitted, removed, or replaced. |
| MNT-06 | Component service history | Operating hours, cycles, overhaul records, and previous repairs for specified components. |
| MNT-07 | Maintenance compliance records | Documentation of required inspections or maintenance actions and their completion status. |
| MNT-08 | Aircraft modification records | Details of changes to aircraft equipment, systems, or configuration. |
| MNT-09 | Previous crew defect reports | Faults or unusual behaviour reported on earlier flights. |
| MNT-10 | Maintenance handover records | Information passed between maintenance personnel or shifts. |
| MNT-11 | Post-maintenance test records | Results of checks performed following maintenance. |

## 5. Wreckage and Accident Scene

| ID | Request | Returns |
|---|---|---|
| WRK-01 | Accident-site survey | Site observations, terrain information, measurements, and a scene layout. |
| WRK-02 | Wreckage distribution map | Locations of major aircraft sections and recovered debris. |
| WRK-03 | Detailed wreckage photographs | Images of specified components or areas, with factual captions where needed. |
| WRK-04 | Missing-wreckage search | Search findings, identified objects, and any remaining gaps in recovery. |
| WRK-05 | Underwater wreckage recovery | Recovery records and recovered material from a specified submerged location. |
| WRK-06 | Specific component recovery | Recovery of an identified component or aircraft section. |
| WRK-07 | Airframe structural examination | Observations of structural condition, damage, and attachment points. |
| WRK-08 | Flight-control examination | Condition of control surfaces, cables, linkages, actuators, and connections. |
| WRK-09 | Landing-gear and brake examination | Component condition, damage, and relevant examination findings. |
| WRK-10 | Impact-mark examination | Documented marks on terrain, obstacles, runway surfaces, or aircraft parts. |
| WRK-11 | Fire and heat-damage examination | Observations and analysis of fire-related damage. |
| WRK-12 | Cabin and emergency-equipment examination | Relevant findings about cabin structures, restraints, exits, and emergency equipment. |

Case-design note: Recovery and examination may be separate requests when that distinction matters. Their dependency must be recorded during case planning.

## 6. Engines, Propellers, and Aircraft Systems

| ID | Request | Returns |
|---|---|---|
| SYS-01 | Engine teardown examination | Internal engine condition, damage, and examination findings. |
| SYS-02 | Engine component testing | Functional test results for specified engine components. |
| SYS-03 | Propeller examination | Blade, hub, and mechanism condition and relevant damage findings. |
| SYS-04 | Fuel-system examination | Condition of tanks, lines, valves, filters, and associated equipment. |
| SYS-05 | Fuel-pump or fuel-control testing | Test results for a specified pump or fuel-control component. |
| SYS-06 | Lubrication-system examination | Condition of oil-system components and relevant findings. |
| SYS-07 | Hydraulic-system examination | Condition and test findings for relevant hydraulic components. |
| SYS-08 | Electrical-system examination | Wiring, connections, protection devices, and power-distribution findings. |
| SYS-09 | Battery and power-supply testing | Condition and performance results for specified power sources. |
| SYS-10 | Pneumatic or pressurisation-system examination | Relevant component condition and test results. |
| SYS-11 | Pitot-static system examination | Condition of pressure sensing equipment, lines, and connections. |
| SYS-12 | Air-data sensor testing | Measurements and functional test results for specified sensors. |
| SYS-13 | Instrument and display testing | Findings about relevant instruments or cockpit displays. |
| SYS-14 | Autopilot or flight-control computer examination | Relevant stored information, configuration, and examination results. |
| SYS-15 | Navigation-equipment testing | Functional findings for specified navigation equipment. |
| SYS-16 | Ice-protection system examination | Condition and test results for relevant ice-protection equipment. |
| SYS-17 | Warning-system examination | Findings about specified warning sensors, logic, or annunciators. |
| SYS-18 | Fire-detection or suppression-system examination | Relevant equipment condition and test results. |

Case-design note: Offer only systems actually fitted to the fictional aircraft. Broad system examinations may be narrowed to a specific component.

## 7. Laboratory Examinations

| ID | Request | Returns |
|---|---|---|
| LAB-01 | Fuel-quality test | Sample identification, test results, and relevant quality findings. |
| LAB-02 | Oil or fluid analysis | Findings about a specified fluid sample. |
| LAB-03 | Contamination analysis | Identification and analysis of unwanted material in a specified sample. |
| LAB-04 | Metal fracture examination | Fracture-surface observations and findings about the failure mechanism. |
| LAB-05 | Material-property testing | Results concerning the characteristics of a specified material or component. |
| LAB-06 | Corrosion examination | Findings about corrosion location, extent, and condition. |
| LAB-07 | Residue or deposit analysis | Identification and examination of recovered residue or deposits. |
| LAB-08 | Comparison with an undamaged component | Documented differences between the examined item and a reference component. |
| LAB-09 | Manufacturer-specified component test | Test method, results, and relevant limitations. |

Case-design note: Identify where each sample came from. Do not treat a sample with uncertain origin as unquestionably representative of the aircraft.

## 8. Additional Recorded and Digital Evidence

| ID | Request | Returns |
|---|---|---|
| DAT-01 | Additional flight-recorder parameters | Recorded parameters not included in the initial dataset. |
| DAT-02 | Detailed recorder extract | A more detailed extract from an available recording interval. |
| DAT-03 | Recorder recovery or data extraction | Recovered data and information about its completeness or condition. |
| DAT-04 | Additional cockpit voice transcript | Available transcript sections not already supplied. |
| DAT-05 | GPS-device data | Recorded positions, times, routes, or other available device information. |
| DAT-06 | Onboard camera footage | Available video from a relevant onboard camera. |
| DAT-07 | Aircraft system fault logs | Stored faults, events, or diagnostic records. |
| DAT-08 | Engine-monitoring data | Available recorded engine information from a separate monitoring source. |
| DAT-09 | Electronic flight bag records | Relevant flight-planning documents, settings, or recorded information. |
| DAT-10 | Aircraft operational messages | Relevant recorded messages exchanged with the operator or other services. |
| DAT-11 | Airport surveillance footage | Available footage covering relevant locations or events. |
| DAT-12 | External photographs or video | Relevant media supplied by passengers, witnesses, or other sources. |

Case-design note: A request cannot create data that was never recorded. More detailed extracts must remain consistent with the fictional recording source.

## 9. Air Traffic Control and Communications

| ID | Request | Returns |
|---|---|---|
| ATC-01 | ATC communications recording or transcript | Relevant controller–pilot communications. |
| ATC-02 | ATC controller interview | A factual account of observations, instructions, and actions. |
| ATC-03 | Radar track data | Available surveillance returns or processed track information. |
| ATC-04 | ADS-B track data | Available transmitted position and related track information. |
| ATC-05 | Clearance and instruction records | Recorded clearances, instructions, and relevant amendments. |
| ATC-06 | Controller logs and handover records | Relevant position logs and information exchanged at handover. |
| ATC-07 | ATC equipment status records | Relevant outages, faults, maintenance, or service limitations. |
| ATC-08 | Nearby aircraft communications | Relevant communications involving other aircraft. |
| ATC-09 | Airport operational communications | Relevant communications involving airport operations personnel. |
| ATC-10 | Relevant ATC procedures | Procedures applicable to the circumstances under investigation. |

## 10. Weather and Environmental Conditions

| ID | Request | Returns |
|---|---|---|
| WX-01 | Airport weather observations | Relevant observations at departure, destination, or nearby airports. |
| WX-02 | Relevant weather forecasts | Forecast information available for the flight. |
| WX-03 | Weather radar imagery | Relevant imagery and explanatory information. |
| WX-04 | Satellite weather imagery | Relevant satellite observations. |
| WX-05 | Pilot weather reports | Reports from aircraft operating in the relevant area. |
| WX-06 | Winds and temperatures along the route | Available atmospheric information for relevant positions and altitudes. |
| WX-07 | Detailed visibility and cloud information | Additional observations concerning visibility and cloud conditions. |
| WX-08 | Icing-condition analysis | Evidence and analysis concerning possible icing conditions. |
| WX-09 | Turbulence-condition analysis | Evidence and analysis concerning possible turbulence. |
| WX-10 | Thunderstorm and lightning information | Relevant storm observations and lightning records. |
| WX-11 | Local weather-station records | Available observations from a specified station. |
| WX-12 | Specialist meteorological analysis | A targeted analysis answering a defined weather question. |
| ENV-01 | Terrain and obstacle information | Relevant terrain, elevation, and obstacle details. |
| ENV-02 | Lighting and visibility reconstruction | Relevant information about illumination and viewing conditions. |

## 11. Flight Planning, Loading, and Ground Handling

| ID | Request | Returns |
|---|---|---|
| OPS-01 | Filed flight plan | The submitted route and associated flight-plan information. |
| OPS-02 | Operational flight plan or navigation log | Planned route, calculations, and recorded amendments where available. |
| OPS-03 | Dispatch or flight-release documents | Relevant preparation and release documentation. |
| OPS-04 | Fuel planning calculations | Recorded assumptions, calculations, and planned fuel quantities. |
| OPS-05 | Refuelling records | Recorded fuel uplift, supplier information, and associated documentation. |
| OPS-06 | Weight-and-balance calculations | Recorded loading calculations and aircraft balance information. |
| OPS-07 | Passenger and baggage loading records | Recorded numbers, weights, and loading arrangements. |
| OPS-08 | Cargo manifest | Recorded cargo contents, weights, and descriptions. |
| OPS-09 | Cargo loading and restraint records | Loading positions, restraint information, and relevant checks. |
| OPS-10 | Dangerous-goods documentation | Relevant declarations and handling information. |
| OPS-11 | Ground-handling records | Relevant servicing and handling documentation. |
| OPS-12 | De-icing or anti-icing records | Treatment details, products used, and recorded checks. |
| OPS-13 | Pre-flight inspection records | Available documentation of pre-flight checks. |
| OPS-14 | Aircraft turnaround records | Relevant activities between the preceding flight and departure. |

## 12. Crew Qualifications and Human Performance

| ID | Request | Returns |
|---|---|---|
| HUM-01 | Pilot licence and qualification records | Relevant qualifications, endorsements, and validity information. |
| HUM-02 | Aircraft-type training records | Relevant initial or conversion training documentation. |
| HUM-03 | Recurrent training and checking records | Relevant periodic training and assessment results. |
| HUM-04 | Simulator assessment records | Records of relevant simulated scenarios and assessments. |
| HUM-05 | Flight experience and logbook extracts | Relevant experience, recency, and flight history. |
| HUM-06 | Crew duty roster | Scheduled and recorded work assignments. |
| HUM-07 | Work-and-rest history | Available information about recent duty and rest periods. |
| HUM-08 | Recent flight assignments | Relevant flights and operational exposure before the accident. |
| HUM-09 | Crew pairing information | Information about crew roles and experience working together. |
| HUM-10 | Relevant medical information | Case-relevant medical findings or records. |
| HUM-11 | Toxicology report | Available test findings and their stated limitations. |
| HUM-12 | Crew interview | A surviving crew member's account of relevant events. |
| HUM-13 | Instructor or examiner interview | Factual information about relevant training or assessments. |

Case-design note: Qualifications, fatigue indicators, or medical findings do not automatically establish causation. The player must connect them to the accident evidence.

## 13. Operator and Organisational Records

| ID | Request | Returns |
|---|---|---|
| ORG-01 | Operator procedures | Relevant operating procedures and requirements. |
| ORG-02 | Operational notices and bulletins | Relevant instructions or information distributed within the operator. |
| ORG-03 | Training policies and materials | Relevant training expectations and course content. |
| ORG-04 | Maintenance procedures | Relevant organisational maintenance processes and instructions. |
| ORG-05 | Internal safety reports | Relevant reported concerns, hazards, or events. |
| ORG-06 | Similar defect or event reports | Earlier reports involving comparable equipment or circumstances. |
| ORG-07 | Safety audit findings | Relevant findings from internal or external audits. |
| ORG-08 | Corrective-action records | Actions taken or proposed in response to identified issues. |
| ORG-09 | Operational-control records | Relevant dispatch decisions and operational coordination. |
| ORG-10 | Relevant internal communications | Case-relevant messages, correspondence, or meeting records. |
| ORG-11 | Management or operational staff interview | Factual clarification of relevant decisions and practices. |
| ORG-12 | Regulatory oversight records | Relevant inspections, findings, and follow-up documentation. |

## 14. Technical Reference Material

| ID | Request | Returns |
|---|---|---|
| REF-01 | Aircraft operating manual extracts | Relevant sections of the aircraft's operating documentation. |
| REF-02 | Aircraft limitations | Applicable operating limits. |
| REF-03 | Normal procedures | Relevant standard operating steps. |
| REF-04 | Abnormal and emergency procedures | Relevant procedures for faults or emergencies. |
| REF-05 | Aircraft system description | Explanation of the design and operation of a specified system. |
| REF-06 | Maintenance manual extracts | Relevant inspection, servicing, or repair instructions. |
| REF-07 | Troubleshooting guide | Relevant diagnostic procedures. |
| REF-08 | Wiring or system diagrams | Relevant schematics and connections. |
| REF-09 | Component design drawings | Relevant component dimensions and design details. |
| REF-10 | Manufacturer service information | Relevant bulletins, notices, or technical information. |
| REF-11 | Relevant airworthiness directives | Applicable requirements concerning identified safety issues. |
| REF-12 | Aircraft performance charts | Relevant performance data and stated conditions. |
| REF-13 | Manufacturer technical clarification | A factual response to a specific technical question. |

Open decision: Some reference material may eventually be freely accessible rather than consuming an evidence request. Its inclusion here preserves the option; it does not settle that interface decision.

## 15. Interviews and Witness Material

| ID | Request | Returns |
|---|---|---|
| INT-01 | Flight crew interview | A surviving flight crew member's account. |
| INT-02 | Cabin crew interview | Relevant cabin observations and actions. |
| INT-03 | Maintenance engineer interview | Clarification of relevant maintenance work or observations. |
| INT-04 | Ground-handler interview | Relevant loading, servicing, or turnaround observations. |
| INT-05 | Dispatcher interview | Relevant planning and operational-control information. |
| INT-06 | Refuelling staff interview | Relevant information about fuel supply and refuelling activity. |
| INT-07 | Airport operations staff interview | Relevant airport conditions and operational observations. |
| INT-08 | Emergency responder interview | Relevant scene observations and response actions. |
| INT-09 | Passenger interview | Relevant passenger observations; future expansion. |
| INT-10 | Ground eyewitness interview | Relevant external observations; future expansion. |
| INT-11 | Targeted follow-up interview | Clarification of a specific statement, discrepancy, or observation. |

Case-design note: ATC-02, HUM-12, and ORG-11 overlap with this category. They are alternate catalogue references, not automatic additional requests for the same interview.

## 16. Airport and Runway Information

| ID | Request | Returns |
|---|---|---|
| APT-01 | Airport layout and charts | Relevant runways, taxiways, facilities, and published information. |
| APT-02 | Runway inspection records | Recorded inspections and identified conditions. |
| APT-03 | Runway surface-condition information | Relevant contamination, standing water, or surface observations. |
| APT-04 | Runway friction test results | Available measurements and associated test conditions. |
| APT-05 | Runway lighting status | Relevant serviceability and configuration information. |
| APT-06 | Navigation-aid status records | Relevant faults, outages, or maintenance information. |
| APT-07 | Relevant NOTAMs | Published operational notices applicable to the flight. |
| APT-08 | Airport maintenance records | Relevant work affecting the operating environment. |
| APT-09 | Wildlife hazard reports | Relevant wildlife observations and recorded events. |
| APT-10 | Runway or taxiway activity records | Relevant movements, inspections, or vehicle activity. |
| APT-11 | Airport emergency-response records | Relevant response logs and documented observations. |

## 17. Comparative Evidence and Specialist Tests

| ID | Request | Returns |
|---|---|---|
| CMP-01 | Similar occurrence records | Information about relevant earlier incidents or accidents. |
| CMP-02 | Similar component failure records | Relevant previous failures and examination findings. |
| CMP-03 | Fleet defect history | Recorded defects involving comparable aircraft or equipment. |
| CMP-04 | Comparable aircraft maintenance records | Relevant records from other aircraft for comparison. |
| CMP-05 | Manufacturer test results | Available results addressing a relevant technical issue. |
| CMP-06 | Targeted simulator test | Test conditions, observed behaviour, results, and limitations. |
| CMP-07 | Aircraft performance reconstruction | Calculations or modelling addressing a defined performance question. |
| CMP-08 | Targeted specialist examination | Findings addressing a specific question not covered by another request. |

Case-design note: Similarity is not proof. Comparative material should help the player evaluate a theory, not imply that the current accident must share the same cause.

## 18. Case Planning Worksheet

Create one worksheet entry for each request selected for a case.

### Request template

- Case request ID:
- Catalogue ID or IDs:
- Player-facing request name:
- What the player is asking for:
- Why this request is applicable:
- Returned documents, data, images, or statements:
- Source of the returned information:
- Scope of the returned material:
- Prerequisites or evidence dependencies:
- Already supplied material that must not be duplicated:
- Relevant facts contained in the result:
- Theory or theories it can test:
- What it does not establish:
- Missing information or limitations:
- Connections to other evidence:
- Author-only relevance classification:
- Content production status:

### Author-only relevance classifications

A request may have more than one classification:

- Causal: Helps establish a cause or contributing factor.
- Chronological: Helps establish the sequence of events.
- Corroborating: Independently supports another finding.
- Exclusionary: Helps rule out an alternative explanation.
- Contextual: Provides relevant background.
- Non-conclusive: Does not resolve the question being tested.
- Unrelated: Does not materially help explain the accident.

These classifications are for case authors. They should not be shown to the player.

## 19. Using the Catalogue to Design the First Case

1. Define the accident sequence and underlying causes.
2. Define plausible alternative explanations.
3. Decide what the player receives at the start and automatically later.
4. Select requestable evidence that supports, challenges, or distinguishes the explanations.
5. Add appropriate background and non-conclusive material.
6. Check that request results agree with one another unless a discrepancy is intentional.
7. Record dependencies between recovery, examination, testing, and follow-up requests.
8. Confirm that the player can reach a defensible conclusion from available evidence.
9. Check that no request title or document accidentally reveals the intended answer.
10. Review timing and deadline balance separately.

Do not build a case merely by filling every category. Select evidence because it belongs in that scenario.

## 20. Decisions Still Open

- Which catalogue entries will appear in the first case.
- Whether requests are chosen from a full visible menu or revealed progressively.
- Whether requests need to specify a component, date range, person, or question.
- Which technical references are freely available.
- How prerequisites are presented to the player.
- Whether unavailable records can be requested and return an explanation of their absence.
- How follow-up requests and interviews work.
- Which evidence types are feasible for the initial implementation.

## 21. Catalogue Expansion

This catalogue may be extended when a case requires evidence not already listed.

New entries should:

- Represent a distinct, meaningful investigative action.
- Use neutral wording.
- State what material is returned.
- Avoid duplicating an existing request without a clear reason.
- Preserve the player's responsibility for the final conclusion.
