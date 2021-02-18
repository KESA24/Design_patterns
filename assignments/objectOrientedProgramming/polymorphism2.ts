// Method Overriding

class Human {
    myname: string
    constructor(name) {
      this.myname = name
    }
  
    sayHi() {
      console.log(`Hi! My name is ${this.myname}`)
    }
  }


  class Developer extends Human {

    // We override the method sayhi to include more text than it had in class human
    sayHi() {
      console.log(`Hi! My name is ${this.myname}. I am a developer.`)
    }
  }


  class Designer extends Human {
    sayHi() {
      console.log(`Hi! My name is ${this.myname}. I am a designer.`)
    }
  }

const kesa = new Human('Kesa')
const marie = new Developer('marie')
const jacob = new Designer('Jacob')

kesa.sayHi() 
marie.sayHi() 
jacob.sayHi() 