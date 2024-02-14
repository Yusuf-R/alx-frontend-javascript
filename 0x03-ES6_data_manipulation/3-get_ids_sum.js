function getStudentIdsSum(stdList) {
  const initVal = 0;
  const idSum = stdList.reduce((accumulator, obj) => accumulator + obj.id, initVal);
  return idSum;
}

export default getStudentIdsSum;
