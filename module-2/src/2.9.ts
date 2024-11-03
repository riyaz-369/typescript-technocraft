// >-----Conditional type------------->
type a1 = null;
type b1 = undefined;

type x = a1 extends null ? true : false; // x is conditional type: true
type y = a1 extends number ? true : b1 extends null ? null : any; // any

// Another example:-------->
type Sheikh = {
  bike: string;
  car: string;
  ship: string;
};

// have bike | have car | have ship | have tractor?
type CheckVehicle<T> = T extends keyof Sheikh ? "ase" : "nai goo-reb";

type HasShip = CheckVehicle<"ship">; // ase
