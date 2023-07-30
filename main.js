// Variable var, let, const. I choose const Kelvin bc this would not change.
const Kelvin = 293;
// Celsius is always -273 Kelvin therefore remainds const?
const Celsius = Kelvin - 273;
// Fahrenheit is always celsius * (9/5) + 32 ? Maybe should use let or var? 
const Fahrenheit = Celsius * (9/5) + 32;
// I Choose the variable type that allows you to change its value. 
var Temperature = Fahrenheit ;
// Math.floor allows no decimal in Temperature 
var TEMPERATURE = Math.floor(Temperature); 
// I used back ticks` to replaece Temperature with TEMPERATURE 
console.log(`The temperature is ${TEMPERATURE} degrees fahrenheit`); 
