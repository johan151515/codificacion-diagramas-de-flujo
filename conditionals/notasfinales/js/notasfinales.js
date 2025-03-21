/*
	Name exercise: Three numbers
	Description: Three numbers
	Autor:Johan Sebastian Y M
	Date: march 21th 2025
. Cálculo de Notas Finales
Enunciado: Diseñar un diagrama de flujo que reciba tres notas y realice los siguientes
cálculos:
- Calcular los porcentajes de cada nota:
- Nota 1 → 20%
- Nota 2 → 35%
- Nota 3 → 45%
- Sumar los porcentajes de las notas y clasificar la nota final:
- Mayor a 4.5 → Nota Superior
- Entre 3.5 y 4.5 → Nota Buena
- Entre 3 y 3.5 → Nota Media
- Menor a 3 → Nota Mala
Ejercicios Aplicando las Leyes de Newton
*/

let noteOne = 2.5*0.20;0.5
let noteTwo = 3.0*0.35;1.05
let noteThree= 2.1*0.45;0.945

let finalGrade = noteOne+noteTwo+noteThree;

if(finalGrade>4.5){
	console.log("top grade")
}
else if(finalGrade>3.5){
	console.log("good note")
}
else if(finalGrade>3.0){
	console.log("average grade")
}
else{
	console.log("bad note")
}