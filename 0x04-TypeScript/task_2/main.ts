interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
        getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {

	workFromHome() {
		return 'Work from home';

	getCoffeeBreak() {
		return 'Getting a coffee break';
	}

	workDirectorTasks() {
		return 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
	
	workFromHome() {
		return 'Cannot work from home';
	}

	getCoffeeBreak() {
		return 'Cannot have a break';
	}

	workTeacherTasks() {
		return 'Getting to work';
	}
}

fuction createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === "number" && salary < 500) {
		return new Teacher();
	} else {
		return new Director();
	}
}


function isDirector(employee: Teacher | Director): Boolean {
	return employee instanceof Director;
}

function executeWork(employee: Teacher | Director) {
	if (employee instanceof Director) {
		employee.workDirectorTasks();
	} else if (employee instanceof Teacher) {
		employee.workTeacherTasks();
	}
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
	if (todayClass === Math) {
		return "Teaching Math";
	} else {
	return "Teaching History"
	}
}
