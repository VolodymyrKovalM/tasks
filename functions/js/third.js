function celsiusToFahrenheit(cel) {
	const fahrenheits = Math.round(cel * 1.8 + 32);
	return `${cel}&ordm;C is ${fahrenheits}&ordm;F`;
}

function fahrenheitToCelsius(f) {
	const celsius = Math.round((f - 32) / 1.8);
	return `${f}&ordm;F is ${celsius}&ordm;C`;
}

exports.celsiusToFahrenheit = celsiusToFahrenheit;
exports.fahrenheitToCelsius = fahrenheitToCelsius;
