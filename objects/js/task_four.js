/*
	- Create a mixin object that has the `list` method which loops over `props` object
	property and outputs all existing properties and their respective values,
	if a property doesn't exist on the current object, it outputs `Property ${name} doesn't exist`
	- Create two objects with `props` property as an array of strings, where each string denotes
	a property on an object and other properties listed in the `props` property
	- Mix in `list` method to these objects and call it
*/

console.log('**********Task 4**********');

(function mix() {
	const mixin = {
		list() {
			const { props } = this;
			for (let i = 0, n = props.length; i < n; i++) {
				if (this[props[i]]) {
					console.log(props[i], this[props[i]]);
				} else {
					console.log(`Property ${props[i]} does not exist`);
				}
			}
		},
	};

	const obj1 = {
		props: ['name', 'surname', 'age', 'gender'],
		name: 'John',
		age: 25,
		gender: 'male',
	};

	const obj2 = {
		props: ['name', 'surname', 'age', 'gender'],
		name: 'Marry',
		surname: 'Pop',
		gender: 'Pop',
	};

	obj1.list = mixin.list;
	obj2.list = mixin.list;

	obj1.list();
	obj2.list();
}());
