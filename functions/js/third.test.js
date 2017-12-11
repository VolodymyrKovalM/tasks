const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./third.js');

describe('It should convert celsius to fahrenheit and vise versa', () => {
	it('It should convert celsius to fahrenheit', () => {
		expect(celsiusToFahrenheit(22)).toEqual('22&ordm;C is 72&ordm;F');
	});

	it('It should convert fahrenheit to celsius', () => {
		expect(fahrenheitToCelsius(75)).toEqual('75&ordm;F is 24&ordm;C');
	});
});
