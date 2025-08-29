// Temperature Converter JavaScript

// Get input elements
const celsiusInput = document.querySelector('input[placeholder="Celsius"]');
const fahrenheitInput = document.querySelector('input[placeholder="Fahrenheit"]');
const kelvinInput = document.querySelector('input[placeholder="Kelvin"]');
const resetButton = document.querySelector('.reset-button');

// Conversion functions
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function fahrenheitToKelvin(fahrenheit) {
    return ((fahrenheit - 32) * 5/9) + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return ((kelvin - 273.15) * 9/5) + 32;
}

// Format number to 2 decimal places, removing unnecessary zeros
function formatNumber(num) {
    if (isNaN(num)) return '';
    return parseFloat(num.toFixed(2)).toString();
}

// Extract numeric value from input (removing units)
function extractNumericValue(value) {
    if (typeof value !== 'string') return value;
    // Remove units and extra spaces, then parse
    const cleanValue = value.replace(/[°CFKcfk\s]/g, '');
    return parseFloat(cleanValue);
}

// Update placeholder with unit
function updatePlaceholder(input, value, unit) {
    if (value === '' || isNaN(value)) {
        input.placeholder = unit;
    } else {
        input.placeholder = `${formatNumber(value)} ${unit}`;
    }
}

// Handle Celsius input
celsiusInput.addEventListener('input', function() {
    const celsius = extractNumericValue(this.value);
    
    if (this.value === '') {
        fahrenheitInput.value = '';
        kelvinInput.value = '';
        updatePlaceholder(celsiusInput, '', '°C');
        updatePlaceholder(fahrenheitInput, '', '°F');
        updatePlaceholder(kelvinInput, '', 'K');
        return;
    }
    
    if (!isNaN(celsius)) {
        const fahrenheit = celsiusToFahrenheit(celsius);
        const kelvin = celsiusToKelvin(celsius);
        
        // Update the current input to show units if it doesn't already have them
        if (!this.value.includes('°C')) {
            this.value = formatNumber(celsius) + ' °C';
        }
        fahrenheitInput.value = formatNumber(fahrenheit) + ' °F';
        kelvinInput.value = formatNumber(kelvin) + ' K';
        
        updatePlaceholder(celsiusInput, celsius, '°C');
        updatePlaceholder(fahrenheitInput, fahrenheit, '°F');
        updatePlaceholder(kelvinInput, kelvin, 'K');
    }
});

// Handle Fahrenheit input
fahrenheitInput.addEventListener('input', function() {
    const fahrenheit = extractNumericValue(this.value);
    
    if (this.value === '') {
        celsiusInput.value = '';
        kelvinInput.value = '';
        updatePlaceholder(celsiusInput, '', '°C');
        updatePlaceholder(fahrenheitInput, '', '°F');
        updatePlaceholder(kelvinInput, '', 'K');
        return;
    }
    
    if (!isNaN(fahrenheit)) {
        const celsius = fahrenheitToCelsius(fahrenheit);
        const kelvin = fahrenheitToKelvin(fahrenheit);
        
        celsiusInput.value = formatNumber(celsius) + ' °C';
        // Update the current input to show units if it doesn't already have them
        if (!this.value.includes('°F')) {
            this.value = formatNumber(fahrenheit) + ' °F';
        }
        kelvinInput.value = formatNumber(kelvin) + ' K';
        
        updatePlaceholder(celsiusInput, celsius, '°C');
        updatePlaceholder(fahrenheitInput, fahrenheit, '°F');
        updatePlaceholder(kelvinInput, kelvin, 'K');
    }
});

// Handle Kelvin input
kelvinInput.addEventListener('input', function() {
    const kelvin = extractNumericValue(this.value);
    
    if (this.value === '') {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        updatePlaceholder(celsiusInput, '', '°C');
        updatePlaceholder(fahrenheitInput, '', '°F');
        updatePlaceholder(kelvinInput, '', 'K');
        return;
    }
    
    if (!isNaN(kelvin)) {
        const celsius = kelvinToCelsius(kelvin);
        const fahrenheit = kelvinToFahrenheit(kelvin);
        
        celsiusInput.value = formatNumber(celsius) + ' °C';
        fahrenheitInput.value = formatNumber(fahrenheit) + ' °F';
        // Update the current input to show units if it doesn't already have them
        if (!this.value.includes('K')) {
            this.value = formatNumber(kelvin) + ' K';
        }
        
        updatePlaceholder(celsiusInput, celsius, '°C');
        updatePlaceholder(fahrenheitInput, fahrenheit, '°F');
        updatePlaceholder(kelvinInput, kelvin, 'K');
    }
});

// Handle reset button
resetButton.addEventListener('click', function() {
    celsiusInput.value = '';
    fahrenheitInput.value = '';
    kelvinInput.value = '';
    
    // Reset placeholders to original units
    celsiusInput.placeholder = 'Celsius';
    fahrenheitInput.placeholder = 'Fahrenheit';
    kelvinInput.placeholder = 'Kelvin';
});

// Initialize placeholders on page load
document.addEventListener('DOMContentLoaded', function() {
    celsiusInput.placeholder = 'Celsius';
    fahrenheitInput.placeholder = 'Fahrenheit';
    kelvinInput.placeholder = 'Kelvin';
});
