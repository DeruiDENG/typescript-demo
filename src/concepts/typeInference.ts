/* eslint-disable */

// Variable
const a = true;
const b = a;
const c = [123, 456];

// Function
function concatInput(a: number, b: number) {
  return [a, b]
}

const squaredResult = [1, 2, 3].map(val => val * val)

// Type Inference for rest parameters

const props = {
  price: 5,
  amount: 1,
  name: 'meals',
};

const {price, ...other} = props;

const payload = {
  amount: {
    price: 5,
  },
};

const state = {
  amount: {
    amount: 1,
    price: 6,
  },
};

const result = {
  ...state,
  ...payload,
};

// Type guard
interface Square {
  kind: 'square';
  size: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.height * s.width;
    case 'circle':
      return Math.PI * s.radius ** 2;
  }
}

// When type inference does not work
const nameAndAge = ["bob", 5]
// TS2339: Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'.
nameAndAge[0].toUpperCase();

// Specify the type
const nameAndAgeFixed: [string, number] = ["bob", 5];
// const nameAndAgeFixed: [name: string, age: number] = ["bob", 5];
// TS2339: Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'.
nameAndAgeFixed[0].toUpperCase();

// Use type cast
(nameAndAge[0] as string).toUpperCase();

