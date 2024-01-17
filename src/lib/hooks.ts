import { Dispatch, SetStateAction, useState } from "react";

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

const output = { useAttributeValues };
export default output;
