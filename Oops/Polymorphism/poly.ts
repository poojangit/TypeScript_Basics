//todo ----------POLYMORPHISM----------

//^ Its an ability of an object, function,methods to take on multiple forms.
//^ It allows same operation to behave differently on different classes or types.
//^ It is Implemented through -
//! Method overloading(compile time polymorphism)
//! Method overriding(run time polymorphism)

//^ Method Overloading 
//! It allows multiple function signatures for the same method
//! the implementation will be provided only once and ts will resolve the correct signature based on how the method is called.

//~ Example 1
class Calc {
    add(a: number, b: number) : number
    add(a: string, b: string) : string
    add(a: any, b : any) : any{
        return a+b
    }
}
const calc = new Calc()
console.log(calc.add(10,20));
console.log(calc.add('Hello', 'world'))

//^ Method Overriding
//! Method overriding occurs when subclass provides its own implementation of a method defined in its parent class

//~ Example 1
class Brain{
    functioning() : void {
        console.log("Brain is functionling");
    }
}
class Consious extends Brain {
    functioning(): void {
        console.log("Brain is functioning along with my consious mind");
    }
}
class subConsious extends Brain {
    functioning(): void {
        console.log("Subconsious mind is dead");
    }
}
const fetchBrainFunction : Brain[] = [new Consious(), new subConsious(), new Brain()]
fetchBrainFunction.forEach(brain => brain.functioning())