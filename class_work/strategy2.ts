/* The strategy Pattern
   ---------------------
   Traveler
        - Short Route Travler
        - Medium Route Traveler
        - Long Route Traveler

   TravelMeans
        -ByBicyle
        -ByTax
        -ByBus
*/

/*
Step 1: Identify the aspects of the Context class that vary (across subtypes and / or objects).
Step 2: Separate the aspects of the class that vary from those that don’t.
Step 3: Encapsulate what varies / what is separates (Create a supertype, i.e. Interface or Abstract class). This serves as the (Strategy / Policy identifier).
Step 4: Program to an interface (Abstraction), not implementation. Create concrete implementations of the Strategy whereby each extends an abstract class or implements an interface.
Step 5: In the context class, create a variable of type as the supertype of the strategy (Let it’s type not be any of the concrete implementations of the strategy supertype). This variable can possibly be protected.
Step 6: In the context class, Create a setter method for the variable created in step 5.
Step 7: In the context class, Create a method to be used for executing the abstract method in the strategy
Step 8: Test for whether the The Strategy Pattern is implemented successfully.
*/

// Travel Strategy SuperType

interface TravelStrategy{
    travel(): any
}


// Travel Strategy concrete Implementations
class TravelByBus implements TravelStrategy{
    travel(){
        console.log("Traveling by Bus")
    }
}

class TravelByTax implements TravelStrategy{
    travel(){
        console.log("Traveling by Tax")
    }
}

class TravelByBicycle implements TravelStrategy{
    travel(){
        console.log("Traveling by Bicycle")
    }
}

class TravelByPlane implements TravelStrategy{
    travel(){
        console.log("Traveling by Plane")
    }
}

// /Travel is the context class.
class Traveler{
    // Variables
    protected travelStrategy:TravelStrategy;

    // Methods
    travel(){
        // The choice of the travel strategy is by delegation and composition
        this.travelStrategy.travel();
    }

    // Strategy Setter
    public setTravelStrategy(travelStrategyArg:TravelStrategy){
        this.travelStrategy = travelStrategyArg
    }
}

// Specific Travelers (They are Travelers)
class ShortRouteTraveler extends Traveler{
    travel(){
        console.log("I am a short route traveler");        
        this.travelStrategy.travel();
    }
}

class MediumRouteTraveler extends Traveler{
    travel(){
        console.log("I am a Medium route traveler");        
        this.travelStrategy.travel();
    }
}


class LongRouteTraveler extends Traveler{
    travel(){
        console.log("I am a Long route traveler");        
        this.travelStrategy.travel();
    }
}

class InternationalTraveler extends Traveler{
    travel(){
        console.log("I am an International traveler");        
        this.travelStrategy.travel();
    }
}

 // A Traveler who cam polymorphically travel

 let traveler: Traveler;
// This code is just for testing Purposes

// Ashort route traveler who wants to travel by Bus
traveler = new ShortRouteTraveler()
traveler.setTravelStrategy(new TravelByBus())
traveler.travel()



// A long route traveler who wants to travel by Bus
traveler = new LongRouteTraveler()
traveler.setTravelStrategy(new TravelByBus())
traveler.travel()


// A medium route traveler who wants to travel by Bicycle
traveler = new MediumRouteTraveler()
traveler.setTravelStrategy(new TravelByBicycle())
traveler.travel()

// An international traveler who wants to travel by Bicycle
traveler = new InternationalTraveler()
traveler.setTravelStrategy(new TravelByBicycle())
traveler.travel()

// An international traveler who wants to travel by Plane
traveler = new InternationalTraveler()
traveler.setTravelStrategy(new TravelByPlane())
traveler.travel()
