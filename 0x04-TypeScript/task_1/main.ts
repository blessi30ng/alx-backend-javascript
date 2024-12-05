interface Teacher {
	readonly firstName: sting;
	readonly   lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience? : number;
	location: string;
	[property: string]: any;
}

const teacher1: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contact: false,
};

console.log(teacher1);

interface Directors extends Teacher {
	numberofReports: number;
}

const director1: Directors = {
 	firstName: 'John',
  	lastName: 'Doe',
  	location: 'London',
  	fullTimeEmployee: true,
 	numberOfReports: 17,
};
console.log(director1);

function printTeacher(firstName: string, lastName: string)
: string  {
	return `{firstName[0] ${lastName}}`;
}

interface Class {
	workOnHomework(): string;
	displayName(): string;
}

interface Constructor {
	firstName: string;
	lastName: string;
}

class Student implements Class {
	firstName: string;
	lastName: string;

	constructor(args: Constructor) {
		this.firstName = args.firstName;
		this.lastName = args.lastName;
	}

	workOnHomework() {
		return 'Currently working';
	}

	displayName() {
		return this.firstName
	}
}
