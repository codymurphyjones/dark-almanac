import { useMemo } from "react";
import { buildCurve, calculateStatCurve } from "./CalculateCurve";

// Curve Definitions
let magicPowerCurve = buildCurve([0, 1], [100, 0]);

let magicPowerBonusCurve = buildCurve(
  [0, 0],
  [1, 10],
  [5, 5],
  [15, 2.5],
  [21, 2],
  [40, 1],
  [50, 0.5],
  [100, 0]
);

let magicResistCurve = buildCurve(
  [0, 4],
  [5, 3],
  [35, 2],
  [55, 1],
  [65, 0.5],
  [91, -1],
  [92, 1],
  [94, 0.5],
  [100, 0]
);

let magicDamageReductionCurve = buildCurve(
  [-300, 2],
  [-15, 1],
  [10, 0.5],
  [19, 0.4],
  [30, 0.3],
  [40, 0.2],
  [50, 0.1],
  [100, 0.2],
  [150, 0.3],
  [250, 0.2],
  [350, 0.1],
  [500, 0]
);

const spellCastingCurve = buildCurve(
  [0, 0],
  [1, 5],
  [19, 3],
  [30, 4],
  [40, 3],
  [45, 2],
  [100, 0]
);

let buffDurationCurve = buildCurve(
  [0, 10],
  [5, 5],
  [7, 3],
  [11, 2],
  [15, 1],
  [50, 0.5],
  [100, 0]
);

const debuffDurationCurve = buildCurve(
  [0, 10],
  //[1, 10],
  [5, 8],
  [7, 4],
  [10, 3],
  [15, 2.5],
  [21, 2],
  [40, 1],
  [50, 0.5],
  [100, 0]
);

// Curve Calculations
let calculateMagicDamageReduction = calculateStatCurve(
  -595,
  magicDamageReductionCurve
);
let calculateMagicResist = calculateStatCurve(
  -20,
  magicResistCurve,
  Math.floor
);

let calculateMagicPower = calculateStatCurve(0, magicPowerCurve);
let calculateMagicPowerBonus = calculateStatCurve(-90, magicPowerBonusCurve);

let calculateBuffDuration = calculateStatCurve(-80, buffDurationCurve);
let calculateDebuffDuration = calculateStatCurve(-90, debuffDurationCurve);
let calculateSpellCasting = calculateStatCurve(-93, spellCastingCurve);

//Linear Calculations
function calculateMemoryCapacityFromKnowledge(knowledge: number) {
  return knowledge - 6;
}

function calculateMemoryCapacity(
  knowledge: number,
  memCapBonus: number,
  addMemCap: number
) {
  return (
    Math.ceil(
      calculateMemoryCapacityFromKnowledge(knowledge) * (1 + memCapBonus)
    ) + addMemCap
  );
}

function calculateMemoryCapityFromBonus(bonus: number, knowledge: number) {
  return (
    Math.ceil(calculateMemoryCapacityFromKnowledge(knowledge) * (1 + bonus)) -
    calculateMemoryCapacityFromKnowledge(knowledge)
  );
}

// Exporting the functions
export {
  calculateMagicPower,
  calculateMagicPowerBonus,
  calculateMagicResist,
  calculateMagicDamageReduction,
  calculateBuffDuration,
  calculateDebuffDuration,
  calculateSpellCasting,
  calculateMemoryCapacityFromKnowledge,
  calculateMemoryCapacity,
  calculateMemoryCapityFromBonus,
};
