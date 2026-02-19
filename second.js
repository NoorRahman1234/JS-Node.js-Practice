// Object
// Object Literal Example
// const student ={
//    name: "Noor",
//    age: "22",
//    add: "Peshawar"
// };


// for (let key in student) {
//    console.log(`${key} : ${student[key]}`);
// }
// console.log(student);
// It will print all the keys and values in the object
///////////////////////////////////////////////////////////////////
// if we want to print one key and its values so we can do like this
// const student1 ={
//    name: "Noor",
//    age: "22",
//    add: "Peshawar"
// };
// console.log("name :" + student1.name);


// Example No 3
// Accessing object using different console 
// const symbol = "MyKey1"
// const JsUser = {
//     name: "Noor",
//     age: "22",
//     [symbol]: "Mykey1",
//     location: "Peshawar",
//     email: "rahmanafr@gmail.com",
//     isLoggedIn: "false",
//     lastLoginDays: ["Monday", "Saturday"]
// }
// console.log(JsUser);
// console.log(JsUser["email"]);

/////////////////////////////////////////////////////
// Object Destructuring 
// Destructuring means Extracting any value from an object
// const course ={
//     coursename: "IT",
//     price: "20000",
//     courseinstructor: "Teacher"

// }
// const {coursename, price} = course
// console.log(coursename, price);