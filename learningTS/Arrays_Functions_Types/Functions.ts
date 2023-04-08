function multiply(x: number, y: number): number {
  return x * y;
}

function printS(value: any) {
  console.log(value);
}

// ----------------------------------------------
// complex example
var rg: { (): void }[] = [];
var test: number; // type number
var func: {}; // type function
var funVoid: { (): void }; // type function that returns void
var funVoidArr: { (): void }[]; // type array of functions that return void
// rg now is of type funVoidArr basically
funVoid = (): void => {
  console.log("Hello");
};

funVoidArr = [
  (): void => {
    console.log("Hello");
  },
  (): void => {
    console.log("Goodbye");
  },
];

// function that takes 3 numbers and finds the biggest one
function findBiggestNumber(a: number, b: number, c: number): number {
  return Math.max(a, b, c);
}

// ----------------------------------------------
// default parameters in functions
function findBiggestNumber2(a: number, b: number = 0, c: number = 0): number {
  return Math.max(a, b, c);
}
// you can't however add default values in function type definitions
// example:
// type findBiggestNumber3 = (a: number, b: number = 0, c: number = 0) => number;
// will throw an error

// ----------------------------------------------
// rest parameters
// ex 1
function findBiggestNumber3(...numbers: number[]): number {
  return Math.max(...numbers);
}
// ex 2
function loopThrough(...args: any[]): void {
  args.forEach((arg) => console.log(arg));
}
loopThrough(1, 2, 3); // will print 1, 2, 3
loopThrough("a", "b", "c"); // will print a, b, c
loopThrough(1, "a", true, { name: "John" }); // will print 1, a, true, { name: "John" }
loopThrough([1, 3, 4]); // will print [1, 3, 4] as an array
// function can only have one rest parameter
// the rest parameter must be the last parameter in the function
// the type of the rest parameter is an array of the type of the rest parameter

// ----------------------------------------------
// overloads
// function overloadings allow you to establish the relationship between the parameter types and result types of a function.
// examples
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}
// In this example, we added two overloads to the add() function. The first overload tells the compiler that when the arguments are numbers, the add() function should return a number. The second overload does the same but for a string.
add("Hello", "World"); // returns "HelloWorld"
add(1, 2); // returns 3

// Method overloading
// When a function is a property of a class, it is called a method. TypeScript also supports method overloading. For example:
