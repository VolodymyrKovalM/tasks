/*
	- Create array of properties
	- Add all properties in the array to an object using computed property syntax
	- Loop through the properties and output their name and value
*/

console.log('*************Task 5*************');

const props = ['name', 'type', 'age'];

const obj = {};

for (let i = 0, n = props.length; i < n; i++) {
	obj[props[i]] = props[i] + 1;
}

for (let prop in obj) {
	console.log(prop, obj[prop]);
}
