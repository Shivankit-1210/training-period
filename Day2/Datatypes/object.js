// objects are used to store collections of data and more complex entities.

let user = new Object();
user ={
    name: "Shivankit",
    age: 23
}

console.log(user.name);  // access properties values of the object
console.log(user.age);   
user.isOnline = true;

console.log(user);  // gives { name: 'Shivankit', age: 23, isOnline: true }

// for delete any key value, we can use 'delete' keyword
delete user.age;

console.log(user);  // gives { name: 'Shivankit', isOnline: true } , after deleting age key.
console.log(user.isOnline);
