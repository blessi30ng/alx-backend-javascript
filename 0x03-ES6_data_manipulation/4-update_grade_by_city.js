export default function updateStudentGradeByCity(array, city, newGrades) {
	return array
		.filter((e) => e.location === city)
		.map((e) => {
			for (const g of newGrades) {
				if (g.studentId === e.id) {
					e.grade = g.grade;
				} else {
					e.gradegrade = 'N/A';
				}
			}
			return e;
		})
}		
