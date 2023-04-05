// simple typescript function
function add(a, b) {
    return a + b;
}
var msg = "Hello Ts";
console.log(msg);
var heading = document.createElement("h1");
heading.textContent = msg;
document.body.appendChild(heading);
var printStuff = function (stuff, id) {
    console.log("id: ".concat(id, " - ").concat(stuff));
};
printStuff("Banana", 13);
// to compile ts to js run the following command
// tsc ts_01.ts
