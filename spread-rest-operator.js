// Spread Operator 
// Spead means expand or unpack values and it is used to copy or combine array/object.

// const arr1 = [1, 2, 3]
// const arr2 = [...arr1];
// console.log(arr2);
// it copy arr1 into arr2.
//////////////////////////////////////
// Merge array
// const a =[1, 2];
// const b =[3, 4];
// const merge =[...a, ...b];
// console.log(merge);

// it combine the arrays and the out will be [1, 2, 3, 4]
////////////////////////////////////////////////////////////////////////////
// Spread with Object 
// const student ={
//     name: "Noor",
//     age: "22"
// }
// const newstudent ={...student, city: "Peshawar"};
// console.log(newstudent);

// the output will be {name: 'Noor', age: '22', city: 'Peshawar'}

////////////////////////////////////////////////////////////////////////////////////////
// Rest Operator (...)
// Rest means collect remaing values.

// Rest in Function
// function sum (...numbers){
//     return numbers.reduce((total, num)=> total + num, 0);
// }
// console.log(sum(1, 2, 3, 4));

// Output will be 10.
//////////////////////////////////
// Rest in Array destructing 
// const numbers = [1, 2, 3, 4];
// const [first, ...rest] = numbers;
// console.log(first);
// console.log(rest);

// the output will be  1 and [2, 3, 4]