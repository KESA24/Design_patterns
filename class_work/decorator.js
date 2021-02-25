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
var Katogo = /** @class */ (function () {
    function Katogo() {
    }
    Katogo.prototype.getDescription = function () {
        return this.description;
    };
    return Katogo;
}());
var KatogoA = /** @class */ (function (_super) {
    __extends(KatogoA, _super);
    function KatogoA() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Cassava and Beans";
        return _this;
    }
    KatogoA.prototype.cost = function () {
        return 3000;
    };
    return KatogoA;
}(Katogo));
var KatogoB = /** @class */ (function (_super) {
    __extends(KatogoB, _super);
    function KatogoB() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Cassava, Beans, Avocado";
        return _this;
    }
    KatogoB.prototype.cost = function () {
        return 3500;
    };
    return KatogoB;
}(Katogo));
var KatogoOptions = /** @class */ (function (_super) {
    __extends(KatogoOptions, _super);
    function KatogoOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return KatogoOptions;
}(Katogo));
var KatogowithChicken = /** @class */ (function (_super) {
    __extends(KatogowithChicken, _super);
    function KatogowithChicken(katogo) {
        var _this = _super.call(this) || this;
        _this.decoratedkatogo = katogo;
        return _this;
    }
    KatogowithChicken.prototype.getDescription = function () {
        return this.decoratedkatogo.getDescription() + " , with chicken";
    };
    KatogowithChicken.prototype.cost = function () {
        return this.decoratedkatogo.cost() + 2000;
    };
    return KatogowithChicken;
}(KatogoOptions));
var KatogoWithFish = /** @class */ (function (_super) {
    __extends(KatogoWithFish, _super);
    function KatogoWithFish(katogo) {
        var _this = _super.call(this) || this;
        _this.decoratedKatogo = katogo;
        return _this;
    }
    KatogoWithFish.prototype.getDescription = function () {
        return this.decoratedKatogo.getDescription() + ", with fish";
    };
    KatogoWithFish.prototype.cost = function () {
        return this.decoratedKatogo.cost() + 4000;
    };
    return KatogoWithFish;
}(KatogoOptions));
var jacobKatogo = new KatogoA();
jacobKatogo = new KatogowithChicken(jacobKatogo);
console.log(jacobKatogo.cost());
console.log(jacobKatogo.getDescription());
var patKatogo = new KatogoB();
patKatogo = new KatogoWithFish(patKatogo);
console.log(patKatogo.cost());
console.log(patKatogo.getDescription());
