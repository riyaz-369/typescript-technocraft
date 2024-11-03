// >------Constraints:-------------->
{
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string } //this is Constraints
  >(
    studentInfo: T
  ) => {
    const courseName = "Next Level Web Development";
    return {
      ...studentInfo,
      courseName,
    };
  };

  const studentA = {
    id: 1,
    name: "MR. X",
    email: "x@gmail.com",
    devType: "Fullstack",
  };
  const studentB = {
    id: 2,
    name: "MR. X",
    email: "y@gmail.com",
    devType: "Mern-stack",
    bike: "Yamaha",
  };
  const student1 = addCourseToStudent(studentA);
  const student2 = addCourseToStudent(studentB);
}
