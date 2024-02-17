function groceriesList() {
  const mapData = new Map();
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const [key, value] of Object.entries(obj)) {
    mapData.set(key, value);
  }
  return mapData;
}

export default groceriesList;
