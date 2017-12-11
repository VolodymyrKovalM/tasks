function quizSix(a, b) {
	const firstResult = a % b === 0;
	const secondResult = b % a === 0;

	if (firstResult || secondResult) {
		console.log(true);
	} else {
		console.log(false);
	}
}

quizSix(12, 4);
quizSix(11, 4);
