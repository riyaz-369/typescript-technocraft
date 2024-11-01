// >------Function------<
// ---> Normal func
function add(num1: number, num2: number): number {
  return num1 + num2;
}
// add(2, true);
// add(2, "3")
add(3, 6);

// ---> Arrow func
const addArrowFunc = (num1: number, num2: number = 10): number => num1 + num2;
addArrowFunc(2, 3);

{
  // >-----object---function---method-----<
  const user = {
    name: "John",
    balance: 0,
    addBalance(balc: number): string {
      //This is a method
      return `My balance is: ${this.balance + balc}`;
    },
  };
}

// >-------Array---------<
const array: number[] = [1, 3, 5, 7];
const newArray: number[] = array.map((elem: number): number => elem * elem);
