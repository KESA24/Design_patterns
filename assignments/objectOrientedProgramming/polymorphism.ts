
//  Subtype Polymorhism

class Human {
    myname: string
    constructor(name) {
      this.myname = name
    }
  
    sayHi() {
      console.log(`Hi! My name is ${this.myname}`)
    }
  }

//   Create a derivative object from the parent object Human
  class Developer extends Human {

  }

// Create another derivative object from the parent object
  class Designer extends Human {
    
  }

const zell = new Human('Zell')
const vincy = new Developer('Vincy')
const tim = new Designer('Tim')

zell.sayHi() // Hi! My name is Zell.
vincy.sayHi() // Hi! My name is Vincy. I am a developer.
tim.sayHi() // Hi! My name is Tim. I am a designer.


