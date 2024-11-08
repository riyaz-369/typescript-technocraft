{
  // >==OOP: inheritance======>
  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  // this is inheritance
  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  const student1 = new Student("Shouvo", 19, "ke jane");
  //   student1.getSleep(8);

  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
  }
  const teacher = new Teacher("MR. Teacher", 33, "jani na", "Physics teacher");
  teacher.getSleep(7);
  console.log(teacher);
}
