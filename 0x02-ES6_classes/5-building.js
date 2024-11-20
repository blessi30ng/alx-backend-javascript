export default class Building {
	constructor(sqft) {
		if (new.target === Building) {
			throw new Error("Building is an abstract class and cannot be instantiated directly.");
		}
		if  (typeof this.evacuationWarningMessage != "function") {
			throw new Error("Class extending Building must override evacuationWarningMessage");
		}
		this.sqft = sqft;
	}

	get sqft() {
		return _sqft;
	}
