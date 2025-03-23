/*
	Name exercise:
	Description: 
	Autor: Johan Sebastian Y M
	Date: march 22th 2025
Cálculo de la Fuerza Resultante (Segunda Ley de Newton)
Un objeto de masa m kg se mueve con una aceleración de a m/s². Usa la Segunda
Ley de Newton para calcular la fuerza resultante (F = m * a).
Instrucciones:
1. Solicita al usuario la cantidad de cálculos a realizar.
2. Usa un ciclo "Para" para ingresar valores de masa y aceleración y calcular la
fuerza en cada iteración.
3. Muestra el resultado de cada cálculo.
*/
let calculations = 5;


for (let counter = 1; counter <= calculations; counter++) {
	let acceleration = prompt("enter the aceleration");
	let mass = prompt("enter the mass"); 
    let force = mass * acceleration;
        console.log(`Calculation ${counter}: The force is ${force} N`);

}

