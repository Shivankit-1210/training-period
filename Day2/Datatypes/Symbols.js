// The symbol type is used to create unique identifiers for objects.
// It is introduced in ES6

const id = Symbol("id");

const user = {
  name: "Alice",
  [id]: 123
};

console.log(user[id]); // 123

// Even if another Symbol("id") is created, it will be different:
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false

