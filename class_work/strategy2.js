// /* The strategy Pattern
//    ---------------------
//    Traveler
//         - Short Route Travler
//         - Medium Route Traveler
//         - Long Route Traveler
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
// Travel Strategy concrete Implementations
var TravelByBus = /** @class */ (function () {
    function TravelByBus() {
    }
    TravelByBus.prototype.travel = function () {
        console.log("Traveling by Bus");
    };
    return TravelByBus;
}());
var TravelByTax = /** @class */ (function () {
    function TravelByTax() {
    }
    TravelByTax.prototype.travel = function () {
        console.log("Traveling by Tax");
    };
    return TravelByTax;
}());
var TravelByBicycle = /** @class */ (function () {
    function TravelByBicycle() {
    }
    TravelByBicycle.prototype.travel = function () {
        console.log("Traveling by Bicycle");
    };
    return TravelByBicycle;
}());
var TravelByPlane = /** @class */ (function () {
    function TravelByPlane() {
    }
    TravelByPlane.prototype.travel = function () {
        console.log("Traveling by Plane");
    };
    return TravelByPlane;
}());
// -------------
// /Travel is the context class.
var Traveler = /** @class */ (function () {
    function Traveler() {
    }
    // Methods
    Traveler.prototype.travel = function () {
        // The choice of the travel strategy is by delegation and composition
        this.travelStrategy.travel();
    };
    // Strategy Setter
    Traveler.prototype.setTravelStrategy = function (travelStrategyArg) {
        this.travelStrategy = travelStrategyArg;
    };
    return Traveler;
}());
// -----------
// Specific Travelers (They are Travelers)
var ShortRouteTraveler = /** @class */ (function (_super) {
    __extends(ShortRouteTraveler, _super);
    function ShortRouteTraveler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShortRouteTraveler.prototype.travel = function () {
        console.log("I am a short route traveler");
        this.travelStrategy.travel();
    };
    return ShortRouteTraveler;
}(Traveler));
var MediumRouteTraveler = /** @class */ (function (_super) {
    __extends(MediumRouteTraveler, _super);
    function MediumRouteTraveler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediumRouteTraveler.prototype.travel = function () {
        console.log("I am a Medium route traveler");
        this.travelStrategy.travel();
    };
    return MediumRouteTraveler;
}(Traveler));
var LongRouteTraveler = /** @class */ (function (_super) {
    __extends(LongRouteTraveler, _super);
    function LongRouteTraveler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LongRouteTraveler.prototype.travel = function () {
        console.log("I am a Long route traveler");
        this.travelStrategy.travel();
    };
    return LongRouteTraveler;
}(Traveler));
var InternationalTraveler = /** @class */ (function (_super) {
    __extends(InternationalTraveler, _super);
    function InternationalTraveler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InternationalTraveler.prototype.travel = function () {
        console.log("I am an International traveler");
        this.travelStrategy.travel();
    };
    return InternationalTraveler;
}(Traveler));
// a Traveler who cam polymorphically travel
var traveler;
// This code is just for testing Purposes
// Ashort route traveler who wants to travel by Bus
traveler = new ShortRouteTraveler();
traveler.setTravelStrategy(new TravelByBus());
traveler.travel();
// A long route traveler who wants to travel by Bus
traveler = new LongRouteTraveler();
traveler.setTravelStrategy(new TravelByBus());
traveler.travel();
// A medium route traveler who wants to travel by Bicycle
traveler = new MediumRouteTraveler();
traveler.setTravelStrategy(new TravelByBicycle());
traveler.travel();
// An international traveler who wants to travel by Bicycle
traveler = new InternationalTraveler();
traveler.setTravelStrategy(new TravelByBicycle());
traveler.travel();
// An international traveler who wants to travel by Plane
traveler = new InternationalTraveler();
traveler.setTravelStrategy(new TravelByPlane());
traveler.travel();
