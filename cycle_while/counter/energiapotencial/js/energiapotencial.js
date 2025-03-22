/*
	Name exercise:Cálculo de la Energía Potencial Gravitatoria
	Description: 
	Autor: Johan Sebastian Y M
	Date: march 22th 2025
Enunciado:
Se calculará la energía potencial gravitatoria (Epg) de un objeto según la ecuación:
Epg=m×g×hEpg = m \times g \times h
Donde:
• m es la masa del objeto.
• g es la aceleración de la gravedad (9.81 m/s² en la Tierra).
• h es la altura desde la que se encuentra el objeto.
Condiciones adicionales:
• Se debe acumular la suma total de la energía potencial calculada.
• Se debe contar cuántas veces se ha calculado la energía potencial.
• El programa se repetirá hasta que el usuario ingrese una altura negativa.
*/
let mass = 10;
let gravityAcceleration = 9.81;
let height;
let totalPotentialEnergy = 0;
let counter = 0;

while (true) {
    height = parseFloat(prompt("Enter the height:"));

    if (height < 0) {
        console.log("Program terminated.");
    }

    let potentialEnergy = mass * gravityAcceleration * height;
    totalPotentialEnergy = totalPotentialEnergy+potentialEnergy;
    counter++;

    console.log("Potential energy:",potentialEnergy);
    console.log("Total accumulated potential energy:",totalPotentialEnergy);
    console.log("Potential energy has been calculated",counter);
}
