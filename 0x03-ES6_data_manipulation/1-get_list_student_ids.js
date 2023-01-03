const getListStudentIds = (arr) => {
  if (Array.isArray(arr)) {
    return arr.map((value) => value.id);
  }
  return [];
};

export default getListStudentIds;
