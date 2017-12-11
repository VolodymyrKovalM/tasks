function quizFive(a, b) {
	const sum = a + b;

	if (sum >= 11 && sum <= 19) {
		console.log(sum);
	} else {
		console.log('Result is not in range between 11 and 19');
	}
}

quizFive(5, 7);
quizFive(15, 17);
