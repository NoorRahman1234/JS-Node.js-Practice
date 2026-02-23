
// First Server 
// const http = require("http");

// const server = http.createServer((req, res) =>{
//     console.log("Request received");
//     res.write("Hello Noor first node js server is running!");
//     res.end();
// });
// server.listen(3000, () =>{
//     console.log("server is running on port 3000");
// });



// Example No 2
// const http = require("http");
// const  server = http.createServer((req, res) =>{
//     if(req.url === "/"){
//         res.end("Home Page");        
//     } else if(req.url === "/about"){
//         res.end("About Page");
        
//     }else{
//         res.end("404 Not found");
//     }
// });
// server.listen(4000);