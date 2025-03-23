/*
	Name exercise: Simulación de un Objeto en un Plano Inclinado
	Description: 
	Autor: Johan Sebastian Y M
	Date: march 23th 2025
: Simulación de un Objeto en un Plano Inclinado
La fuerza paralela a la superficie de un plano inclinado es F_paralela = m * g * sin(θ).
Instrucciones:
1. Pide la masa del objeto y un rango de ángulos (θ).
2. Usa un ciclo "Para" para calcular la fuerza paralela en distintos ángulos
dentro del rango.
3. Muestra los resultados.
*/
let mass = 23;
let gravity = 9.81;
let numberRange = 5;

for (let counter = 1; counter <= numberRange; counter++) {
    let thetaNumber = parseFloat(prompt("Enter the theta number (in degrees):"));

    // Convertimos el ángulo de grados a radianes antes de calcular el seno
    let thetaRadians = thetaNumber * (Math.PI / 85);

    // Usamos Math.sin() en lugar de "sen()"
    let parallelForce = mass * gravity * Math.sin(thetaRadians);

    console.log("For theta=", thetaNumber);
    console.log("The parallel force is:",parallelForce);
}
