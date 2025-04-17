// A string in JavaScript must be surrounded by quotes.

let str = "Hey there DEV!";
let str2 = 'Single quotes is also valid';
let phrase = `This is template literal using backstick ${str}`;  // Backticks  allow us to embed variables and expressions into a string by wrapping them in ${…}
console.log(phrase);

let Username = prompt("Enter Your name");
console.log(`Hii ${Username} !`);