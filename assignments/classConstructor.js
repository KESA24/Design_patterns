class Car {
    constructor(brand) {
      this.carbrand = brand;
    }
    present() {
      return 'I have a ' + this.carbrand;
    }
  }
  
  class Model extends Car {
    constructor(brand, model) {
      super(brand);
      this.carmodel = model;
    }
    show() {
      return this.present() + ', it is a ' + this.carmodel;
    }
  }
  
  mycar = new Model("Ford", "Mustang");
  console.log(mycar.show());