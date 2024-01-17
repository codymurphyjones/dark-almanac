import {
  calculateStatCurve,
  buildCurve,
  calculateLoggedStatCurve,
} from "./CalculateCurve";

// Curve Definitions
const baseHealthCurve = buildCurve(
  [0, 3],
  [10, 2],
  [50, 1],
  [75, 0.5],
  [100, 0]
);

let healthRecoveryCurve = buildCurve(
  [0, 5],
  [5, 3],
  [15, 7],
  [25, 5],
  [35, 2],
  [84, 1],
  [85, 3],
  [86, 2],
  [100, 0]
);

let spellRecoveryCurve = buildCurve(
  [0, 1.5],
  [28, 5],
  [35, 2],
  [84, 1],
  [85, 3],
  [86, 2],
  [100, 0]
);

let agilityCurve = buildCurve([0, 2], [15, 1], [45, 0.5], [65, 0.33], [100, 0]);
// Curve Calculations
let calculateBaseHealth = calculateLoggedStatCurve(
  60,
  baseHealthCurve,
  Math.ceil
);
let calculateHealthRecovery = calculateStatCurve(-55, healthRecoveryCurve);
let calculateSpellRecovery = calculateStatCurve(43, spellRecoveryCurve);
let calculateMovespeedFromAgi = calculateStatCurve(
  -30,
  agilityCurve,
  Math.floor
);

//Helpers

let calculateMaxHealthFromStrAndVigor = (str: number, vigor: number) =>
  str * 0.25 + vigor * 0.75;

// Exporting the functions
export {
  calculateBaseHealth,
  calculateHealthRecovery,
  calculateSpellRecovery,
  calculateMovespeedFromAgi,
  calculateMaxHealthFromStrAndVigor,
};
