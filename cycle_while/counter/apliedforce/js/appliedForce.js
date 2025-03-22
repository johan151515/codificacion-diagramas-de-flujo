/*
	Name exercise: fuerza de reaccion
	Description: 
	Autor: Johan Sebastian Y M
	Date: march 22th 2025
Ejercicio 3: Cálculo de la Tercera Ley de Newton (Acción y Reacción)
Enunciado:
Dado que:
Faccioˊn=−FreaccioˊnF_{\text{acción}} = -F_{\text{reacción}}
El programa pedirá una fuerza aplicada (F) y mostrará su fuerza de reacción.
Condiciones adicionales:
• Se debe acumular la suma total de todas las fuerzas aplicadas.
• Se debe contar cuántas veces se ha ingresado una fuerza.
• El programa finaliza cuando el usuario ingresa una fuerza de 0.
*/
let counter = 0;
let totalAppliedForce = 0;
let appliedForce;

while (true) {
    appliedForce = parseFloat(prompt("Enter a force (0 to exit):"));

    if (appliedForce === 0) {
        console.log("Program terminated.");
        break;
    }

    let reactionForce =-appliedForce;
    totalAppliedForce =totalAppliedForce + appliedForce;
    counter++;
console.log("Reaction force:",reactionForce);
    console.log("Total applied forces:",totalAppliedForce);
    console.log("Number of forces entered:", counter);
}


