// Basic types

let isHappy = true;
isHappy = false; // Working
isHappy = 5; // Type '5' is not assignable to type 'boolean'.

let myName = "Derui";
myName = "Deng"; // Working
myName = isHappy; // Type 'boolean' is not assignable to type 'string'.

function helloWorld(name: string) {
  return `Hello, ${name}`
}

helloWorld("Derui");
// Argument of type '{ name: string; }' is not assignable to parameter of type 'string'
helloWorld({name: "Derui"})

// Literal/Union types

function printSize(size: "large" | "small") {
  // Do somethings
}

function printSizeTwo(size: string) {
  // Do somethings
}

// Will this work?
const size: "large" | "small" = "large";
printSize(size);
printSizeTwo(size);

// Will this work
let sizeB: string = "large";
printSize(sizeB);
printSizeTwo(sizeB);

// Object
interface PeopleA {
  name: string;
}

interface PeopleB {
  name: string;
  age: number;
}

function printPeopleName(people: PeopleA) {
  console.log("The name is ", people.name)
}

const peopleB: PeopleB = {
  name: "Bob",
  age: 12
}

// Will this work?
printPeopleName(peopleB)
printPeopleName({name: "bob"})
printPeopleName({age: 55});

// Tuples
const id1: number[] = [1, 2, 3];
const id2: [number, number, number] = [1, 2, 3];

function printIds(ids: [number, number, number]) {
  console.log(ids[0], ids[1], ids[2])
}

// Will this work?
printIds(id1);
printIds(id2);
