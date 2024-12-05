interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const stu1: Student = {
	firstName: 'Emmy',
	lastName: 'SWE',
	age: 1000,
	location: 'Nigeria',
}

const stu2: Student = {
	firstName: 'Gids',
	lastName: 'SWE',
	age: 1000,
	location: 'Kenya',
}

const studentsList: Student[] = [ stu1, stu2 ];
