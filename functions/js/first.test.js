const argsSum = require('./first.js');
// import argsSum from './first';

describe('It should calculate function\'s arguments sum, whether it is Array or multiple arguments', () => {
	it('should calculate sum if argument is Array', () => {
		const arr = [4, 5, 7, 4, 7];
		expect(argsSum(arr)).toEqual(27);
	});

	it('should calculate sum if there are multiple arguments', () => {
		expect(argsSum(2, 5, 4, 5, 7)).toEqual(23);
	});
});
