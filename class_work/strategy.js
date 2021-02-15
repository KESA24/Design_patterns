
// Context class
class Commute {
    travel(transport){
        return transport.travelTime();
    };
};


// Interface
class vehicle {
    travelTime(){
        return this.timeTaken;
    };

};

// Strategy 1
class Bus extends vehicle{
    constructor(){
        super();
        this.timeTaken = 30;
    };
};
// Strategy 2
class Taxi extends vehicle{
    constructor(){
        super();
        this.timeTaken = 15;
    };
};
// Strategy 3
class Bicycle extends vehicle{
    constructor(){
        super();
        this.timeTaken = 10;
    };
};

// Strategy usage

const commute = new Commute();

console.log(commute.travel(new Bus()));
console.log(commute.travel(new Taxi()));
console.log(commute.travel(new Bicycle()));



