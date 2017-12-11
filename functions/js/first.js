function argsSum(...args) {
	let sum = 0;

	if (args[0] instanceof Array) {
		for (let i = 0, n = args[0].length; i < n; i++) {
			sum += args[0][i];
		}
	} else {
		for (let k = 0, n = args.length; k < n; k++) {
			sum += args[k];
		}
	}

	return sum;
}

module.exports = argsSum;
// export default argsSum;
