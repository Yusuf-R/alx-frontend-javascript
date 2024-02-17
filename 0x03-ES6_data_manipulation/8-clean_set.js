function cleanSet(setData, startString) {
  let newStr = '';
  if (!(setData instanceof Set) || typeof startString !== 'string') {
    return newStr;
  }
  if (startString.length === 0 || setData.size === 0) {
    return newStr;
  }
  setData.forEach((data) => {
    if (data.startsWith(startString)) {
      newStr += `${data.slice(startString.length)}-`;
    }
  });
  if (newStr.length > 0) {
    newStr = newStr.slice(0, -1);
  }
  return newStr;
}

export default cleanSet;
