"use strict";
//todo -----------Encapsulation-----------
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
exports.Person = void 0;
//^ It is one of the core principal of oops where the internal state of an object is hidden from the outside world and can only ne accessed or modified through public methods (getters and setters)
//^ In typescript, encapsulation is implemented using access modifiers.
//^ These modifiers determine the visibility and accessibility of class properties and methods.
//^ access modifiers are  -
//! public
//! private
//! protected
//~ Example 1
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
exports.Person = Person;
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.getEmployeeDetails = function () {
        return this.name;
    };
    return Employee;
}(Person));
var emp = new Employee("Aryan");
console.log(emp.getEmployeeDetails());
// emp.name = "Diya" //? error - property is protected which is only accessable within the class or subclass
//~ Example 3
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.bankBalance = 0;
    }
    Object.defineProperty(BankAccount.prototype, "getBankBalance", {
        get: function () {
            return this.bankBalance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "setBankBalance", {
        set: function (account) {
            if (account >= 0) {
                this.bankBalance = account;
            }
            else {
                console.log("Bank balance accont be negative");
            }
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}());
var bank = new BankAccount();
bank.setBankBalance = 200;
console.log(bank.getBankBalance);
//~ Example 4
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Object.defineProperty(Product.prototype, "Price", {
        get: function () {
            return this.price;
        },
        set: function (amount) {
            if (amount > 0) {
                this.price = amount;
            }
            else {
                console.log("Price must be positive");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.displayProductInfo = function () {
        console.log("Product ".concat(this.name, " , price : ").concat(this.price));
    };
    return Product;
}());
var product = new Product("Mobile", 1000);
product.displayProductInfo();
product.Price = -100;
product.displayProductInfo();
product.Price = 100;
product.displayProductInfo();
