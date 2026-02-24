
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
// URLs
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
/////////////////////////////////////////////////////////////////

// File System in Node.js
// Reading file  
// Reading means getting data from a file
// Example  Asynchronous Read (Recommended)
// const fs = require('fs');
// fs.readFile('F:/JS-Node.js-Practice/first.js', 'utf8', (err, data) =>{
//     if (err){
//         console.log ("Error occurred...");
//         return;
//     };
//     console.log(data);
// });

// Output show all the data inside first.js file and show on the terminal 
// because I gave first.js file path in the above code for reading a file.
///////////////////////////////////////////////////////////////////////////

// Sychronous Read(Blocking)
//  const fs = require('fs');
//  const data = fs.readFileSync('F:/JS-Node.js-Practice/server.js', 'utf8');
//  console.log(data);

 // Output will show the same file data because I gave server.js file path 

///////////////////////////////////////////////////////////////////////////

// File system 
// wirting a File
// writing means putting data inside a file.
// it create a file a well by the name of data.js
const fs = require('fs');
fs.writeFile('data.js', 'Hello world Noor rahman12', (err) =>{
    if (err) throw err;
    console.log("file created successfully");
})