/**
 * Represents a Holberton Course.
 */
export default class HolbertonCourse {
     /**
   * Creates a new @see {@link HolbertonCourse}.
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - How long the course is (in months).
   * @param {String[]} students - The names of students in the course.
   */
    constructor(name, length, students) {
        this.name = name;
        this.length = length;
        this.students = students;
    }

    // Getter and Setter for 'name'
    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value === 'string') {
            this._name = value;
        } else {
            throw new TypeError("Name must be a string");
        }
    }

    // Getter and Setter for 'length'
    get length() {
        return this._length;
    }

    set length(value) {
	if (typeof value == 'number') {
 	   this._length = value;
	} else {
	   throw new TypeError("Length must be a number");
	}
    }

    //Getter and Setter for 'students'
    get stuents() {
	return this._students;
    }

    set students() {
	if (Array.isArray(value) && value.every(student => typeof student === 'string')) {
	   this._students = value;
	} else {
	   throw new TypeError("Students must be an array of strings");'
	}
    }
