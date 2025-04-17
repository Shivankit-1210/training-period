// Variable declared with var keyword

{
 var message = "shivankit agarwal"
console.log(message)

var message = "i am developer";
console.log(message);
}

var message = "india"
console.log(message);

function exampleVar() {
    console.log(a); // undefined (hoisted)
    var a = 10;
    console.log(a); // 10
  
    if (true) {
      var a = 20; // Same variable (Function scoped)
      console.log(a); // 20
    }
  
    console.log(a); // 20
  }
  
  exampleVar();