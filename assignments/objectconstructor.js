
// Object Constructors

function Person(name, age, sex, race) {
    this.pnames = name;
    this.page = age;
    this.psex = sex;
    this.prace = race;
}

// Using "new" keyword to create objects from the constructor function

var myFather = new Person ("Sheldon","45", "Male", "White");
var myMother = new Person ("Amy","40","Female","Black");