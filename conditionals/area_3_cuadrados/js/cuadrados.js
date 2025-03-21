/*
	Name exercise: cuadrados
	Description: cuadrados
	Autor:Johan Sebastian Y M
	Date: march 15th 2025
Comparación de Áreas de Tres Cuadrados
Enunciado: Realizar un diagrama de flujo que calcule el área de tres cuadrados dados
sus lados y luego:
- Determine si todas las áreas son iguales.
- Identifique cuál área es mayor en caso de que sean diferentes.
Fórmula: Área = lado²
*/
		let sideOne =2;
		let sideTwo =11;
		let sideThree =11;
	let areaOne = sideOne*sideOne;
	let areaTwo = sideTwo*sideTwo;
	let areaThree = sideThree*sideThree;

if(areaOne==areaTwo && areaOne==areaThree && areTwo==areaThree){
	console.log("are equals")
}
else if(areaOne>areaTwo && areaOne>areaThree){
	console.log("area one is greater")
}
else if(areaTwo==areaOne && areaOne>areaThree && areaTwo>areaThree){
	console.log("areaOne equal areaTwo","areaOne and areaTwo greater areaThree")
}
else if(areaOne>areaTwo && areaOne==areaThree && areaTwo<areaThree){
	console.log("areaOne equal areaThree","areaOne and areaThree greater areaTwo")
}
else if(areaOne<areaTwo && areaOne<areaThree && areaTwo==areaThree){
	console.log("areaTwo equal areaThree","areaTwo and areaThree greater areaOne")
}
else if(areaTwo>areaOne && areaTwo>areaThree){
	console.log("aeaTwo greater")
}
else{
	console.log("areaThree greater")
}