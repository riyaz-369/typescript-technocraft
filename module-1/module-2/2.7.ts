// >-------generic Constraints with keyof operator---------->
type Vehicle = {
  bike: string;
  car: string;
  ship: string;
};

type Owner = "bike" | "car" | "ship"; //manually
type Owner2 = keyof Vehicle;

const person1: Owner = "bike";
const person2: Owner2 = "car";

// ---------->Wow Nice:----->
const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
  return obj[key];
};

const testUser = {
  name: "John",
  age: 44,
  address: "ke jane",
};

getPropertyValue(testUser, "age");
