// Async and Await in js
// function fetchData(){
//       return new Promise((resolve)=>{
//             setTimeout(() =>{
//                 resolve("Data recieved");
//             }, 4000);
//     });
// };
// async function getData(){
//     console.log("Data is fetching");
//     let data = await fetchData();
//     console.log(data);
// }
// getData();
//////////////////////////////////////////

// Testing with dummy API fetch (like JSON Placeholder)
async function getuser(){
    try {
        
        console.log("fetching data...");
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        // convert response to JSON
        const data = await response.json();
        console.log("User data ..");
        console.log(data);  
    } catch (error) {
        console.log("Error", error);
        
    }

}
getuser();


