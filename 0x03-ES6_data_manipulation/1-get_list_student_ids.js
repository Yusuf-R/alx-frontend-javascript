function getListStudentIds(objArr) {
  if (!Array.isArray(objArr)) {
    return [];
  }
  const arrIds = objArr.map((obj) => obj.id);
  return arrIds;
}

export default getListStudentIds;
