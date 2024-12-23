export default class Currency {
	constructor(name, code) {
		this.code = code;
		this.name = name;
	}

	get code() {
		return this._code;
	}

	set code(value) {
		this._code = value;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}

	displayFullCurrency() {
		return `${this.name} (${this.code})`;
	}
}
