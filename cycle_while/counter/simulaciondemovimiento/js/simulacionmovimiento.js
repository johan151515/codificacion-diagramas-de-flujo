/*
	Name exercise:
	Description: 
	Autor: Johan Sebastian Y M
	Date: march 22th 2025
Ejercicio 4: Simulación de Movimiento con la Primera Ley de Newton
Enunciado:
Si la fuerza aplicada es cero, el objeto permanece en reposo. Si la fuerza es distinta
de cero, se calcula la aceleración con:
a=Fma = \frac{F}{m}
Y se actualiza la velocidad:
v=v+a×tv = v + a \times t
donde t = 1s.
Condiciones adicionales:
• Se debe contar cuántos segundos el objeto ha estado en movimiento.
• Se debe acumular la distancia total recorrida con:
d=v×td = v \times t
• El programa finaliza cuando el usuario ingresa una fuerza de 0.

*/
// Definición de variables iniciales
let time = 1;              
let totalDistance = 0;    
let mass = 22;             
let force = 12;            

while (force !== 0) {
    let acceleration = force / mass; 
    let velocity = acceleration * time;  
    let distance = velocity * time; 

    totalDistance += distance;  

    // Mostrar valores en consola
    console.log("Fuerza aplicada:", force);
    console.log("Aceleración:",acceleration);
    console.log("Velocidad:",velocity);
    console.log("Distancia total recorrida:",totalDistance);
    console.log("---------------------");

    
    force = -2; 
}

