// <-- Variable declared with let keyword

let message = "shivankit agarwal"
console.log(message); // Gives shivankit agarwal 

// let message = "23456"; // gives SyntaxError: Identifier 'message' has already been declared.

function exampleLet() {
  // console.log(b); // Gives ReferenceError
  let b = 10;
  console.log(b); // 10

  if (true) {
    let b = 20; // Different variable (block-scoped)
    console.log(b); // 20
  }

  console.log(b); // 10
}

exampleLet();


  

