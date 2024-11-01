{
  // >----Spread operator-----<
  // Array--->
  const nameList = ["Anita, Konika, Monica, Nolika"];
  const nameList2 = ["Sabila", "Nabila", "Vabila", "Kadila"];

  nameList.push(...nameList2);

  // Object---->
  const mentors1 = {
    typescript: "Mezba vai",
    redux: "Mir vai",
    dbms: "Mizan vai",
  };

  const mentors2 = {
    prisma: "Firoz vai",
    nextjs: "Tonmoy vai",
    cloud: "Nahid vai",
  };

  //   To create new list use 1 and 2 list
  const mentorsList = {
    ...mentors1,
    ...mentors2,
  };
}

// >----Rest operator-----<

const greetFriends = (...friends: string[]) => {
  //   console.log(`Hi! ${friend1}, ${friend2}, ${friend3}.`);
  friends.forEach((friend: string) => {
    console.log(`Hi! ${friend}`);
  });
};

greetFriends("Abul", "Babul", "Kabul", "Ubul", "Dabul");
