"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodedValue = void 0;
// getting the colors array setup
var COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
];
//getting the index / code for the color
var getCode = function (color) { return COLORS.indexOf(color); };
// deconstruct the arguments of the function and use them with getCode()
var decodedValue = function (_a) {
    var first = _a[0], second = _a[1];
    return getCode(first) * 10 + getCode(second);
};
exports.decodedValue = decodedValue;
console.log((0, exports.decodedValue)(['white', 'red'])); // 92
console.log((0, exports.decodedValue)(["green", "brown", "orange"])); //
