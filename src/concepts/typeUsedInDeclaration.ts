/* eslint-disable */

// Boolean
const isActive: boolean = true;
const isAlive = true;

// Number
const aCount: number = 5;
const anotherNumber = 5;
const hexNumber = 0x10;

// String
const aString = 'Hello';
const bString = `Hello ${aString}`;

// Array
const aList: number[] = [1, 2, 3];
const bList: Array<number> = [1, 2, 3];
const cList = [1, 2, 3];

// Enum
enum Gender {
  Male,
  Female,
}


// Object
const person: { name: string, gender: Gender, age?: number } = {
  name: 'Derui',
  gender: Gender.Male,
};

// Any
let aVariable: any = 5;
aVariable = 'string';

// Unknown
let aUnknown: unknown;
aUnknown = {age: 5}; // OK
aUnknown.age; // TS2571: Object is of type 'unknown'.
(aUnknown as { age: number }).age; // OK

// Tuple
let aTuple: [number, string];
aTuple = [5, 'hello'];
aTuple = [5, 'hello', 5]; // TS2322: Type '[number, string, number]' is not assignable to type '[number, string]'.

// Named Tuple
let namedTuple: [id: number, age: number] = [1, 5];
namedTuple; // Type: [id: number, age: number]

// Never
function throwError(): never {
  throw new Error(); // OK
}

function throwError2(): never {
  return true; // TS2322: Type 'true' is not assignable to type 'never'.
}
