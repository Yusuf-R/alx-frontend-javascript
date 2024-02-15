function hasValuesFromArray(setData, arrayData) {
  return arrayData.every((element) => setData.has(element));
}

export default hasValuesFromArray;
