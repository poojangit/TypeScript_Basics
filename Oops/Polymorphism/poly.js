//todo ----------POLYMORPHISM----------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//^ Its an ability of an object, function,methods to take on multiple forms.
//^ It allows same operation to behave differently on different classes or types.
//^ It is Implemented through -
//! Method overloading(compile time polymorphism)
//! Method overriding(run time polymorphism)
//^ Method Overloading 
//! It allows multiple function signatures for the same method
//! the implementation will be provided only once and ts will resolve the correct signature based on how the method is called.
//~ Example 1
var Calc = /** @class */ (function () {
    function Calc() {
    }
    Calc.prototype.add = function (a, b) {
        return a + b;
    };
    return Calc;
}());
var calc = new Calc();
console.log(calc.add(10, 20));
console.log(calc.add('Hello', 'world'));
//^ Method Overriding
//! Method overriding occurs when subclass provides its own implementation of a method defined in its parent class
//~ Example 1
var Brain = /** @class */ (function () {
    function Brain() {
    }
    Brain.prototype.functioning = function () {
        console.log("Brain is functionling");
    };
    return Brain;
}());
var Consious = /** @class */ (function (_super) {
    __extends(Consious, _super);
    function Consious() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Consious.prototype.functioning = function () {
        console.log("Brain is functioning along with my consious mind");
    };
    return Consious;
}(Brain));
var subConsious = /** @class */ (function (_super) {
    __extends(subConsious, _super);
    function subConsious() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    subConsious.prototype.functioning = function () {
        console.log("Subconsious mind is dead");
    };
    return subConsious;
}(Brain));
var fetchBrainFunction = [new Consious(), new subConsious(), new Brain()];
fetchBrainFunction.forEach(function (brain) { return brain.functioning(); });
