const getStudentIdsSum = (arr) => arr.reduce((accum, current) => accum + current.id, 0);

export default getStudentIdsSum;
