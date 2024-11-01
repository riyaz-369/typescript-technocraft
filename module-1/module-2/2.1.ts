// >---Type assertion---->
let anything: any;
anything = "Next Level web development";
anything = 33;
const newAnything = anything as number;

// >---kg to gram function-------->
const kgToGm = (value: string | number): string | number | undefined => {
  if (typeof value === "string") {
    const convertedToNumber = parseFloat(value) * 1000;
    return `The converted value is: ${convertedToNumber}`;
  }
  if (typeof value === "number") {
    return value * 1000;
  }
};

const result1 = kgToGm(1000) as number;
const result2 = kgToGm("1000") as string;
