const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  //sending the process status code 200, means request was successfull.
  res.statusCode= 200;

  // setting header so that client understand which type of data is sent by the server.(here we are sending plain text)
  // Their are many content-type like text/html, application/json, best for APIs, image/png.
  res.setHeader("Content-type", "text/plain");

  // Now this is our final reponse to our client
  res.end("Hellow from the server");
});

server.listen(PORT,(err)=>{
    if(err) console.log("Error:",err)

        console.log(`Server is running at port ${PORT} `);
})
 