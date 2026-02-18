 // Array
 // Array created using literal notation
  // const fruits = ["Apple", "Mango"]
  // console.log(fruits.length);
  /////////////////////////////////////////////////////////////////////////////////////
// array created using the array() constractor.
// const fruits2 = new Array("Peach", "Banana", "Strabery");
// console.log(fruits2.length);

/////////////////////////////////////////////////////////////////////////////////////
// Array created using String.prototype.split()
// const fruits3 = "Apple, Banana".split(", ");
// console.log(fruits3.length);

/////////////////////////////////////////////////////////////////////////////////////

//  Map method
// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumers.map((num)=> {
//    return (num + 10);
// });
// console.log(newNums);      // new array output 
// console.log(myNumers);     // orignal array output

/////////////////////////////////////////////////////////////////////////////////////

// Filter and chaning method of an array
// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumers
//                     .map((num) => num * 10)
//                     // .map((num) => num + 1)
//                     // .filter((num) => num >= 40)
// console.log(newNums);


// Convert Name to UpperCase
const names = ["noor", "ali", "ahmad"];

const upperNames = names.map((name) => name.toUpperCase());

console.log(upperNames);
// ["NOOR", "ALI", "AHMAD"]

