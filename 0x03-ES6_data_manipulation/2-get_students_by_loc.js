function getStudentsByLocation(stdList, strFtr) {
  // stdList is an array of objects
  // strFtr is a string to filter the location
  const ret = stdList.filter((objItem) => objItem.location === strFtr);
  return ret;
}

export default getStudentsByLocation;
