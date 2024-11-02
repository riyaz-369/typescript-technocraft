// >---Function with generics
const createArray = (param: string): Array<string> => {
  return [param];
};

const createArrayWithGeneric = <T>(param: T): T[] => {
  return [param];
};

const res1 = createArray("Bangladesh");

type CountryInfo = {
  country: string;
  address: string;
  currentYear: number;
};

const resultGenericObj = createArrayWithGeneric<CountryInfo>({
  country: "Bangladesh",
  address: "Dhaka",
  currentYear: 2024,
});

// Tuple:----------->
const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
  return [param1, param2];
};

const response = createArrayWithTuple<string, number>("Bangladesh", 2024);

type CountryInfo2 = {
  country: string;
  address: string;
  currentYear: number;
};

const myCountry = {
  country: "Bangladesh",
  address: "Dhaka",
  currentYear: 2024,
};

const yourCountry = {
  country: "Korea",
  address: "Soul",
  currentYear: 2024,
};

const resultGenericObj2 = createArrayWithTuple<CountryInfo, CountryInfo2>(
  myCountry,
  yourCountry
);

// For Practice:---------->
const addCourseToStudent = <T>(studentInfo: T) => {
  const courseName = "Next Level Web Development";
  return {
    ...studentInfo,
    courseName,
  };
};

const studentA = {
  name: "MR. X",
  devType: "Fullstack",
};
const studentB = {
  name: "MR. X",
  devType: "Mern-stack",
  bike: "Yamaha",
};
const student1 = addCourseToStudent(studentA);
const student2 = addCourseToStudent(studentB);
