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
// Abstraction class that references the Implementation Interface
var tractor = /** @class */ (function () {
    function tractor(horsepower) {
        this.horsepower = horsepower;
    }
    tractor.prototype.specs = function () {
        console.log("This is a " + this.horsepower + "hp tractor.");
    };
    return tractor;
}());
//  Concrete Implementations
var smallTractor = /** @class */ (function () {
    function smallTractor() {
    }
    smallTractor.prototype.quantity = function () {
        return 100;
    };
    return smallTractor;
}());
var mediumTractor = /** @class */ (function () {
    function mediumTractor() {
    }
    mediumTractor.prototype.quantity = function () {
        return 150;
    };
    return mediumTractor;
}());
// Refined Abstractions
var JD = /** @class */ (function (_super) {
    __extends(JD, _super);
    function JD(horsepower) {
        return _super.call(this, horsepower) || this;
    }
    JD.prototype.specs = function () {
        console.log("This is a " + this.horsepower.quantity() + "hp John Deere tractor");
    };
    return JD;
}(tractor));
var MF = /** @class */ (function (_super) {
    __extends(MF, _super);
    function MF(horsepower) {
        return _super.call(this, horsepower) || this;
    }
    MF.prototype.specs = function () {
        console.log("This is a " + this.horsepower.quantity() + "hp Massey Ferguson tractor");
    };
    return MF;
}(tractor));
// Instantiate
var newJD = new JD(new mediumTractor());
newJD.specs();
var newMF = new MF(new smallTractor());
newMF.specs();
