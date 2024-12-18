//todo --------------Inheritance----------------------

//^ allows one class to inherit the properties and methods of another class
//^ The child class can override or extend the properties of parent class
//^ super - used to call the constructor or methods of the parent class

//~ Example 1

export{}
class Animal {
    name : string
    constructor(name : string){
        this.name = name
    }
    eat() : void {
        console.log(`${this.name} is eating`);
    }
}
class Dog extends Animal{
    bark(): void {
        console.log(`${this.name} says boww`);
        
    }
}
const dog = new Dog("Brownie")
dog.eat()
dog.bark()

//~ Example 2
//& super keyword

class Vehical {
    public brand : string
    constructor(brand : string){
        this.brand = brand
    }
    start(): void {
        console.log(`${this.brand} is starting`)
    }
}
class Tayota extends Vehical {
    model : string
    constructor(brand : string, model : string){
        super(brand)
        this.model = model
    }
    start(): void {
        super.start()
        console.log(`${this.brand} ${this.model} is ready to start`);  
    }
}
const tayota = new Tayota("Tayota", "Carolla")
tayota.start()

//& Overriding methods

class Greeting {
    constructor(public eName : string){
        this.eName = eName
    }
    greet(): void {
        console.log(`Hello ${this.eName}`)
    }
}
class employee extends Greeting{
    constructor(public eName : string){
        super(eName)
    }
    greet(): void {
        console.log(`Hello ${this.eName}! Wecome to our company!!`)
    }
}
const emp = new employee("Pooja")
emp.greet()