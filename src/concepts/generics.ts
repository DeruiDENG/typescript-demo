function concat<VarType>(variableA: VarType, variableB: VarType) {
  return [variableA, variableB];
}

// let TypeScript decide the VarType
const concatResult = concat(12, 23);\
concat(12, '23'); // Error

// Specify the Type parameter
concat<number>(12, 23)
concat<number>('12', '23') // Error

