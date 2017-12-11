function findLongestWord(str) {
	const words = str.split(' ');

	const longest = words.reduce((longestWord, currentWord) => (
		currentWord.length > longestWord.length ? currentWord : longestWord
	));

	return longest;
}

module.exports = findLongestWord;
