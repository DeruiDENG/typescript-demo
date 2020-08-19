// Instead of :
// const getName = (objWithName: { name: string }): string => {
//     return objWithName.name;
// };

// We can write:
interface ObjWithName {
  name: string;
}

const getName = (objWithName: ObjWithName): string => {
  return objWithName.name;
};

const aObjectWithName = {
  name: 'David',
  gender: 'male',
};

type ObjWithAge = {
  age: number;
}

const aObjectWithAge: ObjWithAge = {
  age: 5,
};

getName(aObjectWithName);
// TS2345: Argument of type 'ObjWithAge' is not assignable to parameter of type 'ObjWithName'.
// Property 'name' is missing in type 'ObjWithAge' but required in type 'ObjWithName'.
getName(aObjectWithAge);
