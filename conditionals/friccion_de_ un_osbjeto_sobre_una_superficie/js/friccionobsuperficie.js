/*
	Name exercise: Three numbers
	Description: Three numbers
	Autor:Johan Sebastian Y M
	Date: march 21th 2025
.Cálculo de la Fricción de un Objeto sobre una Superficie
Enunciado: Diseñar un diagrama de flujo que calcule la fuerza de fricción entre un
objeto y la superficie sobre la que se mueve.
* Pedir al usuario:
o Masa del objeto (kg)
o Coeficiente de fricción (\mu)
o Aceleración gravitacional (g)
* Calcular la fuerza normal y la fuerza de fricción:
Fórmula:
* Si la fuerza de fricción es mayor a 50N, indicar que la fricción es alta.
* Si es menor a 50N, indicar que la fricción es baja.
*/
let objectMass =21;
let gravitationalAceleration =9.81;
let friccionCoeficient =22;
let normalForce =objectMass*gravitationalAceleration;

let friccionForce =normalForce*friccionCoeficient;

if(friccionForce>50){
	console.log("friccion is high")
}
else{
	console.log("aceleration is low")
}