// >---Promise----->
// Simulate:--->
const createPromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Have some data";
    if (data) resolve(data);
    reject("Failed to load data");
  });
};

const showData = async (): Promise<string> => {
  const data: string = await createPromise();
  //   console.log(data);
  return data;
};

// showData();

// For object:------->
{
  type Something = {
    something: string;
  };

  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "Have some data" };
      if (data) resolve(data);
      reject("Failed to load data");
    });
  };

  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    //   console.log(data);
    return data;
  };

  showData();
}

// Now use api:---->

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const getTodo = async (): Promise<Todo> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
  return data;
};

getTodo();
