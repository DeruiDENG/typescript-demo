// strict mode

// TS7006: Parameter 'a' implicitly has an 'any' type.
function implicitAnyParamFunc(a) {
  console.log(a);
}

const element = document.getElementById("abc");
// TS2531: Object is possibly 'null'.
element.click();
if (element) {
  element.click();
}

// Not good
interface Props {
  onChange: Function
  value: any;
  params: Object,
}

// Much better
interface BetterProps {
  onChange: (value: string) => void;
  value: string;
  params: { [key: string]: string }
}

