/*
	Name exercise:Cálculo del Trabajo Mecánico
	Description: 
	Autor: Johan Sebastian Y M
	Date: march 22th 2025

Enunciado:
Se calculará el trabajo mecánico (W) realizado sobre un objeto según la ecuación:
W=F×dW = F \times d
Donde:
• F es la fuerza aplicada.
• d es la distancia recorrida.
Condiciones adicionales:
• Se debe acumular la suma total del trabajo realizado en todas las
ejecuciones.
• Se debe contar cuántas veces se ha calculado el trabajo mecánico.
• El programa se repetirá hasta que el usuario ingrese una distancia negativa.

*/
let counter = 0;
let appliedForce = 11;
let totalWork = 0;
let distanceTraveled;

while (true) {
    distanceTraveled = parseFloat(prompt("Enter the distance traveled:"));

    if (distanceTraveled < 0) {
        console.log("End");
        break; // Exits the loop when the distance is negative
    }

    let mechanicalWork = appliedForce * distanceTraveled;
    counter++;
    totalWork += mechanicalWork;

    console.log("The total sum of the work done is", totalWork);
    console.log(`The mechanical work has been calculated (${counter}) times`);
}

