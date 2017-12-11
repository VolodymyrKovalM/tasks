function firstQuiz(hour) {
	if (typeof hour !== 'number') {
		throw new Error('It is not a number');
	}

	if (hour < 0 || hour > 24) {
		throw new Error('Enter a number from 0 to 24');
	}

	if (hour > 8 && hour < 24) {
		console.log('Hello');
	} else {
		console.log('It is not good time for that');
	}
}

firstQuiz(9);
