/* eslint-disable guard-for-in */
/* eslint-disable no-unused-vars */
export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const empList = [];
  for (const value of Object.values(allEmployees)) {
    empList.push(...value);
  }
  return empList;
}
