// --->Ternary operator--->Optional chaining--->Nullish coalescing operator
{
  const age: number = 17;
  if (age >= 18) {
    // console.log("adult");
  } else {
    // console.log("baccha polapain");
  }

  const isAdult = age >= 18 ? "adult" : "baccha polapain";
  //   console.log({ isAdult });
}

// --->Nullish coalescing operator: ??
{
  // null and undefined:---> decision makings
  //   const isAuthenticated = null;
  const isAuthenticated = undefined;
  //   const isAuthenticated = "";

  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1, result2 });
}

// --->Optional chaining
{
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };
  const user: User = {
    name: "John",
    address: {
      city: "usa",
      road: "ke jane",
      presentAddress: "ke jane",
    },
  };

  const permanentAddress = user?.address?.permanentAddress ?? "nai";
  console.log({ permanentAddress });
}
