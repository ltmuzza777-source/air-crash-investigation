# Case 001 — Basic Recorded-Data Package

Status: Fictional working draft.
Availability: Proposed initial evidence package (not requestable).
Time standard: Local time, matching `CASE_001_COCKPIT_TRANSCRIPT.md`.

Values are selected samples, not a complete recorder download. Intermediate samples are omitted.

## 1. Speed record

Airborne values are indicated airspeed. Ground-roll values are groundspeed, identified separately.

| Time | Speed | Measurement |
|---|---:|---|
| 10:22:18 | 0 knots | Groundspeed |
| 10:22:43 | 100 knots | Indicated airspeed |
| 10:22:56 | 139 knots | Indicated airspeed |
| 10:22:59 | 143 knots | Indicated airspeed |
| 10:23:07 | 151 knots | Indicated airspeed |
| 10:24:28 | 178 knots | Indicated airspeed |
| 10:25:17 | 185 knots | Indicated airspeed |
| 10:27:49 | 181 knots | Indicated airspeed |
| 10:30:22 | 174 knots | Indicated airspeed |
| 10:33:42 | 180 knots | Indicated airspeed |
| 10:34:28 | 176 knots | Indicated airspeed |
| 10:35:29 | 169 knots | Indicated airspeed |
| 10:36:00 | 163 knots | Indicated airspeed |
| 10:36:24 | 159 knots | Indicated airspeed |
| 10:36:36 | 155 knots | Indicated airspeed at touchdown |
| 10:36:36 | 149 knots | Groundspeed at touchdown |
| 10:36:48 | 90 knots | Groundspeed |
| 10:36:52 | 75 knots | Groundspeed |
| 10:36:57 | 60 knots | Groundspeed |
| 10:37:02 | 50 knots | Groundspeed |
| 10:37:10 | 40 knots | Groundspeed |
| 10:37:14 | 23 knots | Groundspeed |
| 10:37:20 | 0 knots | Groundspeed |

## 2. Altitude record

Radio altitude: height above terrain directly beneath the aircraft, in feet. Ground samples are simplified to zero for this game extract.

| Time | Radio altitude |
|---|---:|
| 10:22:18 | 0 feet |
| 10:23:07 | 35 feet |
| 10:23:12 | 75 feet |
| 10:24:28 | 1,050 feet |
| 10:25:17 | 1,500 feet |
| 10:27:49 | 1,700 feet |
| 10:30:22 | 1,650 feet |
| 10:33:42 | 1,400 feet |
| 10:34:28 | 1,000 feet |
| 10:35:29 | 500 feet |
| 10:36:00 | 100 feet |
| 10:36:22 | 50 feet |
| 10:36:24 | 40 feet |
| 10:36:26 | 30 feet |
| 10:36:28 | 20 feet |
| 10:36:32 | 8 feet |
| 10:36:36 | 0 feet — touchdown |
| 10:37:20 | 0 feet — aircraft stopped |

## 3. Warning and event extract

This is a simplified combined evidence extract, not a claim that the flight-data recorder stores every ECAM message as text. Descriptions use plain language; exact aircraft message labels remain to be verified.

| Time | Recorded indication or event | Classification |
|---|---|---|
| 10:09:42 | Hydraulic pressures within normal range | System status |
| 10:23:12 | Landing-gear selector moved to UP | Selection |
| 10:23:18 | Green hydraulic pressure begins decreasing | System indication |
| 10:23:25 | Landing-gear retraction not complete | Configuration status |
| 10:24:40 | Yellow hydraulic temperature increasing | System indication |
| 10:25:17 | Green reservoir low-level caution presented | Crew alert |
| 10:25:31 | Yellow reservoir overheat caution presented | Crew alert |
| 10:27:05 | PTU selected OFF | Selection |
| 10:27:16 | Green engine-driven pump selected OFF | Selection |
| 10:27:28 | Yellow engine-driven pump selected OFF | Selection |
| 10:27:40 | Yellow hydraulic pressure low | System indication |
| 10:27:49 | Blue hydraulic pressure within normal range | System status |
| 10:28:11 | Both engines operating; no engine-failure indication | System status |
| 10:30:22 | All landing gears indicate down and locked | Configuration status |
| 10:31:38 | Yellow reservoir overheat indication remains present | System status |
| 10:36:36 | Air-to-ground transition | Recorded event |
| 10:37:14 | Acceleration transient | Recorded event |
| 10:37:20 | Groundspeed reaches zero | Recorded event |

---

## Author-only review notes (remove before player release)

- The data does not identify the ruptured hose or explain its failure.
- System conditions and cockpit warning presentation are distinguished.
- Speed values are provisional scenario values, not validated A320 performance figures. Approach target speed and landing mass still need establishing.
- Warning/event entries are scenario placeholders pending confirmation of actual recording capability.
- The sampled landing speeds need a continuous distance reconstruction before the touchdown point and overrun location are fixed.
- Hydraulic effects, target approach speed, and stopping performance remain unverified.
- Final-callout timestamps in the cockpit transcript were already adjusted to agree with the altitude record above.
