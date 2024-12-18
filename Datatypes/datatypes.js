//todo ---------Variables---------------
//^Types of variables
//! Number
//! String
//! Boolean
//! Null
//! Undefined
//! Arrays
//! Tuple
//! Enum
//! Unknown
//! Any
//! Void
//~Example 1
// let a = 10
// a = 'Hello'
// a = 20
// let x 
// x = 10
// x = 10
//~ Example 2
// let num1 : number = 10
// console.log(num1)
// let myName : string = "Pooja"
// console.log(myName)
// let married : Boolean = false
// if(married){
//     console.log(`My name is ${myName} and i'm married`);  
// }
// else
// console.log(`My name is ${myName} and im not married`);
//~ Example 3
// let m : undefined = undefined
// let n : null = null
// let y 
// console.log(m);
// console.log(n);
// console.log(y);
//~ Example 4 - Array
var arr1 = [1, 2, 3];
console.log(arr1);
var arr2 = [1, 2, 3];
console.log(arr2);
console.log(arr1[2]);
//~ Exaple 5 - Tuple - for fixed values but different types
var tuple1;
tuple1 = [10, "Pooja"];
// tuple1 = ["Hello", 100]
console.log(tuple1);
console.log(tuple1[1].substring(1));
//~Example 6 - Enum - giving more friendly names to sets of values
var Color;
(function (Color) {
    Color[Color["Blue"] = 9] = "Blue";
    Color[Color["Green"] = 10] = "Green";
    Color[Color["Red"] = 11] = "Red";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c);
var colorName = Color[9];
console.log(colorName);
//~ Example 7 - Unknown -when discribing the variable without knowing the type of values it may have to store
var notSure = 4;
// notSure = "pooja";
console.log(notSure);
//~ Example 8 - any - when not knowing the type of the value, can opt out of type checking using any
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
var obj = { x: 0 };
// obj.foo()
// obj()
// obj.bar = 100
// obj = "Hello";
console.log(obj);
// let anyValue : any 
// console.log(anyValue);
// anyValue = 10
// anyValue = "Helo"
// anyValue = true
// anyValue()
// console.log(anyValue());
// console.log(anyValue.toUpperCase());
//~ Example 9 - void - absence of any type, commonly used as return type of functions that do not return any value
// function myFunction() : void {
//     console.log("Hello");
// }
// myFunction()
//~ Example 10 - union - where we can add multiple types for same variable
// let peopleAllowed : number|boolean
// peopleAllowed = 10
// peopleAllowed = false
// peopleAllowed.valueOf()
// console.log(peopleAllowed);
