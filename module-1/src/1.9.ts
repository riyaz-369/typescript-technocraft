{
  // Type Alias ---->

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Tony",
    age: 22,
    gender: "Male",
    contactNo: "01456789000000000",
    address: "Ke jane",
  };

  const student2: Student = {
    name: "Mony",
    age: 16,
    gender: "Female",
    address: "Ke jane",
  };

  // Type Alias in Function ---->
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
