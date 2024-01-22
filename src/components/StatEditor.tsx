"use client";
import Image from "next/image";
import { Dispatch, SetStateAction, useState, useMemo } from "react";
import {
  calculateAction,
  calculateActionSpeedValue,
  calculateAnimationSpeed,
  calculateItemEquip,
  calculateMagicalInteraction,
  calculateManualDexterity,
  calculatePersuasiveness,
  calculateRegularInteraction,
  calculateRegularInteratonSpeedValue,
} from "@Lib/simulator/InteractionSpeed";
import {
  calculatePhysicalDamageReduction,
  calculatePhysicalPowerBonus,
  calculatePhysicalPowerFromStrength,
} from "@Lib/simulator/PhysicalDamage";
import {
  calculateBaseHealth,
  calculateHealthRecovery,
  calculateMaxHealthFromStrAndVigor,
  calculateMovespeedFromAgi,
  calculateSpellRecovery,
} from "@Lib//simulator/Character";
import {
  calculateBuffDuration,
  calculateDebuffDuration,
  calculateMagicDamageReduction,
  calculateMagicPower,
  calculateMagicPowerBonus,
  calculateMagicResist,
  calculateMemoryCapacity,
  calculateMemoryCapacityFromKnowledge,
  calculateSpellCasting,
} from "@Lib/simulator/MagicalDamage";

function ifNaN(
  value: string,
  fallback: number,
  callback: Dispatch<SetStateAction<number>>
) {
  let res = parseInt(value);
  if (Number.isNaN(res)) {
    callback(fallback);
  } else {
    callback(parseInt(value));
  }
}

function NumberInput(props: {
  value: number;
  updateState: Dispatch<SetStateAction<number>>;
}) {
  const { value, updateState } = props;
  return (
    <input
      className="hide-input-arrows text-black font p-1"
      type="number"
      value={value}
      onChange={(text) => {
        ifNaN(text.currentTarget.value, 0, updateState);
      }}
    />
  );
}

function useMemoizedValue<T extends (...args: any[]) => any>(
  func: T,
  ...args: Parameters<T>
): ReturnType<T> {
  return useMemo(() => func(...args), [args, func]);
}

type AttributeInput = {
  value: number;
  update: Dispatch<SetStateAction<number>>;
};

type Attributes = {
  armor: number;
  vigor: number;
  strength: number;
  agility: number;
  dexterity: number;
  will: number;
  knowledge: number;
  resourcefulness: number;
};

type AttributeInputSet = { [K in keyof Attributes]: AttributeInput };

export function useAttributeValues(): AttributeInputSet {
  const [armorState, setArmorState] = useState(0);
  const [vigor, setVigor] = useState(5);
  const [strength, setStrength] = useState(4);
  const [agility, setAgility] = useState(26);
  const [dexterity, setDexterity] = useState(25);
  const [will, setWill] = useState(10);
  const [knowledge, setKnowledge] = useState(10);
  const [resourcefulness, setResourcefulness] = useState(25);

  return {
    armor: { value: armorState, update: setArmorState },
    vigor: { value: vigor, update: setVigor },
    strength: { value: strength, update: setStrength },
    agility: { value: agility, update: setAgility },
    dexterity: { value: dexterity, update: setDexterity },
    will: { value: will, update: setWill },
    knowledge: { value: knowledge, update: setKnowledge },
    resourcefulness: { value: resourcefulness, update: setResourcefulness },
  };
}

export function StatEditor(props: { attributes: AttributeInputSet }) {
  const { attributes } = props;
  return (
    <div style={{ minWidth: "400px" }} className="flex flex-col">
      <div className="flex justify-between p-1">
        <b>Strength:</b>
        <NumberInput
          value={attributes.strength.value}
          updateState={attributes.strength.update}
        />
      </div>
      <div className="flex justify-between p-1">
        <b>Vigor:</b>
        <NumberInput
          value={attributes.vigor.value}
          updateState={attributes.vigor.update}
        />
      </div>
      <div className="flex justify-between p-1">
        <b>Agility:</b>
        <NumberInput
          value={attributes.agility.value}
          updateState={attributes.agility.update}
        />
      </div>
      <div className="flex justify-between p-1">
        <b>Dexterity:</b>
        <NumberInput
          value={attributes.dexterity.value}
          updateState={attributes.dexterity.update}
        />
      </div>
      <div className="flex justify-between p-1">
        <b>Will:</b>
        <NumberInput
          value={attributes.will.value}
          updateState={attributes.will.update}
        />
      </div>
      <div className="flex justify-between p-1">
        <b>Knowledge:</b>
        <NumberInput
          value={attributes.knowledge.value}
          updateState={attributes.knowledge.update}
        />
      </div>
      <div className="flex justify-between p-1">
        <b>Resourcefulness:</b>
        <NumberInput
          value={attributes.resourcefulness.value}
          updateState={attributes.resourcefulness.update}
        />
      </div>
      <hr />
      <div className="flex justify-between p-1">
        <b>Armor Rating:</b>
        <NumberInput
          value={attributes.armor.value}
          updateState={attributes.armor.update}
        />
      </div>
    </div>
  );
}

