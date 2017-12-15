/*
	- Write a JavaScript function that accepts a string as a parameter
	and find the longest word within the string.
*/

function findLongestWord(str) {
	const words = str.split(' ');

	const longest = words.reduce((longestWord, currentWord) => (
		currentWord.length > longestWord.length ? currentWord : longestWord
	));

	return longest;
}

module.exports = findLongestWord;
