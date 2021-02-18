//  Subtype Polymorhism
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name) {
        this.myname = name;
    }
    Human.prototype.sayHi = function () {
        console.log("Hi! My name is " + this.myname);
    };
    return Human;
}());
//   Create a derivative object from the parent object Human
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Developer;
}(Human));
// Create another derivative object from the parent object
var Designer = /** @class */ (function (_super) {
    __extends(Designer, _super);
    function Designer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Designer;
}(Human));
var zell = new Human('Zell');
var vincy = new Developer('Vincy');
var tim = new Designer('Tim');
zell.sayHi(); // Hi! My name is Zell.
vincy.sayHi(); // Hi! My name is Vincy. I am a developer.
tim.sayHi(); // Hi! My name is Tim. I am a designer.
