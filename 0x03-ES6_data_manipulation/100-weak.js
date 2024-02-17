const weakMap = new WeakMap();
function queryAPI(endpointObj) {
  if (!weakMap.has(endpointObj)) {
    weakMap.set(endpointObj, 0);
  }
  const count = weakMap.get(endpointObj) + 1;
  weakMap.set(endpointObj, count);
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export {
  queryAPI,
  weakMap,
};
