//todo ----------abstract class------------

//^ Abstarct class define a base class that cannot be instantiated. 
//^ can contains Abstract methods - methods without implementation
//^ can contains concrete methods - methods with implemenation
export
abstract class Vehical {
    constructor(public name : string) {

    }
    abstract move() : void 
    stop() : void {
        console.log(`${this.name} has stopped`)
    }
}
class Car extends Vehical {
    move(): void {
        console.log(`${this.name} is driving on the road`)
    }
}
class Airplane extends Vehical{
    move() : void {
        console.log(`${this.name} is flying in the sky`)
    }
}
const car = new Car('Tayota')
car.move()
car.stop()

const airplane = new Airplane('Boeing 747')
airplane.move()