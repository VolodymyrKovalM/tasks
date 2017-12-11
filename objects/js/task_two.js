/*
	- Create object Car with the method `drive` and the property `mileage`
	- Method `drive` accepts distance as a parameter and logs
	to console `The car has driven ${distance} miles`
	- Property `mileage` has a getter that returns total mileage after several calls of `drive`
	- Make several calls to `drive` and output total mileage
*/

const Car = {
	_mileage: 0,
	drive(distance) {
		this._mileage += distance;
		console.log(`The car has driven ${distance} miles`);
	},

	get mileage() {
		return this._mileage;
	},
};

Car.drive(5);
console.log(Car.mileage);
Car.drive(5);
console.log(Car.mileage);
