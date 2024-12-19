"use strict";
//todo ----------Interface-----------------
Object.defineProperty(exports, "__esModule", { value: true });
function getUserDeatials(user) {
    console.log("User name ".concat(user.name, ", email : ").concat(user.email));
}
// simulating the api response
var user = {
    id: 1,
    name: "Pooja",
    email: 'poojang147@gmail.com',
    isActive: true
};
getUserDeatials(user);
function displayProduct(product) {
    console.log("Product : ".concat(product.name, ", Price : ").concat(product.price, ", IsInSrock : ").concat(product.isInStock));
}
var product = {
    id: 100,
    name: "pencil",
    price: 10,
    category: "Laptop",
    isInStock: true
};
displayProduct(product);
