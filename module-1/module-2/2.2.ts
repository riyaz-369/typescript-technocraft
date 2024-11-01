// >--------------Interface------------------------------>
type User1 = {
  name: string;
  age: number;
};

type rollNumber = number;

// interface rollNumber2 number // 'number' only refers to a type, but is being used as a value here.

interface User2 {
  name: string;
  age: number;
}

const user1: User2 = {
  name: "John",
  age: 33,
};

// >---Intersection type: --->&------>
type UserWithRoll1 = User1 & { role: string };

const userWithRoll1: UserWithRoll1 = {
  name: "John",
  age: 44,
  role: "manager",
};

// >---Intersection interface: --->extends------>
interface UserWithRoll2 extends User2 {
  role: string;
}

const userWithRoll2: UserWithRoll2 = {
  name: "John2",
  age: 32,
  role: "manager2",
};

// >---------------------------------------------------------------------------------->
{
  // >---In javascript all are object: object=object, array=object, function=object------->
  // >---Array:---->
  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 2, 3, 4];

  // >---Function:---->
  type Add1 = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => {
    return num1 + num2;
  };
}
