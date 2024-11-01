// -----> Reference Type:--> Object

const user: {
  readonly age: number;
  company: "TechSoul"; // This doing a type: --> literal type
  firstName: string;
  middleName?: string; //Optional type
  lastName: string;
} = {
  age: 21,
  company: "TechSoul",
  firstName: "Riyazul",
  middleName: "Islam",
  lastName: "NAI",
};

// user.company = "Another"
