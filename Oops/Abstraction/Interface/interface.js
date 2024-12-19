//todo ----------Interface-----------------
var Health = /** @class */ (function () {
    function Health() {
    }
    Health.prototype.write = function () {
        console.log("Writing is important for a healthy understanding");
    };
    return Health;
}());
var Heart = /** @class */ (function () {
    function Heart() {
    }
    Heart.prototype.yoga = function () {
        console.log("Exercising is good for healthy heart beat");
    };
    return Heart;
}());
var program = new Health();
program.write();
var pushUp = new Heart();
pushUp.yoga();
