function cleanSet(setData, startString) {
  if (!(setData instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  let newStr = '';
  if (startString.length === 0) {
    return newStr;
  }
  setData.forEach((data) => {
    if (data.startsWith(startString)) {
      newStr += `${data.slice(startString.length)}-`;
    }
  });
  newStr = newStr.slice(0, -1);
  return newStr;
}

export default cleanSet;
