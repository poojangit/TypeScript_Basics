"use strict";
//todo -----------Classes ----------------
Object.defineProperty(exports, "__esModule", { value: true });
var Animal1 = /** @class */ (function () {
    function Animal1(animalName, family) {
        if (family === void 0) { family = "Mammals"; }
        this.animalName = animalName;
        this.family = family;
    }
    Animal1.prototype.display = function () {
        console.log("".concat(this.animalName, " is a ").concat(this.family));
    };
    return Animal1;
}());
var animal2 = new Animal1("Dog");
animal2.display();
console.log(animal2.animalName);
//~ Example 3
//& Access modifilers
//! public - 
//! private -
//! protected
var BankAccount = /** @class */ (function () {
    function BankAccount(oldBalance) {
        this.balance = oldBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposited : ".concat(amount, " . New Balance : ").concat(this.balance));
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (this.balance < amount) {
            console.log("Insufficient balance");
        }
        else {
            this.balance -= amount;
            console.log("withdrawed : ".concat(amount, ". Remainning balance : ").concat(this.balance));
        }
    };
    return BankAccount;
}());
var amount = new BankAccount(1000);
amount.deposit(500);
amount.withdraw(100);
amount.withdraw(10000);
//& Readonly properties
var Book = /** @class */ (function () {
    function Book(title) {
        this.title = title;
    }
    return Book;
}());
var book = new Book("It Ends with us");
console.log(book.title);
// book.title = "new" //! error
