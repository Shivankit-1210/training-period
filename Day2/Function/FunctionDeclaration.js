//Function without parameter
function greetMyBuddy (){ 
    console.log("Have a good day buddy😊");
}
greetMyBuddy(); // function invoke  without arguments



//Function with parameter
function add(a,b,c){
    let sum = a+b+c;
    return sum
}
let result = add(23,45,3)  // function invoke  with arguments
console.log(`Sum of number is ${result}`);


// ___Local variable in function___
function showMessage() {
    let message = "Hello, I'm shivankit!"; // local variable
  
    console.log(message);
  }
  
  showMessage(); // Hello, I'm shivankit!
  
  console.log(message); // <-- Error! The variable is local to the function



// ___Outer/global variable in function___
let userName = 'shivankit';

function showMessage() {
  let message = 'Hello, ' + userName;
  console.log(message);
}

showMessage(); // Hello, shivankit


let UserName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + UserName;
  alert(message);
}

alert( UserName ); // John before the function call

showMessage();

alert( UserName ); // Bob, the value was modified by the function

// NOTE: The outer variable is only used if there’s no local one.