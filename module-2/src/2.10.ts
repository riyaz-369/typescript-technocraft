// >-----mapped types------>
const arrOfNumbers: number[] = [3, 6, 9];

// const arrOfStrings: string[] = ["3", "6", "9"];
const arrOfStrings: string[] = arrOfNumbers.map((number) => number.toString());

console.log(arrOfStrings); // [ '3', '6', '9' ]

// now learn typescript mapped type:------->
type AreaNumber = {
  height: number;
  width: number;
};
// type AreaString = {
//   height: string;
//   width: string;
// };

type AreaString = {
  [key in keyof AreaNumber]: string;
};

// look up type:------------>
type Height = AreaNumber["height"]; // number

// using generic:----->

// T => { height: string; width: number }
type AreaString2<T> = {
  [key in keyof T]: T[key]; // key => T["height"], T["width"]
};

const area2: AreaString2<{ height: string; width: number }> = {
  height: "100",
  width: 50,
};
