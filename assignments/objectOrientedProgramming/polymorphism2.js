// Method Overriding
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
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // We override the method sayhi to include more text than it had in class human
    Developer.prototype.sayHi = function () {
        console.log("Hi! My name is " + this.myname + ". I am a developer.");
    };
    return Developer;
}(Human));
var Designer = /** @class */ (function (_super) {
    __extends(Designer, _super);
    function Designer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Designer.prototype.sayHi = function () {
        console.log("Hi! My name is " + this.myname + ". I am a designer.");
    };
    return Designer;
}(Human));
var kesa = new Human('Kesa');
var marie = new Developer('marie');
var jacob = new Designer('Jacob');
kesa.sayHi();
marie.sayHi();
jacob.sayHi();
