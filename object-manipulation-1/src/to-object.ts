/* exported toObject */

type StringBooleanPair = [string, boolean];

const isCool: StringBooleanPair = ['isCool', true];

function toObject(keyValuePair: StringBooleanPair): { [key: string]: boolean } {
  const newObj: { [key: string]: boolean } = {};
  const [key, value] = keyValuePair;
  newObj[key] = value;
  return newObj;
}

console.log(toObject(isCool));
