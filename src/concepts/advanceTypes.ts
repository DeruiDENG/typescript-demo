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

const obj = {};
// Why it can not work?
// TS2339: Property 'name' does not exist on type '{}'.
obj.name = "Derui";
