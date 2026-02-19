// Object Methods in js
// Object.Keys() method
// object.values() method
// object.entries() method
// Return all keys of an object in an array
// const student ={
//     name: "Noor",
//     age: "22",
//     add: "Peshawar"
// }
// console.log(Object.keys(student));      // Return all key of an object in an array
// console.log(Object.values(student));    // Return all values of an object
// console.log(Object.entries(student));   // convert object into array of key-values pair.  
/////////////////////////////////
// Object.assign() method
// const obj1 = { a: 1 };
// const obj2 = { b: 2 };

// const result = Object.assign( obj1, obj2);
// console.log(result);

// output will be {a: 1, b: 2}
/////////////////////////////

// Object.freeze() method
// freeze() prevents modification of an object
// const student = {
//     name: "Noor",
//     age: "22",

// }
// object.freeze(student);
// student.age = 25; 
// student.city = "Peshawar"
// delete student.name;
// console.log(student);