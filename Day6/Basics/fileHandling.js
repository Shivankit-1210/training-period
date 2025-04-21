const fs = require('fs') 
const os= require('os')

console.log(os.cpus().length)

// ----write Sync or blocking request
// fs.writeFileSync('./test.txt', 'Hey shivankit');

// ----Write Async or non-blocking request
// fs.writeFile('./test2.txt', 'Bie Shivankit',(err)=>{console.log(err)})

//----read Sync
// const Contact = fs.readFileSync('./Contacts.txt', 'utf-8')
// console.log(Contact);

//----read Async
// fs.readFile('./Contacts.txt','utf-8',(err, result)=>{   // Here readfile expecting us to enter a callback function and it does not return anything(VOID).
//     if(err) {
//         console.log("Error:", err);
//     } else{
//         console.log("Contact: ", result);
//     }
// })

//----Append file Sync..
// fs.appendFileSync('./test.txt',`I am appended Data at ${Date.now()} \n `);


// //---- Copy file Sync..
// fs.cpSync('./test.txt', './copyData.txt');

// //Delete File Sync..
// fs.unlinkSync('./test2.txt',);

//Check stats of file
// const statistic = fs.statSync('./test.txt')
// console.log(statistic);

//make directory
// fs.mkdirSync("my-docs");


// <------Blocking code------>
// console.log("1")
// const res = fs.readFileSync("./test.txt","utf-8");
// console.log(res)

// console.log("3")

// -----> Gives output as 
// 1
// content if test.txt file.
// 3
 
//<------Non-Blocking code------>
// console.log("1")
// fs.readFile("./test.txt", "utf-8", (err,result)=>{
//     if(err){
//         console.log("Error:", err)
//     }
//     else {
//       console.log(result)
//     }
// });
// console.log("3");

// -----> Gives output as 
// 1
// 3
// content if test.txt file.



