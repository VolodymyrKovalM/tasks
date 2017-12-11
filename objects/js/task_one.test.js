const compareObjects = require('./task_one.js');

test('Returns name property from object in which passed propName argument is greater', () => {
	const obj1 = {
		name: 'John',
		age: 25,
	};

	const obj2 = {
		name: 'Marry',
		age: 18,
	};

	expect(compareObjects(obj1, obj2, 'age')).toBe('John');
});
