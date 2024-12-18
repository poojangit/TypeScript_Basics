//todo -----------Classes ----------------

//^ Type script are the behaviour for creating objecs, encapulating data and behavior
//^ they enhance javascript classes with additional features like strong typing, access modifiers, and abstract classes.

//~Example 1

// class Details {
//     name : string
//     age : number
//     constructor(name : string ,age : number){
//         this.name = name
//         this.age = age
//     }
//     greet(): void {
//         console.log(`Hello ${this.name}, are you ${this.age}`);  
//     }
// }
// const person1 = new Details("Pooja", 20)
// person1.greet()

//~ Example 2 - default values can be assigned
export{}
class Animal1 {
    animalName : string;
    family : string;
    constructor(animalName : string, family: string = "Mammals" ){
        this.animalName = animalName
        this.family = family
    }
    display() : void {
        console.log(`${this.animalName} is a ${this.family}`);
        
    }
}
const animal2 = new Animal1("Dog")
animal2.display()
console.log(animal2.animalName);

//~ Example 3
//& Access modifilers

//! public - 
//! private -
//! protected

class BankAccount {
    private balance : number
    constructor(oldBalance : number){
        this.balance = oldBalance
    }
    public deposit(amount : number): void {
        this.balance += amount
        console.log(`Deposited : ${amount} . New Balance : ${this.balance}`);
        
    }
    public withdraw(amount : number) : void {
        if(this.balance < amount){
            console.log("Insufficient balance");
        } else {
            this.balance -= amount
            console.log(`withdrawed : ${amount}. Remainning balance : ${this.balance}`);  
        }
    }
}
const amount = new BankAccount(1000)
amount.deposit(500)
amount.withdraw(100)
amount.withdraw(10000)

//& Readonly properties

class Book {
    readonly title : string
    constructor(title:string){
        this.title = title
    }
}
const book = new Book("It Ends with us")
console.log(book.title)
// book.title = "new" //! error


