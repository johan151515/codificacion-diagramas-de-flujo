/*
	Name exercise:Verificación de la Primera Ley de Newton
	Description: Verificación de la Primera Ley de Newton
	Autor: Johan Sebastian Y M
	Date: march 23th 2025
2: Verificación de la Primera Ley de Newton
Si la fuerza neta (F) sobre un objeto es cero, este permanecerá en reposo o en
movimiento uniforme.
Instrucciones:
1. Pide al usuario n valores de fuerzas netas aplicadas.
2. Usa un ciclo "Para" para evaluar si en cada caso la fuerza neta es cero.
3. Muestra si el objeto permanece en reposo o en movimiento uniforme.
*/
let numberRange = 5;
for(let counter=1; counter<=numberRange; counter++){

let netForce = prompt("enter the net force:");

if (netForce == 0){
	console.log("the object remains at rest or in uniform motion");
}
else{
	console.log("the object is accelerating");
}
}