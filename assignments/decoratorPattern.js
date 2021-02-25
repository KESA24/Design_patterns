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
var courses = /** @class */ (function () {
    function courses() {
    }
    courses.prototype.getDescription = function () {
        return this.description;
    };
    return courses;
}());
var Engineering = /** @class */ (function (_super) {
    __extends(Engineering, _super);
    function Engineering() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Engineering";
        return _this;
    }
    Engineering.prototype.yearsofStudy = function () {
        return 4;
    };
    return Engineering;
}(courses));
var Architecture = /** @class */ (function (_super) {
    __extends(Architecture, _super);
    function Architecture() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Architecture";
        return _this;
    }
    Architecture.prototype.yearsofStudy = function () {
        return 5;
    };
    return Architecture;
}(courses));
var courseoptions = /** @class */ (function (_super) {
    __extends(courseoptions, _super);
    function courseoptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return courseoptions;
}(courses));
var agritect = /** @class */ (function (_super) {
    __extends(agritect, _super);
    function agritect(hybrid) {
        var _this = _super.call(this) || this;
        _this.hybridcourse = hybrid;
        return _this;
    }
    agritect.prototype.getDescription = function () {
        return this.hybridcourse.getDescription() + " offered alongside Agriculture";
    };
    agritect.prototype.yearsofStudy = function () {
        return this.hybridcourse.yearsofStudy() + 3;
    };
    return agritect;
}(courseoptions));
var doceng = /** @class */ (function (_super) {
    __extends(doceng, _super);
    function doceng(hybrid) {
        var _this = _super.call(this) || this;
        _this.hybridcourse = hybrid;
        return _this;
    }
    doceng.prototype.getDescription = function () {
        return this.hybridcourse.getDescription() + " offered alongside medicine";
    };
    doceng.prototype.yearsofStudy = function () {
        return this.hybridcourse.yearsofStudy() + 6;
    };
    return doceng;
}(courseoptions));
var hybridA = new Architecture();
hybridA = new agritect(hybridA);
console.log(hybridA.getDescription());
console.log(hybridA.yearsofStudy());
var hybridB = new Engineering();
hybridB = new doceng(hybridB);
console.log(hybridB.getDescription());
console.log(hybridB.yearsofStudy());
