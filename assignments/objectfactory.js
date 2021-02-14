// Object Factory

// Object factory using the object.create method
// Creates a new object using an existing object as the prototype of the new object

const description = {
    fulldescription(){
        return "This car is a "+ " " + this.color + " " + this.brand;
    }
}

function createCar(color, Brand) {
    let car = Object.create(description);
    car.color = color;
    car.brand = Brand;

    return car;
    
}

let car1 = createCar("Red", "Volkswagen.");
let car2 = createCar("Blue", "Bayerische Motoren Werke.");

console.log(car1.fulldescription());
console.log(car2.fulldescription());


// // Factory Function
function createCars(colors, brands) {
  return {
    carColor: colors,
    carBrand: brands,
    fullDescriptions() {
      return "This car is a " + " " + this.carColor + " " + this.carBrand;
    },
  };
}

let car3 = createCars("Red", "VW");
let car4= createCars("Blue", "BMW");

console.log(car3.fullDescriptions());
console.log(car4.fullDescriptions());