export function DisplayStats(props: { attributes: AttributeInputSet }) {
  const { attributes } = props;
  const memCap = 0;
  const memCapBonus = 0;
  const strength = attributes.strength.value;
  const agility = attributes.agility.value;
  const will = attributes.will.value;
  const armor = attributes.armor.value;
  const resourcefulness = attributes.resourcefulness.value;
  const knowledge = attributes.knowledge.value;
  const dexterity = attributes.dexterity.value;
  const vigor = attributes.vigor.value;

  let hpFromStrAndVigor = useMemo(
    () => calculateMaxHealthFromStrAndVigor(strength, vigor),
    [strength, vigor]
  );

  let baseHp = useMemoizedValue(calculateBaseHealth, hpFromStrAndVigor);
  let memCapFromKnowledge = useMemoizedValue(
    calculateMemoryCapacityFromKnowledge,
    knowledge
  );
  let memCapacity = useMemoizedValue(
    calculateMemoryCapacity,
    knowledge,
    memCapBonus,
    memCap
  );

  let healthRecovery = useMemoizedValue(calculateHealthRecovery, vigor);
  let spellRecovery = useMemoizedValue(calculateSpellRecovery, knowledge);

  let baseMoveSpeed = useMemoizedValue(calculateMovespeedFromAgi, agility);
  let actionSpeedValue = useMemoizedValue(
    calculateActionSpeedValue,
    dexterity,
    agility
  );
  let actionSpeed = useMemoizedValue(calculateAction, actionSpeedValue);
  let manualDexterity = useMemoizedValue(calculateManualDexterity, dexterity);

  let spellCastingSpeed = useMemoizedValue(calculateSpellCasting, knowledge);
  let regularInteractionValue = calculateRegularInteratonSpeedValue(
    dexterity,
    resourcefulness
  );
  let equipSpeed = useMemoizedValue(calculateItemEquip, dexterity);
  let regularInteraction = useMemoizedValue(
    calculateRegularInteraction,
    regularInteractionValue
  );
  let magicInteracton = useMemoizedValue(calculateMagicalInteraction, will);
  let persuasiveness = useMemoizedValue(
    calculatePersuasiveness,
    resourcefulness
  );

  let buffDuration = useMemoizedValue(calculateBuffDuration, will);
  let debuffDuration = useMemoizedValue(calculateDebuffDuration, will);

  let physicalDamageReduction = useMemoizedValue(
    calculatePhysicalDamageReduction,
    armor
  );

  let magicRes = useMemoizedValue(calculateMagicResist, will);
  let magicResistance = useMemoizedValue(
    calculateMagicDamageReduction,
    magicRes
  );
  let physicalPowerBonusFromStrength = useMemoizedValue(
    calculatePhysicalPowerFromStrength,
    strength
  );
  let physicalPowerBonus = useMemoizedValue(
    calculatePhysicalPowerBonus,
    physicalPowerBonusFromStrength
  );
  let magicPowerFromWill = useMemoizedValue(calculateMagicPower, will);
  let magicPowerBonus = useMemoizedValue(
    calculateMagicPowerBonus,
    magicPowerFromWill
  );
  return (
    <div className="flex flex-col">
      <div>
        <b>Health</b>: {baseHp}
      </div>
      <div>
        <b>Memory Capacity</b>: {memCapacity}
      </div>
      <div>
        <b>Utility Effectiveness</b>: 0
      </div>
      <div>
        <b>Health Recovery Bonus</b>: {healthRecovery}%
      </div>
      <div>
        <b>Spell Recovery Bonus</b>: {spellRecovery}%
      </div>
      <hr />
      <div>
        <b>Move Speed</b>: {300 + baseMoveSpeed}
      </div>
      <div>
        <b>Action Speed</b>: {actionSpeed}%
      </div>
      <div>
        <b>Manual Dexterity</b>: {manualDexterity}%
      </div>
      <div>
        <b>Spell Casting Speed</b>: {spellCastingSpeed}%
      </div>
      <div>
        <b>Equip Speed</b>: {equipSpeed}%
      </div>
      <div>
        <b>Regular Interaction Speed</b>: {regularInteraction}%
      </div>
      <div>
        <b>Magical Interaction Speed</b>: {magicInteracton}%
      </div>
      <hr />
      <div>
        <b>Persuasiveness</b>: {persuasiveness}
      </div>
      <div>
        <b>Buff Duration</b>: {buffDuration}%
      </div>
      <div>
        <b>Debuff Duration</b>: {debuffDuration}%
      </div>
      <hr />
      <div>
        <b>Armor Penetration</b>: 0
      </div>
      <div>
        <b>Magic Penetration</b>: 0
      </div>
      <hr />
      <div>
        <b>Headshot Reduction</b>: 0
      </div>
      <div>
        <b>Projectile Damage Reduction</b>: 0
      </div>
      <hr />
      <div>
        <b>Physical Damage Reduction</b>: {physicalDamageReduction}%
      </div>
      <div>
        <b>From Armor Rating</b>: 0
      </div>
      <div>
        <b>From Bonuses</b>: 0
      </div>
      <hr />
      <div>
        <b>Magic Resistance</b>: {magicResistance}%
      </div>
      <div>
        <b>From Resist Rating</b>: 0
      </div>
      <div>
        <b>From Bonuses</b>: 0
      </div>
      <hr />
      <div>
        <b>Physical Power Bonus</b>: {physicalPowerBonus}%
      </div>
      <div>
        <b>From Physical Power</b>: {physicalPowerBonusFromStrength}
      </div>
      <div>
        <b>From Bonuses</b>: 0
      </div>
      <hr />
      <div>
        <b>Magic Power Bonus</b>: {magicPowerBonus}%
      </div>
      <div>
        <b>From Magic Power</b>: {magicPowerFromWill}
      </div>
      <div>
        <b>From Bonuses</b>: 0
      </div>
    </div>
  );
}
const output = { useAttributeValues, StatEditor, DisplayStats };
export default output;
