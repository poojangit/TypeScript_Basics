//todo ----------abstract class------------
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
//^ Abstarct class define a base class that cannot be instantiated. 
//^ can contains Abstract methods - methods without implementation
//^ can contains concrete methods - methods with implemenation
var Vehical = /** @class */ (function () {
    function Vehical(name) {
        this.name = name;
    }
    Vehical.prototype.stop = function () {
        console.log("".concat(this.name, " has stopped"));
    };
    return Vehical;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.move = function () {
        console.log("".concat(this.name, " is driving on the road"));
    };
    return Car;
}(Vehical));
var Airplane = /** @class */ (function (_super) {
    __extends(Airplane, _super);
    function Airplane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Airplane.prototype.move = function () {
        console.log("".concat(this.name, " is flying in the sky"));
    };
    return Airplane;
}(Vehical));
var car = new Car('Tayota');
car.move();
car.stop();
var airplane = new Airplane('Boeing 747');
airplane.move();
