export default function getListStudentIds(array) {
	if (!Array.isarray(array)) {
		return [];
	}

	return array.map((a) => a.id)
}

