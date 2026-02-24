
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
// it create a file as well by the name of data.js
// const fs = require('fs');
// fs.writeFile('data.js', 'Hello world Noor rahman12;', (err) =>{
//     if (err) throw err;
//     console.log("file created successfully");
// })

///////////////////////////////////////////////////////////////////////////

// Append Data
// Append means add new file or new text or data 
// const fs = require('fs');
//  fs.appendFile('data.js', '\n New line added;',(err)=>{
//     if(err) throw err;
//     console.log(' Data appended');
// });
///////////////////////////////////////////////////////////////////////////

// creating a directory (Folder)
// mkdir menas make a directory (folder)
// const fs = require('fs');
// fs. mkdir('myfolder1', (err)=>{
//     if (err) throw err;
//     console.log('folder created');
// })
// Output it will create a folder in the main directory by the name of myfolder
///////////////////////////////////////////////////////////////////////////

// Create Nested folder
// Nested means foler inside another folder
// const fs = require('fs');
// fs.mkdir('parent/child', {recursive: true}, (err) =>{
//     if (err) throw err;
//     console.log('Nested folder created');

// });
// output will be create a Nested folder linke this parent/child
///////////////////////////////////////////////////////////////////////////

// Deleting a file
// const fs = require ('fs');
// fs.unlink('data.js', (err)=>{
//     if (err) throw err;
//     consolo.log('file deleted');
// });

// it will delete a file by the name of data.js
///////////////////////////////////////////////////////////////////////////
// Deleting a folder
// const fs = require ('fs');
// fs.rmdir('myfolder1', (err)=>{
//     if (err) throw err;
//     consolo.log('folder deleted');
// });

// it will delete a folder by the name of myfolder1

// //////////////////////////////////////////////////////////////////

// Mini Project
// const fs = require('fs');

// const command = process.argv[2];
// const fileName = process.argv[3];
// const content = process.argv[4];

// if (command === 'create') {
//     fs.writeFile(fileName, content, (err) => {
//         if (err) throw err;
//         console.log('File created!');
//     });
// }
// else if (command === 'read') {
//     fs.readFile(fileName, 'utf8', (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     });
// }
// else if (command === 'delete') {
//     fs.unlink(fileName, (err) => {
//         if (err) throw err;
//         console.log('File deleted!');
//     });
// }
// else {
//     console.log('Invalid command');
// };

// Output 
// node server.js create test.txt "Hello brother"
// node server.js read test.txt
// node server.js delete test.txt
// first it will create a text file by the name of text.txt inside a file there will (Hello brother)
// then it will read what ever we have inside a file 
// and then it will delete a file 