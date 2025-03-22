/*
	Name exercise:calculo p diferentes planetas
	Description: 
	Autor: Johan Sebastian Y M
	Date: march 22th 2025
Ejercicio 2: Cálculo del Peso en Diferentes Planetas
Enunciado:
Se calculará el peso (W) de un objeto en diferentes planetas usando la ecuación:
W=m×gW = m \times g
Donde g es la gravedad del planeta. El usuario podrá elegir:
1. Tierra (9.81 m/s²)
2. Marte (3.71 m/s²)
3. Júpiter (24.79 m/s²)
Condiciones adicionales:
• Se debe acumular la suma total de todos los pesos calculados.
• Se debe contar cuántas veces se ha realizado un cálculo.
• El programa se repetirá hasta que el usuario ingrese una masa negativa.
*/

let mass = parseFloat(prompt("Enter the object's mass in kg:"));
let planetOption = parseInt(prompt("Select a planet: \n1 - Earth \n2 - Mars \n3 - Jupiter"));

let weight;

if (mass < 0) {
    console.log("Mass cannot be negative.");
} else if (planetOption === 1) {
    weight = mass * 9.81;
    console.log(`The object's weight (mass) on Earth is: ${weight.toFixed(2)}`);
} else if (planetOption === 2) {
    weight = mass * 3.71;
    console.log(`The object's weight (mass) on Mars is: ${weight.toFixed(2)}`);
} else if (planetOption === 3) {
    weight = mass * 24.79;
    console.log(`The object's weight (mass) on Jupiter is: ${weight.toFixed(2)}`);
} else {
    console.log("Invalid option. Please enter 1, 2, or 3.");
}
