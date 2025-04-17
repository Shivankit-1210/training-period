//<---Break statement with while loop

let sum =0;
while(true){
    let value = +prompt("enter a number", '');
    if(!value) break;
    sum += value;
}
alert('sum'+sum);

///<---Continue statement with for loop

for(let i=0; i<10 ;i++){
    if(i%2==0) continue;  // it will give only number not multiple of 2
    alert(i);             // gives 1,3,5,7,9
}


//<---Same as above but in diffrent implementation 
for(let i =0 ;i<10 ;i++){

    if(i%2){
        alert(i);         // gives 1,3,5,7,9
    }
}


// ___ TASK: Replace "for" loop with "While" ___
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }

// --- Solution: 
 let i=0;
 while(i<3){
    alert(`number ${i}!`);
    i++;
 }
