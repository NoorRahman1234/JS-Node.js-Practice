// console.log("Hi Noor");
// document.write("Hi Noor..")

// let a = "yahoo-baba";
// document.write(a);             // it shows the out put on browser

/////////////////////////////////////////////////
// var x=25;                       
// console.log(x);                 // typeof x is  string 

/////////////////////////////////////////////////
// var x =true;
// console.log(x);                  // typeof x is  boolean

/////////////////////////////////////////////////
// var x=["html","Css","js"];
// console.log(x);                      // typeof x is  object because array typeof shows object

/////////////////////////////////////////////////
// var x={ 
//     fname:"Ali",
//     lname:"Khan",
//     age:"23"
// }
// console.log(x ,typeof x);                // typeof x is  object object
 
/////////////////////////////////////////////////
// var x= null;
// console.log(x);                             // typeof x is  null

/////////////////////////////////////////////////
// var x;
// console.log(x);                              // typeof x is  undefine because we didn't pass any values to x





//////////////////////////////////////////////////////////////////////////////////////////////////
  // FUNCTIONS
 // Function syntax in js
//  function functionName(){    // function definition

//  statment
//  }
//  functionName();     //function calling

// EXAMPLE
// function hello(){
//     console.log("Hello Noor Rahman");
// }
// hello();

//////////////////////////////////////////////////////////////////////////////////////////////////

// FUNCTION WITH PATAMETER

// Var a =10;
// var b =20;
//doument.write(a+b);


// Var a =30;
// var b =40;
//doument.write(a+b);


// Var a =25;
// var b =55;
//doument.write(a+b);

// Syntax
// function functionName(parameter1, parameter2){
//     statement
// }
// functionName(argument1, argument2);

 //Example
//  function Sum(a,b){
//     console.log(a+b);
//  }
//  Sum(10,20);
//  Sum(50,40);

//////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCTION WITH return
// Syntax
// function functionName(parameter1, parameter2){
//     statement
//     return value
// }
// var a = functionName(argument1, argument2);


//EXAMPLE
// function sum (math,eng,sc){
//     var s = math + eng + sc;
//     return s;
// }
// function percentage(tt){
//     var per = tt/300*100;
//     console.log(per);
// }
// var total = sum(80, 50 ,80);
// percentage(total);

/////////////////////////////////////////////////////////////////////////////////////
// ARROW FUNCTION
// Syntax
// let hello =() => console.log("Hello");
// hello();

// Example
// let welcome = (name, age) => {
//     return ` "Hello and welcome" ${name}-${name}`
// }
// console.log(welcome ("yahoo Baba", 25));

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
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