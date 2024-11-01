// >-----------Generic type--------------------->
// const rollNumbers: number[] = [3, 6, 9];
const rollNumbers: Array<number> = [3, 6, 9];

// const mentors: string[] = ["X", "Y", "Z"];
const mentors: Array<string> = ["X", "Y", "Z"];

// const booleanArr: boolean[] = [true, false, true];
const booleanArr: Array<boolean> = [true, false, true];

// >-----------Dynamic Generic type--------------------->
type GenericArray<T> = Array<T>;

const rollNumbers1: GenericArray<number> = [3, 6, 9];

const mentors1: GenericArray<string> = ["X", "Y", "Z"];

const booleanArr1: GenericArray<boolean> = [true, false, true];

// >----------Generic Object----------------------->
const userArray: GenericArray<{ name: string; age: number }> = [
  {
    name: "X",
    age: 11,
  },
  {
    name: "Y",
    age: 12,
  },
  {
    name: "Z",
    age: 13,
  },
];

// >----------Generic Tuple----------------------->
type GenericTuple<X, Y> = [X, Y];
const man: GenericTuple<string, string> = ["Man1", "Man2"];

// another
const userWithId: GenericTuple<number, { name: string; email: string }> = [
  13,
  { name: "John", email: "user@gmail.com" },
];
