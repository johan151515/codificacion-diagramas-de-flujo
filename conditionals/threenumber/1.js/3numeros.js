/*
	Name exercise: Three numbers
	Description: Three numbers
	Autor:Johan Sebastian Y M
	Date: march 15th 2025
*/

let numberOne=12;
let numberTwo=10;
let numberThree=15;

if(numberOne==numberTwo && numberOne==numberThree && numberTwo==numberThree){
	console.log("are equals")
}
else if(numberOne>numberTwo && numberOne>numberThree){
	console.log("number one is greater")
}
else if(numberTwo==numberOne && numberOne>numberThree && numberTwo>numberThree){
	console.log("numberOne equal numberTwo","numberOne and numberTwo greater numberThree")
}
else if(numberOne>numberTwo && numberOne==numberThree && numberTwo<numberThree){
	console.log("numberOne equal numberThree","numberOne and numberThree greater numberTwo")
}
else if(numberOne<numberTwo && numberOne<numberThree && numberTwo==numberThree){
	console.log("numberTwo equal numberThree","numberTwo and numberThree greater numberOne")
}
else if(numberTwo>numberOne && numberTwo>numberThree){
	console.log("numberTwo greater")
}
else{
	console.log("numberThree greater")
}



