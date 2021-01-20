// Union types
interface PricePointProps {
  amount: number;
  color: 'orange' | 'black';
  size: 'small' | 'large' | 300 | 500 | 700;
  currencyCode?: string;
}

const pricePointProps: PricePointProps = {
  amount: 5,
  color: 'orange',
  size: 'small',
  currencyCode: 'AUD',
};

// AlternativeTypes
type Result =
    | { success: true; response: string }
    | { success: false; error: string };

const result1: Result = {success: true, response: 'DOT'};
const result2: Result = {success: false, error: 'Error text'};

function processResult(result: Result) {
  if (result.success) {
    console.log(`Success with response: ${result.response}`);
  } else {
    console.log(`Failed with error: ${result.error}`);
  }
}

processResult(result1); // Success with response DOT
processResult(result2); // Failed with error: Error text

// Literal type
type NumberOne = 1;
let number: NumberOne;
number = 1; // OK
number = 2; // TS2322: Type '2' is not assignable to type '1'.

let myName: 'Derui';
myName = 'Derui';
myName = 'Ru'; // TS2322: Type '"Ru"' is not assignable to type '"Derui"'.

type a = ReturnType


// Mapped Type
type Keys = "option1" | "option2";
type Flags = { [K in Keys]: boolean }; // TYPE: {option1: boolean, option2: boolean}

type Partial<T> = {
  readonly [P in keyof T]: T[P];
};
type PartialProfile = Partial<{ name: string, age: number }>; // {name?: string, age?: number}

// Can be advanced...
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type ReturnValue = ReturnType<() => string>; // Type: string
const obj = {};
// Why it can not work?
// TS2339: Property 'name' does not exist on type '{}'.
obj.name = "Derui";
