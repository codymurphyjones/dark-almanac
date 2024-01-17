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
} from "./simulator/InteractionSpeed";
import {
  calculatePhysicalDamageReduction,
  calculatePhysicalPowerBonus,
  calculatePhysicalPowerFromStrength,
} from "./simulator/PhysicalDamage";
import {
  calculateBaseHealth,
  calculateHealthRecovery,
  calculateMaxHealthFromStrAndVigor,
  calculateMovespeedFromAgi,
  calculateSpellRecovery,
} from "./simulator/Character";
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
} from "./simulator/MagicalDamage";

function ifNaN(
  value: string,
  fallback: number,
  callback: Dispatch<SetStateAction<number>>
) {
  let res = parseInt(value);
  console.log(`text val: ${value}`);
  console.log(`parse val: ${res}`);

  if (Number.isNaN(res)) {
    console.log(`is not a number`);
    callback(fallback);
  } else {
    console.log(`is number`);
    callback(parseInt(value));
  }
}

function useMemoizedValue<T extends (...args: any[]) => any>(
  func: T,
  ...args: Parameters<T>
): ReturnType<T> {
  return useMemo(() => func(...args), [args, func]);
}

function useMemoizedValues(func: Function, ...args: any[]) {
  return useMemo(() => func(args), [args, func]);
}

export default function Home() {
  const [armorState, setArmorState] = useState(0);
  const [vigor, setVigor] = useState(5);
  const [strength, setStrength] = useState(4);
  const [agility, setAgility] = useState(26);
  const [dexterity, setDexterity] = useState(25);
  const [will, setWill] = useState(10);
  const [knowledge, setKnowledge] = useState(10);
  const [resourcefulness, setResourcefulness] = useState(25);

  const [memCap, setMemCap] = useState(0);
  const [memCapBonus, setMemCapBonus] = useState(0);

  let hpFromStrAndVigor = useMemo(
    () => calculateMaxHealthFromStrAndVigor(strength, vigor),
    [strength, vigor]
  );
  console.log(`vigorStrHp: ${hpFromStrAndVigor}`);
  console.log(`baseHp: ${calculateBaseHealth(hpFromStrAndVigor)}`);
  let t = useMemoizedValues(calculateBaseHealth, hpFromStrAndVigor);
  let baseHp = calculateBaseHealth(hpFromStrAndVigor);
  //let memCapFromKnowledge = calculateMemoryCapacityFromKnowledge(knowledge);
  let memCapFromKnowledge = useMemoizedValue(
    calculateMemoryCapacityFromKnowledge,
    knowledge
  );
  let memCapacity = calculateMemoryCapacity(knowledge, memCapBonus, memCap);

  let healthRecovery = calculateHealthRecovery(vigor);
  let spellRecovery = calculateSpellRecovery(knowledge);

  let baseMoveSpeed = calculateMovespeedFromAgi(agility);
  let actionSpeedValue = calculateActionSpeedValue(dexterity, agility);
  let actionSpeed = calculateAction(actionSpeedValue);
  let manualDexterity = calculateManualDexterity(dexterity);

  let spellCastingSpeed = calculateSpellCasting(knowledge);
  let regularInteractionValue = calculateRegularInteratonSpeedValue(
    dexterity,
    resourcefulness
  );
  let equipSpeed = calculateItemEquip(dexterity);
  let regularInteraction = calculateRegularInteraction(regularInteractionValue);
  let magicInteracton = calculateMagicalInteraction(will);
  let persuasiveness = calculatePersuasiveness(resourcefulness);

  let buffDuration = calculateBuffDuration(will);
  let debuffDuration = calculateDebuffDuration(will);

  let physicalDamageReduction = calculatePhysicalDamageReduction(armorState);

  let magicRes = calculateMagicResist(will);
  let magicResistance = calculateMagicDamageReduction(magicRes);
  let physicalPowerBonusFromStrength =
    calculatePhysicalPowerFromStrength(strength);
  let physicalPowerBonus = calculatePhysicalPowerBonus(
    physicalPowerBonusFromStrength + 0
  );
  let magicPowerFromWill = calculateMagicPower(will);
  let magicPowerBonus = calculateMagicPowerBonus(magicPowerFromWill);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
      </div>

      <div className="relative flex flex-col place-items-center w-full gap-8">
        <h1 className="text-rose-500 text-9xl mt-16">Hi Nick!</h1>
        <div className="flex w-full justify-around">
          <div className="flex flex-col h-dvh">
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
              <b>Luck</b>: 0
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
            <hr />
            <div>
              <b>Primary Weapon</b>: 0
            </div>
            <hr />
            <div>
              <b>Secondary Weapon</b>: 0
            </div>
            <hr />
            <div>
              <b>Impact Power</b>: 0
            </div>
            <div>
              <b>Primary Weapon Impact Power</b>: 0
            </div>
            <div>
              <b>Secondary Weapon Impact Power</b>: 0
            </div>
          </div>
          <div
            style={{ minWidth: "400px", backgroundColor: "red" }}
            className="flex flex-col h-dvh gap-6"
          >
            <div className="flex justify-between p-2">
              <b>Strength:</b>
              <input
                className="hide-input-arrows text-red-500"
                type="number"
                value={strength}
                onChange={(text) => {
                  ifNaN(text.currentTarget.value, 0, setStrength);
                }}
              />
            </div>
            <div className="flex justify-between p-2">
              <b>Vigor:</b>
              <input
                value={vigor}
                onChange={(text) => {
                  ifNaN(text.currentTarget.value, 0, setVigor);
                }}
              />
            </div>
            <div className="flex justify-between p-2">
              <b>Agility:</b>
              <input
                value={agility}
                onChange={(text) => {
                  ifNaN(text.currentTarget.value, 0, setAgility);
                }}
              />
            </div>
            <div className="flex justify-between p-2">
              <b>Dexterity:</b>
              <input
                value={dexterity}
                onChange={(text) => {
                  ifNaN(text.currentTarget.value, 0, setDexterity);
                }}
              />
            </div>
            <div className="flex justify-between p-2">
              <b>Will:</b>
              <input
                value={will}
                onChange={(text) => {
                  ifNaN(text.currentTarget.value, 0, setWill);
                }}
              />
            </div>
            <div className="flex justify-between p-2">
              <b>Knowledge:</b>
              <input
                value={knowledge}
                onChange={(text) => {
                  ifNaN(text.currentTarget.value, 0, setKnowledge);
                }}
              />
            </div>
            <div className="flex justify-between p-2">
              <b>Resourcefulness:</b>
              <input
                value={resourcefulness}
                onChange={(text) => {
                  ifNaN(text.currentTarget.value, 0, setResourcefulness);
                }}
              />
            </div>
            <hr />
            <div className="flex justify-between p-2">
              <b>Armor Rating:</b>
              <input
                value={armorState}
                onChange={(text) => {
                  ifNaN(text.currentTarget.value, 0, setArmorState);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </div>

        <div>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </div>

        <div>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </div>

        <div>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </div>
      </div>
    </main>
  );
}
