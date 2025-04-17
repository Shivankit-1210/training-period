const My_Birthday = "12-october-2001"
console.log(My_Birthday);

// My_Birthday = "12-novembe-2001" // it will give TypeError: Assignment to constant variable.
console.log(My_Birthday); 


// <-- Uppercase constant
const COLOR_RED = "#F00"
const COLOR_GREEN = "#0F0"
const COLOR_ORANGE = "#FF7F00"

// When we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

let bgColor = COLOR_GREEN;
alert(bgColor); // #0F0