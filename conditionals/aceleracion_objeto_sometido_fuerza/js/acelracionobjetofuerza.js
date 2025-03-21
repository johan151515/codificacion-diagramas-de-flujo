/*
	Name exercise: age
	Description: age
	Autor: Johan Sebastian Y M
	Date: march 21th 2025
. Cálculo de la aceleración de un objeto sometido a una fuerza
Enunciado: Diseñar un diagrama de flujo que permita calcular la aceleración de un
objeto sometido a una fuerza dada su masa.
* Pedir al usuario:
o Masa del objeto (kg)
o Fuerza aplicada (N)
* Calcular la aceleración co la segunda ley de Newton:
Fórmula:
* Determinar si la aceleración es alta o baja según un umbral de 5 m/s².
*/
let objectMass=32;
let appliedForce=11;

let aceleration=appliedForce/objectMass;

if(aceleration>5){
	console.log("aceleration is high")
}
else{
	console.log("aceleration is low")
}