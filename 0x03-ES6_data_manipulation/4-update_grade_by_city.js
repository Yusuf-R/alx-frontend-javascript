/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
function updateStudentGradeByCity(stdList, filterCriteria, newGrade) {
  const filteredArray = stdList.filter((objItem) => objItem.location === filterCriteria);
  filteredArray.map((obj) => {
    newGrade.map((gradeObj) => {
      if (obj.id === gradeObj.studentId) {
        obj.grade = gradeObj.grade;
      }
    });
    if (!obj.grade) {
      obj.grade = 'N/A';
    }
  });
  return filteredArray;
}

export default updateStudentGradeByCity;
