// Promise in Js 

// const myPromise = new Promise((resolve, reject) => {
//     let success = false;  // change to false to test rejection

//     if (success) {
//         resolve("Operation successful");
//     } else {
//         reject("Operation failed");
//     }
// });

// myPromise
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));


// Example No 2
// Only use try/catch if some code inside might throw an error:
 const myPromise = new Promise ((resolve, reject) =>{
 try {
    let success = false;
    if (success){
        resolve("Operation successfull");
    }
      else {
        reject("Operation failed");
    }
    
 } catch (error){
    reject("Something went wrong" +error.message);
  
 }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));