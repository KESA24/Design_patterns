// Multilevel Inheritance

// This is the original Animal class
class Animal {   
    eat():void {   
        console.log("Eating") ; 
     } ;  
} ; 

// Dog inherits from Animal

class Dog extends Animal {   
   bark():void {   
      console.log("Barking") ; 
   } ;  
} ;
// Class BabyDog inherits  from both  Dog and Animal. 

class BabyDog extends Dog{   
    weep():void {   
        console.log("Weeping") ;  
     } ; 
}  ;
let obj = new BabyDog();   
obj.eat();  
obj.bark();  
obj.weep() 