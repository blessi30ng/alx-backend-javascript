namespace Subject {
	export interface Teacher {
		experieneTEachingC?: number;
	}

	export class Cpp extends Subject {
		getRequirements(): string {
			return "Here is the list of requirements for Cpp";
		}

		getAvailableTeacher(): string {
			if (this.teacher.experienceTeachingC > 0) {
				return "Available Teacher: ${Teacher.firstName}";
			} else {
				return 'No available';
			}
		}
	}
		
}


