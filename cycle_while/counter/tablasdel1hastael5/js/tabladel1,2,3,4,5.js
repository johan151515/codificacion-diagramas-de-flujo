/*
Name exercise:tablas de 1,2,3,4,5
	Description: counter
	Autor: Johan Sebastian Y M
	Date: march 22th 2025
3.realizar las tablas 1,2,3,4,5 hasta en 5 cada una si son pares imprima buzz y si son impares bass
*/
for (let counter = 1; counter <= 5; counter++) { 
    console.log("Tabla del " + counter);
    
    for (let table = 1; table <= 5; table++) { 
        let result= counter * table;
        let message= (result % 2 === 0) ? "Buzz" : "Bass";
        console.log(counter + " x " + table + " = " + result + " - " + message);
    }
    
    console.log(""); 
}
