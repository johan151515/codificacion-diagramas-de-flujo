/*
	Name exercise: Three numbers
	Description: Three numbers
	Autor:Johan Sebastian Y M
	Date: march 21th 2025
. Cálculo de Salario Neto con Deducciones
Enunciado: Diseñar un diagrama de flujo que calcule el salario total de una persona,
aplicando las siguientes reglas:
- Si el salario es menor a dos salarios mínimos, sumar el subsidio de transporte de $114,000.
- Aplicar los siguientes descuentos:
- Salud = salario × 0.12
- Pensión = salario × 0.16
- ARL = salario × 0.052
- Si el salario es mayor a cuatro salarios mínimos, restar una retención del 0.04.
- Calcular e imprimir el total a pagar después de los descuentos.
*/
let minimumWage =1423500;
let daysWorked = 30;
let daysValue = 50000;
let transportationAllowance = 114000

let salary =daysWorked*daysValue;

if((minimumWage*2)<salary){
	salary+transportationAllowance;1614000
}
else{
	salary+0;
}
let healt =salary*0.12;193,680
let pension =salary*0.16;258,240
let ARL =salary*0.052;83,928
let totaltoPay =pension+healt+ARL;
console.log("the total to pay is:",totaltoPay);
if((minimumWage*4)<salary){
salary*0.04;
console.log("The salary is:",salary)
}
else{
salary*1
console.log("The salary is:",salary)
}

