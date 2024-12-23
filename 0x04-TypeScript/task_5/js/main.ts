interface MajorCredits {
	credits: number;
	brand: "MajorCredits";
}

interface MinorCredits {
	credits: number;
	brand: "MinorCredits";
}

const sumMajorCredits(subject1, subject2): MajorCredits {
	return {
		credits: subject1.credits + subject2.credits;
	}

}

const sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
	return {
		credits: subject1.credits + subject2.credits;
	}
}


