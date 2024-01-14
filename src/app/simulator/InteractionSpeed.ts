import { calculateStatCurve, buildCurve } from "./CalculateCurve";

// Curve Definitions
const regularInteractionCurve = buildCurve(
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

let actionSpeedCurve = buildCurve(
  [0, 3],
  [10, 2],
  [13, 1],
  [25, 1.5],
  [41, 1],
  [50, 0.5],
  [100, 0]
);

let itemEquipCurve = buildCurve(
  [0, 0],
  [1, 4],
  [2, 7],
  [15, 5],
  [35, 2],
  [70, 1],
  [100, 0]
);

let manualDexterityCurve = buildCurve(
  [0, 1],
  [15, 3],
  [23, 2],
  [31, 1],
  [37, 0.5],
  [45, 0.1],
  [95, 0]
);

let magicalInteractionCurve = buildCurve(
  [0, 5],
  [15, 7],
  [25, 5],
  [35, 2],
  [84, 1],
  [85, 3],
  [86, 2],
  [100, 0]
);

let persuasivenessCurve = buildCurve([0, 1], [35, 0.5], [71, 0.25], [99, 0]);

// Curve Calculations
const calculateRegularInteraction = calculateStatCurve(
  -55,
  regularInteractionCurve
);
const calculateAction = calculateStatCurve(-38, actionSpeedCurve);
const calculateItemEquip = calculateStatCurve(-95, itemEquipCurve);
const calculateManualDexterity = calculateStatCurve(-15, manualDexterityCurve);
const calculateMagicalInteraction = calculateStatCurve(
  -75,
  magicalInteractionCurve
);
const calculatePersuasiveness = calculateStatCurve(0, persuasivenessCurve);

// Animation Speed Calculation
function calculateAnimationSpeed(input: number, length: number): number {
  return length / (1 + input);
}

function calculateActionSpeedValue(dexterity: number, agility: number) {
  return dexterity * 0.75 + agility * 0.25;
}

function calculateRegularInteratonSpeedValue(
  dexterity: number,
  resourcefulness: number
) {
  return dexterity * 0.4 + resourcefulness * 0.6;
}
// Exporting the functions
export {
  calculateRegularInteraction,
  calculateAction,
  calculateActionSpeedValue,
  calculateItemEquip,
  calculateManualDexterity,
  calculateMagicalInteraction,
  calculatePersuasiveness,
  calculateAnimationSpeed,
  calculateRegularInteratonSpeedValue,
};
