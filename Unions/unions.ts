//todo ----------UNION-----------------------

// ^ Union type is a way to declare that a variable , parameter, or return type can hold one of several types.
// ^ It allows us to combine multiple types into a single type, increasing flexibility while maintaining type safety

//~ Example 1

// let data : number | string
// data = 10
// data = "Product"
// data = true  //? Error because boolean is not assignable to type string or number
// console.log(data)

//~ Example 2 - with functions

// function output(value : string | number){
//     if(typeof value === "string"){
//         console.log(`String : ${value}`)
//     } else {
//         console.log(`Number : ${value}`)
//     }
// }
// output("Hello Pooja")
// output(2006)

//~ Example 3 - with arrays 

// let values : (string | number) []
// values = ["hello", 42, "value", 89]
// console.log(values)

//~ Example 4 - Interfaces 

interface Dog {
    breed : string
}
interface Cat {
    color : string
}
type Pet = Dog | Cat
const myPet : Pet = {breed : "Golden Retriever"}
console.log(myPet)