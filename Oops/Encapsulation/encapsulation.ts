//todo -----------Encapsulation-----------

//^ It is one of the core principal of oops where the internal state of an object is hidden from the outside world and can only ne accessed or modified through public methods (getters and setters)
//^ In typescript, encapsulation is implemented using access modifiers.
//^ These modifiers determine the visibility and accessibility of class properties and methods.
//^ access modifiers are  -
//! public
//! private
//! protected

//~ Example 1
export
// class Employee {
//     private name : string
//     public id : number
//     constructor(id: number, name : string){
//         this.id = id
//         this.name = name
//     }
//     public getName() : string {
//         return this.name
//     }
//     public setName(newName : string): void {
//         if(newName.length > 0){
//             this.name = newName
//         }
//         else {
//             console.log("Name must not be empty")
//         }
//     }
// }
// const emp = new Employee(1,"poo")
// console.log(emp.getName())

// emp.setName("priya")
// console.log(emp.getName())

//~ Example 2

class Person {
    protected name : string
    constructor(name : string){
        this.name = name
    }
}
class Employee extends Person{
    public getEmployeeDetails() : string {
        return this.name
    }
}
const emp = new Employee("Aryan")
console.log(emp.getEmployeeDetails())
// emp.name = "Diya" //? error - property is protected which is only accessable within the class or subclass

//~ Example 3

class BankAccount {
    private bankBalance : number = 0
    
    public get getBankBalance () : number {
        return this.bankBalance
    }
    public set setBankBalance(account : number) {
        if(account>= 0){
           this.bankBalance = account
        }
        else {
            console.log("Bank balance accont be negative")
        }
    }
}
const bank = new BankAccount()
bank.setBankBalance = 200
console.log(bank.getBankBalance)

//~ Example 4

class Product {
    private price : number
    constructor(private name : string, price : number){
        this.price = price
    }
    public get Price() : number{
        return this.price
    }
    public set Price(amount : number){
        if(amount > 0){
            this.price = amount
        } else {
            console.log("Price must be positive")
        }
    }
    public get getName() : string {
        return this.name
    }
    public displayProductInfo() : void {
        console.log(`Product ${this.name} , price : ${this.price}`);
    }
}

const product = new Product("Mobile", 1000)
product.displayProductInfo()
product.Price = -100
product.displayProductInfo()
product.Price = 100
product.displayProductInfo()