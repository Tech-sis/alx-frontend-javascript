const updateStudentGradeByCity = (arr, city, newGrades) => arr.filter((value) => value.location === city).map((value) => ({ ...value, grade: newGrades.filter((grad) => grad.studentId === value.id).map((grad) => grad.grade)[0] || 'N/A' }));
export default updateStudentGradeByCity;
