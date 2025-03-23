/*
	Name exercise:Cálculo de la Fuerza de Fricción
	Description: 
	Autor: Johan Sebastian Y M
	Date: march 22th 2025
Cálculo de la Fuerza de Fricción
La fuerza de fricción se calcula con la ecuación: F_fricción = μ * N, donde:
• μ es el coeficiente de fricción
• N es la normal (N = m * g)
Instrucciones:
1. Pide la masa del objeto y el coeficiente de fricción (μ).
2. Usa un ciclo "Para" para calcular la fuerza de fricción en distintos valores de
masa ingresados por el usuario.
3. Muestra los resultados.
*/
let gravity=9.81;
let frictionCoeficient =32;
let numberRange =5;

for(let counter =1; counter<=numberRange; counter++){
let objectMass = prompt("enter the object mass:");
let n=objectMass*gravity;
let frictionForce=frictionCoeficient*n;
	console.log("the friction force is",frictionForce)
}