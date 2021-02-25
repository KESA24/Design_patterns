// Description
// cost

/*Figure out what methods are common to both the primary component 
and the optional layers. Create a component interface and declare those methods there.
*/ 
abstract class Katogo{
    public description : string;
    public getDescription(){
        return this.description;
    }
    public abstract cost() : number;
}

// Create a concrete component class and define the base behavior in it.
class KatogoA extends Katogo{
    public description = "Cassava and Beans";
    public cost() : number {
        return 3000;
    }
}

class KatogoB extends Katogo {
    public description = "Cassava, Beans, Avocado";

    public cost() : number{
        return 3500;
    }
}

/*Create a base decorator class. 
It should have a field for storing a reference to a wrapped object. 
The field should be declared with the component interface type to allow linking to concrete components as well as decorators. The base decorator must delegate all work to the wrapped object.
*/ 
abstract class KatogoOptions extends Katogo {
    decoratedkatogo: Katogo;
    public abstract getDescription() : string;
    public abstract cost(): number;
}

/*Create concrete decorators by extending them from the base decorator. 
A concrete decorator must execute its behavior before 
or after the call to the parent method (which always delegates to the wrapped object).
*/ 

class KatogowithChicken extends KatogoOptions {

    decoratedkatogo: Katogo;

    constructor(katogo: Katogo){
        super();
        this.decoratedkatogo = katogo;
    }
    public getDescription(): string{
        return this.decoratedkatogo.getDescription() +  " , with chicken";
    }
    public cost (): number {
        return this.decoratedkatogo.cost() + 2000;
    }
}

class KatogoWithFish extends KatogoOptions{
    decoratedKatogo: Katogo;

    constructor(katogo: Katogo){
        super();
        this.decoratedKatogo = katogo;
    }

    public getDescription():string{
        return this.decoratedKatogo.getDescription() + ", with fish";
    }

    public cost():number{
        return this.decoratedKatogo.cost() + 4000;
    }
}

/*The client code must be responsible for creating decorators and composing them in the way the client needs.*/ 

let jacobKatogo = new KatogoA();
jacobKatogo = new KatogowithChicken(jacobKatogo);
console.log(jacobKatogo.cost());
console.log(jacobKatogo.getDescription());


let patKatogo = new KatogoB();
patKatogo = new KatogoWithFish(patKatogo);
console.log(patKatogo.cost());
console.log(patKatogo.getDescription());
