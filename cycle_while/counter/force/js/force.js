/*
	Name exercise:
	Description: 
	Autor: Johan Sebastian Y M
	Date: march 22th 2025
Ejercicio 1: Cálculo de la Fuerza con la Segunda Ley de Newton
Enunciado:
Crea un diagrama de flujo que solicite una masa (m) y una aceleración (a) y calcule
la fuerza (F) aplicando la fórmula:
F=m×aF = m \times a
Condiciones adicionales:
• Se debe acumular la suma total de todas las fuerzas calculadas.
• Se debe contar cuántos cálculos se han realizado.
• El programa finaliza cuando el usuario ingresa una masa o aceleración
negativa.
*/

let bulk = 10; 
let aceleration = 5; 
let counter = 0;
let totalForce = 0;

while (bulk > 0 && aceleration > 0) {
    let force = bulk * aceleration;
    totalForce =totalForce+force;
    counter = counter+1;

    //redusco los datos para asi terminar el bucle
    bulk = bulk-2;
    aceleration =aceleration-1;
}
console.log("Numero total de calculos:",counter);
console.log("Fuerza total acumulada:",totalForce);
