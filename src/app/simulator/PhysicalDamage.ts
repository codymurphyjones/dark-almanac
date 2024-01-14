import { buildCurve, calculateStatCurve } from "./CalculateCurve";

// Curve Definitions
let armorArr = buildCurve(
  [-300, 2],
  [-3, 1],
  [22, 0.5],
  [31, 0.4],
  [42, 0.3],
  [52, 0.2],
  [62, 0.1],
  [112, 0.2],
  [175, 0.3],
  [230, 0.2],
  [317, 0.1],
  [353, 0.05],
  [368, 0.03],
  [369, 0.07],
  [370, 0.05],
  [428, -0.075],
  [429, 0.025],
  [450, 0.02]
);

let physicalPower = buildCurve([0, 1], [100, 0]);

let physicalPowerBonusCurve = buildCurve(
  [0, 10],
  [5, 5],
  [7, 3],
  [11, 2],
  [15, 1],
  [50, 0.5],
  [100, 0]
);

// Curve Calculations
let calculatePhysicalDamageReduction = calculateStatCurve(
  -619,
  armorArr,
  Math.floor
);
let calculatePhysicalPowerFromStrength = calculateStatCurve(0, physicalPower);
let calculatePhysicalPowerBonus = calculateStatCurve(
  -80,
  physicalPowerBonusCurve
);

// Exporting the functions
export {
  calculatePhysicalDamageReduction,
  calculatePhysicalPowerFromStrength,
  calculatePhysicalPowerBonus,
};
