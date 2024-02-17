function updateUniqueItems(mapObject) {
  if (mapObject.constructor !== Map) {
    throw new Error('Cannot process');
  }
  mapObject.forEach((_value, key) => {
    if (mapObject.get(key) === 1) {
      mapObject.set(key, 100);
    }
  });
  return mapObject;
}

export default updateUniqueItems;
