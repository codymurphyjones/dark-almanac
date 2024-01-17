export type CurveBreakpoint = [number, number];
export type Curve = CurveBreakpoint[];

export function buildCurve(...points: CurveBreakpoint[]): Curve {
  return points;
}

function defaultModifier(input: number) {
  return input;
}

// export function calculateStatCurve(
//   min: number,
//   arr: number[][],
//   modifier = defaultModifier
// ) {
//   return function (input: number): number {
//     let minResult = min;
//     const val = arr[0][0];
//     if (input < val) console.log(min);

//     let weightCheck = -1;
//     let currIndex = 0;

//     function selectNextCurve() {
//       let baseResult =
//         minResult +
//         (arr[currIndex + 1][0] - arr[currIndex][0]) * arr[currIndex][1];
//       minResult = baseResult;
//       currIndex++;
//     }

//     while (weightCheck < 0) {
//       if (currIndex >= arr.length) {
//         weightCheck = currIndex;
//         continue;
//       }

//       if (arr[currIndex + 1][0] < input) selectNextCurve();
//       else weightCheck = currIndex;
//     }
//     let result = minResult + (input - arr[currIndex][0]) * arr[currIndex][1];
//     return modifier(result);
//   };
// }

export function calculateStatCurve(
  min: number,
  arr: number[][],
  modifier = defaultModifier
) {
  return function (input: number): number {
    let minResult = min;
    const val = arr[0][0];
    if (input < val) console.log(min);

    let weightCheck = -1;
    let currIndex = 0;

    function selectNextCurve() {
      let baseResult =
        minResult +
        (arr[currIndex + 1][0] - arr[currIndex][0]) * arr[currIndex][1];
      minResult = baseResult;
      currIndex++;
    }

    while (weightCheck < 0) {
      if (currIndex >= arr.length) {
        weightCheck = currIndex;
        continue;
      }

      if (arr.length < currIndex && arr[currIndex + 1][0] < input)
        selectNextCurve();
      else weightCheck = currIndex;
    }
    let result = minResult + (input - arr[currIndex][0]) * arr[currIndex][1];

    return modifier(result);
  };
}

export function calculateLoggedStatCurve(
  min: number,
  arr: number[][],
  modifier = defaultModifier
) {
  return function (input: number): number {
    let minResult = min;
    const val = arr[0][0];
    if (input < val) console.log(min);

    let weightCheck = -1;
    let currIndex = 0;

    function updateMinResult() {
      minResult =
        minResult +
        (arr[currIndex + 1][0] - arr[currIndex][0]) * arr[currIndex][1];
    }

    function selectNextCurve() {
      let baseResult =
        minResult +
        (arr[currIndex + 1][0] - arr[currIndex][0]) * arr[currIndex][1];
      minResult = baseResult;
      currIndex++;
    }

    while (weightCheck < 0) {
      if (currIndex >= arr.length) {
        weightCheck = currIndex;
        continue;
      }

      console.log("currIndex: ", currIndex);
      console.log("arrLength: ", arr.length);
      console.log("input:", input);
      console.log("input check: ", currIndex < arr.length);

      if (arr.length - 1 > currIndex && arr[currIndex + 1][0] < input) {
        console.log("check: ", arr[currIndex + 1][0] < input);
        selectNextCurve();
      } else {
        weightCheck = currIndex;
      }
    }
    let result = minResult + (input - arr[currIndex][0]) * arr[currIndex][1];
    console.log(`Curve Selection: ${weightCheck}`);
    console.log(
      `${minResult} + ((${input} - ${arr[currIndex][0]}) * ${arr[currIndex][1]}`
    );
    console.log(`MinInput: ${arr[currIndex][0]}`);
    console.log(`MinResult: ${minResult}`);
    console.log(`InputDiff: ${input - arr[currIndex][0]}`);
    console.log(`Weight: ${arr[currIndex][1]}`);
    console.log(
      `ArmorDiff: ${(input - arr[currIndex][0]) * arr[currIndex][1]}`
    );
    console.log(`Result: ${result}`);

    return modifier(result);
  };
}

// if(process.logStats) {
// console.log(`Curve Selection: ${weightCheck}`);
// console.log(`${minResult} + ((${input} - ${arr[currIndex][0]}) * ${arr[currIndex][1]}`)
// console.log(`MinInput: ${arr[currIndex][0]}`)
// console.log(`MinResult: ${minResult}`)
// console.log(`InputDiff: ${input - arr[currIndex][0]}`);
// console.log(`Weight: ${arr[currIndex][1]}`);
// console.log(`ArmorDiff: ${((input - arr[currIndex][0]) * arr[currIndex][1])}`);
// console.log(`Result: ${result}`)
// }
// return result;
// }

//calculateArmor(-300)

// function logRating(ArmorRating: number) {
//   console.log("Armor Rating: ", ArmorRating);
//   console.log("ArmorValue:", `${calculateArmor(ArmorRating)}%`);
// }

// logRating(318);
// logRating(24);
// logRating(-300);
// logRating(121);
// logRating(65);
