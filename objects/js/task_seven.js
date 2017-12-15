/*
	Modify solution for practical task 4 to share `list` method through prototype
*/

console.log('**********Task 7**********');

(function m() {
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

	Object.setPrototypeOf(obj1, mixin);
	Object.setPrototypeOf(obj2, mixin);

	obj1.list();
	obj2.list();
}());

/*
function Mixin(info) {
	this.props = info.props;
	this.name = info.name;
	this.surname = info.surname,
	this.age = info.age;
	this.gender = info.gender;
}

Mixin.prototype.list = function() {
	const { props } = this;
	for (let i = 0, n = props.length; i < n; i++) {
		if (this[props[i]]) {
			console.log(props[i], this[props[i]]);
		} else {
			console.log(`Property ${props[i]} does not exist`);
		}
	}
}

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

obj1.list();
obj2.list();
*/
