/*
Name exercise: counter
	Description: counter
	Autor: Johan Sebastian Y M
	Date: march 22th 2025
realizar la tabla del 9 que multiplique hasta el 5 y diga si es par o impar
*/
let counter = 1;
let number = 5;

while (counter <= number) {  
    let resultado = 9 * counter;  
    console.log("9 x " + counter + " = " + resultado);  
    
    if (resultado % 2 == 0) {  
        console.log("Es par");  
    } else {  
        console.log("Es impar");  
    }  

    counter++;  
}
