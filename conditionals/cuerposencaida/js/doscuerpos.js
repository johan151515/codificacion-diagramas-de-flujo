/*
	Name exercise: Three numbers
	Description: Three numbers
	Autor:Johan Sebastian Y M
	Comparación de dos cuerpos en caída libre
Enunciado: Diseñar un diagrama de flujo que reciba la masa de dos cuerpos en caída
libre, calcule la fuerza gravitacional de cada uno y determine:
* Cuál cuerpo ejerce mayor fuerza gravitacional.
* Si ambas fuerzas son iguales.
Fórmula (Segunda Ley de Newton considerando gravedad):
Donde g = 9.81 m/s² (gravedad terrestre).
*/
let massOne =23;
let massTwo =12;
let gravity =9.81
let forceOne = massOne*gravity;
let forceTwo = massTwo*gravity;

if(forceOne==forceTwo){
	console.log("bodies exert equal gravitational force")
}else if (forceOne<forceTwo){
	console.log("forceTwo exerts greater revisational force")
}
else{
	console.log("force one exerts greater gravitational force")
}