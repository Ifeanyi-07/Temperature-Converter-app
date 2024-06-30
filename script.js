document.addEventListener('DOMContentLoaded', function () {
    const inputTemperature = document.getElementById('inputTemperature');
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    const convertButton = document.getElementById('convertButton');
    const result = document.getElementById('result');

    convertButton.addEventListener('click', function () {
        const temperature = parseFloat(inputTemperature.value);
        const inputSelectedUnit = inputUnit.value;
        const outputSelectedUnit = outputUnit.value;

        if (!isNaN(temperature)) {
            if (inputSelectedUnit === outputSelectedUnit) {
                result.textContent = "Please select different input and output units.";
                return;
            }

            let convertedTemperature;

            if (inputSelectedUnit === 'celsius') {
                if (outputSelectedUnit === 'fahrenheit') {
                    convertedTemperature = (temperature * 9/5) + 32;
                } else if (outputSelectedUnit === 'kelvin') {
                    convertedTemperature = temperature + 273.15;
                }
            } else if (inputSelectedUnit === 'fahrenheit') {
                if (outputSelectedUnit === 'celsius') {
                    convertedTemperature = (temperature - 32) * 5/9;
                } else if (outputSelectedUnit === 'kelvin') {
                    convertedTemperature = (temperature - 32) * 5/9 + 273.15;
                }
            } else if (inputSelectedUnit === 'kelvin') {
                if (outputSelectedUnit === 'celsius') {
                    convertedTemperature = temperature - 273.15;
                } else if (outputSelectedUnit === 'fahrenheit') {
                    convertedTemperature = (temperature - 273.15) * 9/5 + 32;
                }
            }

            result.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${outputSelectedUnit}`;
        } else {
            result.textContent = "Please enter a valid temperature.";
        }
    });
});
