//<---String conversion--->

let value = true;
alert(typeof value); // gives boolean

value = String(value)
alert(typeof value); // gives string


//<---Numeric Conversion--->

alert("6"/"2");   // gives 3

let str ="123"
alert(typeof str); // gives string

let num = Number(str) 
alert(str)  //gives  Number

let age = Number("Not a Number");

alert(age); // gives NaN, conversion failed


//<---Boolean Conversion

alert( Boolean(1) ); //  gives true
alert( Boolean(0) ); // gives false
alert( Boolean("0"));// gives true

alert( Boolean("hello") ); // gives true
alert( Boolean("") ); // gives false




