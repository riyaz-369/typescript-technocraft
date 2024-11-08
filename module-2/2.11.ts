// >------Utility types:--------->Pick, Omit, Required, Partial, Readonly, Record
type Person = {
  name: string;
  age: number;
  email?: string;
  contactNo: string;
};

type Name = Pick<Person, "name">;
type NameAndAge = Pick<Person, "name" | "age">;

// Omit:--->
type ContactInfo = Omit<Person, "name" | "age">;

// Required:--->
type PersonRequired = Required<Person>;

// Partial:--->
type PersonPartial = Partial<Person>;

// Readonly:--->
type PersonReadonly = Readonly<Person>;

const personA: PersonReadonly = {
  name: "John",
  age: 30,
  contactNo: "018678905789",
};
// personA.age = 6;

// Record:--->
// type MyObject = {
//     a: string
//     b: string
// }
type MyObject = Record<string, string>;

const object1: MyObject = {
  a: "aa",
  b: "bb",
  c: "cc",
};

// ---------important-------------
const emptyObject: Record<string, unknown> = {};

emptyObject.age = 44;
