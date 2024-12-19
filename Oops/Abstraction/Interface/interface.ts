//todo ----------Interface-----------------

//^ Interfaces in typescript provide a way to define a contract for classes or objects.
//^ Cannot contain implementation
//^ Can be implemented by multiple classes
//^ can describe the shape of an object or function

interface Work {
    write() : void
}
interface Exercise {
    yoga() : void
}
class Health implements Work {
    write(): void {
        console.log(`Writing is important for a healthy understanding`);   
    }
}
class Heart implements Exercise {
    yoga(): void {
        console.log(`Exercising is good for healthy heart beat`)
    }
}
const program = new Health()
program.write()

const pushUp = new Heart()
pushUp.yoga()