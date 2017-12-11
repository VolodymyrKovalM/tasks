/*
	- Modify method `drive` to log mileage after `distance` seconds
	- Implement container to collect callbacks to call when `drive` is finished
	- Make several calls to `drive` and output total mileage
*/

console.log('*************Task 3*************');

const CarTaskThree = {
	$mileage: 0,
	drive(distance, callback) {
		this.$mileage += distance;

		setTimeout(() => {
			callback(distance);
		}, distance * 1000);
	},

	get mileage() {
		return this.$mileage;
	},
};

function onDriveFinished(distance) {
	console.log(`The car has driven ${distance} miles`);
}

CarTaskThree.drive(5, onDriveFinished);
console.log(CarTaskThree.mileage);
CarTaskThree.drive(10, onDriveFinished);
console.log(CarTaskThree.mileage);
