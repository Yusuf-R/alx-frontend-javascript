function createInt8TypedArray(length, position, value) {
  if (length === undefined || position === undefined || value === undefined) {
    throw new Error('One or more arguments are undefined');
  }
  if (typeof length !== 'number' || typeof position !== 'number' || typeof value !== 'number') {
    throw new Error('One or more arguments are not a number');
  }
  if (length < 0 || position < 0) {
    throw new Error('One or more arguments are negative');
  }
  const buff = new ArrayBuffer(length);
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const view = new DataView(buff);
  view.setInt8(position, value);
  return view;
}

export default createInt8TypedArray;
