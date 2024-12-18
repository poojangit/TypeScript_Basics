"use strict";
//todo --------------Inheritance----------------------
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
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log("".concat(this.name, " is eating"));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, " says boww"));
    };
    return Dog;
}(Animal));
var dog = new Dog("Brownie");
dog.eat();
dog.bark();
//~ Example 2
//& super keyword
var Vehical = /** @class */ (function () {
    function Vehical(brand) {
        this.brand = brand;
    }
    Vehical.prototype.start = function () {
        console.log("".concat(this.brand, " is starting"));
    };
    return Vehical;
}());
var Tayota = /** @class */ (function (_super) {
    __extends(Tayota, _super);
    function Tayota(brand, model) {
        var _this = _super.call(this, brand) || this;
        _this.model = model;
        return _this;
    }
    Tayota.prototype.start = function () {
        _super.prototype.start.call(this);
        console.log("".concat(this.brand, " ").concat(this.model, " is ready to start"));
    };
    return Tayota;
}(Vehical));
var tayota = new Tayota("Tayota", "Carolla");
tayota.start();
//& Overriding methods
var Greeting = /** @class */ (function () {
    function Greeting(eName) {
        this.eName = eName;
        this.eName = eName;
    }
    Greeting.prototype.greet = function () {
        console.log("Hello ".concat(this.eName));
    };
    return Greeting;
}());
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee(eName) {
        var _this = _super.call(this, eName) || this;
        _this.eName = eName;
        return _this;
    }
    employee.prototype.greet = function () {
        console.log("Hello ".concat(this.eName, "! Wecome to our company!!"));
    };
    return employee;
}(Greeting));
var emp = new employee("Pooja");
emp.greet();
