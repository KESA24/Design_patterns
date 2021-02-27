// Implementation Interface
interface Horse_Power {
    quantity(): number;
}

// Abstraction class that references the Implementation Interface
 abstract class tractor {
     horsepower : Horse_Power;
     constructor (horsepower: Horse_Power){
         this.horsepower = horsepower
     }

     specs(){
         console.log(`This is a ${this.horsepower}hp tractor.`);
         
     }
     
 }

//  Concrete Implementations

class smallTractor implements Horse_Power{
    quantity(){
        return 100;
    }
}

class  mediumTractor implements Horse_Power{
    quantity(){
        return 150;
    }
}

// Refined Abstractions
class JD extends tractor {
    constructor(horsepower: Horse_Power){
        super(horsepower)
    }
    specs(){
        console.log(`This is a ${this.horsepower.quantity()}hp John Deere tractor`);
        
    }
}

class MF extends tractor {
    constructor(horsepower: Horse_Power){
        super(horsepower)
    }
    specs(){
        console.log(`This is a ${this.horsepower.quantity()}hp Massey Ferguson tractor`);
        
    }
}

// Instantiate
let newJD = new JD (new mediumTractor())
newJD.specs();

let newMF = new MF (new smallTractor())
newMF.specs();

