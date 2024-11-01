// _________Basic data type___________

// string
let firstName: string = "Riyaz";

// number
let roll: number = 99;

// boolean
let isAdmin: boolean = true;

// undefined
let x: undefined = undefined;

// null
let y: null = null;

let d: number;
d = 33;
// d = "ddd";
// d = true;

// __________ARRAY__________
let friends: string[] = ["Anika", "konika", "monika", "Dolika", "solika"];
friends.push("Solika");
// friends.push(9)

let eligibleRollList: number[] = [1, 2, 3, 4];
eligibleRollList.push(9);
// eligibleRollList.push("hello")

// __________TUPLE____ARRAY___Order__-Type of value-____
let coOrdinate: [number, number] = [3, 6];

let ageName: [number, string, boolean] = [50, "Mr. X", true];
ageName[0] = 60;
// ageName[1] = 9 ____ 'number' is not assignable to type 'string'
