function multiply(x, y) {
    return x * y;
}
function printS(value) {
    console.log(value);
}
// ----------------------------------------------
// complex example
var rg = [];
var test; // type number
var func; // type function
var funVoid; // type function that returns void
var funVoidArr; // type array of functions that return void
// rg now is of type funVoidArr basically
funVoid = function () {
    console.log("Hello");
};
funVoidArr = [
    function () {
        console.log("Hello");
    },
    function () {
        console.log("Goodbye");
    },
];
var someComplexObject = {
    name: "John",
    age: 30,
    isAlive: true,
};
var a;
var b;
// function that takes 3 numbers and finds the biggest one
function findBiggestNumber(a, b, c) {
    return Math.max(a, b, c);
}
// ----------------------------------------------
// default parameters in functions
function findBiggestNumber2(a, b, c) {
    if (b === void 0) { b = 0; }
    if (c === void 0) { c = 0; }
    return Math.max(a, b, c);
}
// you can't however add default values in function type definitions
// example:
// type findBiggestNumber3 = (a: number, b: number = 0, c: number = 0) => number;
// will throw an error
// ----------------------------------------------
// rest parameters
// ex 1
function findBiggestNumber3() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return Math.max.apply(Math, numbers);
}
// ex 2
function loopThrough() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (arg) { return console.log(arg); });
}
loopThrough(1, 2, 3);
loopThrough("a", "b", "c");
loopThrough(1, "a", true, { name: "John" });
loopThrough([1, 3, 4]);
// function can only have one rest parameter
// the rest parameter must be the last parameter in the function
// the type of the rest parameter is an array of the type of the rest parameter
