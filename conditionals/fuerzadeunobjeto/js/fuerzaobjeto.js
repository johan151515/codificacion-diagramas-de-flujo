/*
	Name exercise: Three numbers
	Description: Three numbers
	Autor:Johan Sebastian Y M
	Date: march 21th 2025
Determinar la Fuerza de un Objeto y Compararla con un Límite
Enunciado: Diseñar un diagrama de flujo que calcule la fuerza ejercida por un objeto y
determine si es mayor o menor que un valor umbral.
- Pedir al usuario la masa (kg) y la aceleración (m/s²).
- Calcular la fuerza usando la segunda ley de Newton.
Fórmula: F = m × a
- Si Fuerza ≥ 100N, imprimir 'La fuerza es alta'.
- Si Fuerza < 100N, imprimir 'La fuerza es baja'.

*/
let mass=12;
let aceleration=3;

let objectForce =mass*aceleration;

if (objectForce>= 100){
	console.log("the force is high")
}
else{
	console.log("the force is bad")
}
