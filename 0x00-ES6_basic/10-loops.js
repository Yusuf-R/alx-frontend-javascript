/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    array[array.indexOf(idx)] = `${appendString}${idx}`;
  }
  return array;
}
