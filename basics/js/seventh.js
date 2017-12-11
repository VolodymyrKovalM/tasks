const arr = [1, 2, 3, 4, 5];
let i = 0;

console.log('Do While Loop');

do {
	console.log(arr[i]);
	i++;
} while (i < arr.length);

i = 0;

console.log('**************************\nWhile Loop');

while (i < arr.length) {
	console.log(arr[i]);
	i++;
}

console.log('**************************\nfor Loop');

for (let k = 0, n = arr.length; k < n; k++) {
	console.log(arr[k]);
}

console.log('**************************\nfor in Loop');

for (let value in arr) {
	console.log(arr[value]);
}

console.log('**************************\nfor each Loop');

arr.forEach(item => {
	console.log(item);
});
