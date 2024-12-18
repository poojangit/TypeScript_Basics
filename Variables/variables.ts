//todo ---------------Variables---------------------------

//! var - older variable declaration keyword in javascript
//! let - introduces block-scoping and declares an immutable variables
//! const - declares an immutable variable and preferred for most cases in Typescript

//^ Var
//! it declares variables with function scope or block scope
//! Hoisting : variables declared with var are moved to the top of their scope during the compilation phase

// console.log(ename) //?  error in code and output will be undefined
// var ename = "Rohith"

//^let
//! It follows the same syntax as var declarations
//! let introduces block-scoping to variables
//! Benifits :
//! let avoids variable hoisting: Variables declared with let are not hoisted
//! Provides better scoping : Variables are confined to the block where they are declared
//! Enchances the code readability and maintainability

// if(true){
//     let count = 10
//     console.log(count);
// }
// console.log(count); //? error as count is not defined

export
let ename = "kavya"
let typedName: string = "kavya"
console.log(ename)
console.log(typedName);

//^ between var and let
//! let is preferable over var
//! let is block scoped let varibles cannot be read or written to before they are declared
//! let variables cannot be re-declared

//^ const
//!const declares an immutable variables that cannot be ressigned
//! Immutable variables are useful for constants or values that should not be changed

// const pi = 3.14
// pi = 3.781 //? error cannot assign the pi

//^ Benefits of const

//! ensures immutablibity: prevents accidental ressignment of values
//! improves code robustness : immutable variables can't be modified, reducing potential bugs
//! Expresses intent : Indicates that a variables value should not change

//^ diff b/w let and const
//! let allows reinitialization of variables. while const does not
//! let can be declared without an initial value, but const requires initialization.

let count : number
count = 10
console.log(count)
// const PI : number //? const declaration is must

//^ choosing between let and const
//! choose let when values needs to be changed over time
//! choose const for values that should remain constant
//! it is advisable to use const in typescript as it helps improve code clarity and prevents accidental modifications.

//^ considerations for const 
//! const does not make objects or arrays immutable, only their assignment
//! properties of const objects can be modified

const product = {
    pname : "mobile",
    price : 10000
}
// product = { //? cannot assign because it is a constant
//     pname : "charger",
//     price : 188
// }