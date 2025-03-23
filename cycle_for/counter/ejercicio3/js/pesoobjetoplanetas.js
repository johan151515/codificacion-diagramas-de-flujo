/*
	Name exercise: Cálculo del Peso de un Objeto en Diferentes Planetas
	Description: 
	Autor: Johan Sebastian Y M
	Date: march 22th 2025
 Cálculo del Peso de un Objeto en Diferentes Planetas
El peso de un objeto depende de la gravedad en cada planeta.
Instrucciones:
1. Pide la masa del objeto.
2. Usa un ciclo "Para" para calcular el peso (P = m * g) en varios planetas con las
siguientes gravedades:
o Tierra (9.8 m/s²)
o Marte (3.7 m/s²)
o Júpiter (24.8 m/s²)
o Luna (1.6 m/s²)
3. Muestra los pesos calculados.
*/
let earth =9.81;
let mars =3.7;
let jupiter =24.8;
let moon =1.6;
let numberRange =5;

for (let counter=1; counter<=numberRange; counter++){
let mass =prompt("enter the mass:");
let earthWeight = mass*earth;
	console.log("the weight on earth is:",earthWeight);
let marsWeight =mass*mars;
	console.log("the weight on mars is:",marsWeight);
let jupiterWeight=mass*jupiter;
	console.log("the weight on jupiter is:",jupiterWeight);
let moonWeight=mass*moon;
	console.log("the weight on moon is",moonWeight);
}
