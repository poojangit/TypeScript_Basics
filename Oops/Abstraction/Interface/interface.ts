//todo ----------Interface-----------------

//^ Interfaces in typescript provide a way to define a contract for classes or objects.
//^ Cannot contain implementation
//^ Can be implemented by multiple classes
//^ can describe the shape of an object or function
//^ can be used to make parameters cleaner and reusable
//^ Interface do not compile to javascript
//^ They are purely for typescrits's type checking system
//^ Interface is purely for type checking at compile time

//^ when to use interface ?
//! When you only care about the structure of an object
//! when there is no behaviour or methods to include

//^ when to use class?
//! when you need both properties and methods
//! when we need to instantiate multiple objects with the same structure and functionality

//^ Real time usecase
//! API contracts
//! database models

//~Example 1

// interface Work {
//     write() : void
// }
// interface Exercise {
//     yoga() : void
// }
// class Health implements Work {
//     write(): void {
//         console.log(`Writing is important for a healthy understanding`);   
//     }
// }
// class Heart implements Exercise {
//     yoga(): void {
//         console.log(`Exercising is good for healthy heart beat`)
//     }
// }
// const program = new Health()
// program.write()

// const pushUp = new Heart()
// pushUp.yoga()

//~ Example 2
// export
// interface employee {
//     firstName : string,
//     lastName : string,
//     ID : number
// }
// function getEmployeeDetails(empDetails : employee){
//     console.log(empDetails.firstName);
//     console.log(empDetails.lastName);
//     console.log(empDetails.ID); 
// }
// getEmployeeDetails({
//     firstName : "Pooja",
//     lastName : "N G",
//     ID : 1002
// })

//~Example 3 - api contracts - data recived from the api
export
interface User {
    id : number
    name : string
    email : string
    isActive : boolean
}
function getUserDeatials(user : User): void {
    console.log(`User name ${user.name}, email : ${user.email}`);
} 
// simulating the api response

const user : User = {
    id : 1,
    name : "Pooja",
    email : 'poojang147@gmail.com',
    isActive : true
}
getUserDeatials(user)

//~ Example 4 - database models - representing a database entity

interface Product {
    id : number
    name : string
    price : number
    category : string
    isInStock : boolean
}
function displayProduct(product : Product) : void {
    console.log(`Product : ${product.name}, Price : ${product.price}, IsInSrock : ${product.isInStock}`);
}
const product : Product = {
    id : 100,
    name : "pencil",
    price : 10,
    category : "Laptop",
    isInStock : true
}
displayProduct(product)