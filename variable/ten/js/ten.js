/*
name exercise: ten exercise
	description: 
 	autor:Johan Sebastian Y M
 	Date: 16 of march of 2025
Cálculo de la aceleración de un objeto sometido a una fuerza
Enunciado: Diseñar un diagrama de flujo que permita calcular la aceleración de un
objeto sometido a una fuerza dada su masa.
* Pedir al usuario:
o Masa del objeto (kg)
o Fuerza aplicada (N)
* Calcular la aceleración co la segunda ley de Newton:
Fórmula:
* Determinar si la aceleración es alta o baja según un umbral de 5 m/s².
*/
let mass=6;
let force=34;
let aceleration = force/mass;
let umbral = 5;
console.log(aceleration);

if(aceleration>=umbral){
	console.log("the acceleration is high")
}
else{
	console.log("the acceleration is low")
}