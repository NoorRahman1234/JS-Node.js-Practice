// try...Catch 
// Syntax
// try {
    
// } catch (error) {
    
// }

/////////////////////////
// Example
// try {
    
//     console.log(x);  // x is not define 
// } catch (error) {
    
//     console.log("An error occured");
// }

// Output will be An error occured
///////////////////////

// Example 2
// try {

//     console.log(x);
// } catch (error) {
//     console.log("Error Name:", error.name);
//     console.log("Error message:", error.message);
// }finally{
//     console.log("Always run");
// }

////////////////////////
// Example 3
// try {
//     let age = 15;
//     if (age < 18){
//         throw new Error("you are underage");
//     }
//     console.log("access granted");
// } catch (error) {
//     console.log(error.message);
// }