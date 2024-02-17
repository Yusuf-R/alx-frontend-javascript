function cleanSet(set, startString) {
  let newStr = '';
  if (!(set instanceof Set) || typeof startString !== 'string') {
    return newStr;
  }
  if (startString.length === 0 || set.size === 0) {
    return newStr;
  }
  set.forEach((data) => {
    if (typeof data === 'string' && data.startsWith(startString)) {
      newStr += `${data.slice(startString.length)}-`;
    }
  });
  if (newStr.length > 0) {
    newStr = newStr.slice(0, -1);
  }
  return newStr;
}

export default cleanSet;
