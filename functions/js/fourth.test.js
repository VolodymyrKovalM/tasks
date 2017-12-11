const findLongestWord = require('./fourth.js');

describe('It should return the longest word in specified string', () => {
	it('It should return the longest word in specified string', () => {
		expect(findLongestWord('You can check strings against regular expressions with')).toBe('expressions');
	});
});
