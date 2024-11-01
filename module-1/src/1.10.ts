// Union Type---------->
{
  type FrontendDeveloper = "fakirDeveloper" | "JuniorDeveloper";
  type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";
  type Developer = FrontendDeveloper | FullstackDeveloper;
  const newDeveloper: FrontendDeveloper = "JuniorDeveloper";
  const newDeveloper2: Developer = "expertDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "B+";
  };

  const user1: User = {
    name: "John",
    // email: "john@gmail.com",
    gender: "male",
    bloodGroup: "A+",
  };
}
// Intersection------------------------------<
{
  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper = FrontendDeveloper | BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper = {
    skills: ["HTML", "CSS", "JS", "ExpressJS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
