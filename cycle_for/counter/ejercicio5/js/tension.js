/*
	Name exercise:
	Description: 
	Autor: Johan Sebastian Y M
	Date: march 22th 2025
Cálculo de la Tensión en una Cuerda
Cuando un objeto cuelga de una cuerda, la tensión en la cuerda se calcula como T =
m * g, si no hay aceleración adicional.
Instrucciones:
1. Pide al usuario ingresar n objetos con sus respectivas masas.
2. Usa un ciclo "Para" para calcular la tensión en cada caso.
3. Muestra los resultados.
*/
let gravity = 9.81;
let objectRange =5;
for (let counter=1; counter<=objectRange; counter++){
let object=prompt ("enter the object:");
let massObject=prompt ("enter the mass object:");
let strain=massObject*gravity;
	console.log("the strain is:",strain);
}