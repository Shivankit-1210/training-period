// <--- bigInt --->

//  In JavaScript, the “number” type cannot safely represent integer values larger than (9007199254740991), or less than -(9007199254740991) for negatives.

// So, BigInt type was recently added to the language to represent integers of arbitrary length.

// A bigInt value is created by appending n to the end of an integer:
const bigint = 1234567890123445678901234456789012344567890n;
console.log(bigint);

