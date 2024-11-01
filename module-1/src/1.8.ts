{
  // >----Destructuring---->
  // Object------->
  const user: object = {
    id: "1",
    name: {
      firstName: "John",
      middleName: "N/A",
      lastName: "Doe",
    },
    contactNo: "018948489678",
    address: "USA",
  };

  const {
    contactNo,
    name: { middleName },
  } = user;

  // Array------->
  const girlsList: string[] = ["Alia", "Dalia", "Malia", "Palia", "Cholia"];
  const [, , m, ...rest] = girlsList;
}
