/*
name exercise: nine exercise
	description: 
 	autor:Johan Sebastian Y M
 	Date: 16 of march of 2025
Cálculo de la Fricción de un Objeto sobre una Superficie
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
	let mass = 64;
	let frictionCoefficient = 22;
	let GravitationalAcceleration = 9.81;
	normalForce = mass*GravitationalAcceleration;
	frictionForce = (frictionCoefficient * normalForce);

console.log("fuerza de friccion:",frictionForce);

if(frictionForce>50){
	console.log("the friction is high")
}
else{
	console.log("the friction is low")
}
	