const getStudentIdsSum = (arr) => {
	return arr.reduce((accum, current) => accum + current.id, 0);
}

export default getStudentIdsSum
