function sayHello(name: string): void {
  console.log(`Hello, ${name}`)
}

sayHello("world")
sayHello(123)  // TS2345: Argument of type '123' is not assignable to parameter of type 'string'.

const user = {
  firstName: "Angela",
  lastName: "Davis",
  role: "Professor"
}

// TS2339: Property 'name' does not exist on type '{ firstName: string; lastName: string; role: string; }'.
console.log(user.name.toUpperCase())
// TS2554: Expected 1 arguments, but got 0. An argument for 'elementId' was not provided
document.getElementById();


interface Customer {
  name: string;
  age: number;
  id: number;
}



