const n1 = 4;
const n2 = 9;
const s = 'str';

function sqrtNumber(num) {
	if (typeof num !== 'number') {
		throw new Error('It is not a number');
	}

	if (num % 2 === 0) {
		console.log(Math.sqrt(num));
	}
}

sqrtNumber(n1);
sqrtNumber(n2);
sqrtNumber(s);
