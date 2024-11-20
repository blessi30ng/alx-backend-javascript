import Building from './5-building.js'

export default class SkyHighBuilding extends Building {
	constructor(sqft, floors) {
		super(sqft);
		this.floors = floors;
	}

	get floors() {
		retun this._floors;
	}

	evacuationWarningMessage() {
		return `Evacuate slowly the ${this.floors} floors`;
	}
