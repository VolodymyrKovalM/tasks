const a = [12, 15, 4, 9, 45, 27];

function checkArray(arr, b) {
	if (b) {
		const max = Math.max(...a);
		console.log(max);
	} else {
		const min = Math.min(...a);
		console.log(min);
	}
}

checkArray(a, true);
checkArray(a, false);
