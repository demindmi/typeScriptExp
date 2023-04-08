//Once an identifier is annotated with a type, it can be used as that type only. If the identifier is used as a different type, the TypeScript compiler will issue an error.
// let variableName: type;
// let variableName: type = value;
// const constantName: type = value;

// TypeScript uses locations of variables to infer their types. This mechanism is known as contextual typing.

// Type inference	- TypeScript guesses the type
// Type annotationsYou explicitly tell TypeScript the type

// ----------------------------------------------
// Primitive TS types
interface Types {
  name: string; // string values
  age: number; // number
  isCool: boolean; // true or false
  anything: any; // literally anything
  nothing: null; // a single value of null
  symbol: symbol; //a unique constant value
  undefined: undefined; // a single value of undefined
}

// ----------------------------------------------
// ----------------- Type Array -----------------
interface Arrays {
  numbers: number[]; // array of numbers
  strings: string[]; // array of strings
  booleans: boolean[]; // array of booleans
  any: any[]; // array of any type
  mix: (string | number)[]; // array of strings and numbers
  mix2: (string | number | boolean)[]; // array of strings, numbers and booleans
}

// ----------------------------------------------
// ----------------- Type HTML -----------------
interface HtmlElements {
  heading: HTMLHeadingElement;
}

// ----------------------------------------------
// ----------------- Type Object -----------------
// object types
let Person: {
  name: string;
  age: number;
};
// let person1 = { name: "John", age: 30 };

// ----------------------------------------------
// ----------------- Type Function -----------------
//function annotation
let greeting: (name: string) => string;
greeting = (name: string) => {
  return `Hello ${name}`;
};
// same as
// const greeting = (name: string): string => {
//   return `Hello ${name}`;
// };
let someGreeting = greeting("John");

// ----------------------------------------------
// ----------------- Type Number -----------------
// there is a floating type - number and big integer type - bigint
let price: number = 9.95;
// let bigNumber: bigint = 433333123n;

// ----------------------------------------------
// ----------------- Type String -----------------
let firstName: string = "John";
let title: string = "Web Developer";
// we can also use template literals for multiline strings
let multiline: string = `Hello ${firstName}
I am a ${title}
Bye`;

// ----------------------------------------------
// ----------------- Type Boolean -----------------
// can just be true or false
// JavaScript has the Boolean type that refers to the non-primitive boxed object - do not use it
let flag: boolean = true;

// ----------------------------------------------
// ----------------- Type Object -----------------
let employee: object;
employee = {
  name: "John",
  age: 30,
};
// however if we try this, it will fail as its a primitive value
// employee = "John"; //type string is not assignable to type object
// better practice is to declare the object type
let employee2: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};
// = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,
//     jobTitle: 'Web Developer'
// };

// ----------------------------------------------
// ----------------- Type Array -----------------
let names: string[];
names = ["John", "Jane", "Mary"];
//or
let random: any[] = [];
random[0] = "John";
random[1] = 30;
random.push(null);
// console.log(random);

// ----------------------------------------------
// ----------------- Type Tuple -----------------
// a tuple is an array with a fixed number of elements
let skill: [string, number];
skill = ["Programming", 5];
// can have optional element
let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

// ----------------------------------------------
// ----------------- Type Enum -----------------
// enum is a way to give more friendly names to sets of numeric values
enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}
function isItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}
console.log(isItSummer(Month.Jun));

// ----------------------------------------------
// ----------------- Type Any -----------------
// any type is a type that can be anything
let randomValue: any = 10;
randomValue = true;

// ----------------------------------------------
// ----------------- Type Void -----------------
// void type is a type that has no type at all
// it is used for functions that do not return anything
function sayHello(): void {
  console.log("Hello");
}

// ----------------------------------------------
// ----------------- Type Never -----------------
// never type is a type that never occurs
// it is used for functions that never return anything
// Typically, you use the never type to represent the return type of a function that always throws an error or infinite loop
//  The never type contains no value.
type NonNullable_v2<T> = T extends null | undefined ? never : T;
// Here we are checking if T is null or undefined. If it is then we are pointing that it should never happen.
//Then while using this type:
let value: NonNullable<string>;
value = "Test";
//value = null; // error
// This will cause an error as not all paths return a value.:
// function fn(a: string | number): boolean {
//   if (typeof a === "string") {
//     return true;
//   } else if (typeof a === "number") {
//     return false;
//   }
// }
// To fix this we will need to cover last path with never type:
function fn(a: string | number): boolean {
  if (typeof a === "string") {
    return true;
  } else if (typeof a === "number") {
    return false;
  }
  return a; // return type: never
}

// ----------------------------------------------
// ----------------- Type Union -----------------
// union type is a type that can be one of several types
let union: string | number;
union = "John";
union = 30;

let someFunction = (value: string | number, secondValue: string | number) => {
  if (typeof value === "number" && typeof secondValue === "number") {
    return value + secondValue;
  } else if (typeof value === "string" && typeof secondValue === "string") {
    return value.concat(secondValue);
  } else {
    throw new Error("Invalid arguments");
  }
};

// ----------------------------------------------
// ----------------- Type Aliases -----------------
// type aliases are a way to give a name to a type
type StringOrNumber = string | number;
let someValue: StringOrNumber;
someValue = "John";
someValue = 30;

// ----------------------------------------------
// ----------------- Type String Literal -----------------
// The string literal types allow you to define a type that accepts only one specified string literal.
type Greeting = `Hi`;
let Months:
  | `Jan`
  | `Feb`
  | `Mar`
  | `Apr`
  | `May`
  | `Jun`
  | `Jul`
  | `Aug`
  | `Sep`
  | `Oct`
  | `Nov`
  | `Dec`;
// Months = `Jan`; // OK
// Months = `January`; // Error

// The string literal type is useful to limit a possible string value in a variable.
// The string literal types can combine nicely with the union types to define a finite set of string literal values for a variable:
let mouseEvent: `click` | `dblclick` | `mouseup` | `mousedown`;
mouseEvent = `click`; // valid
mouseEvent = `dblclick`; // valid
mouseEvent = `mouseup`; // valid
mouseEvent = `mousedown`; // valid
// mouseEvent = 'mouseover'; // compiler error

// If you use the string literal types in multiple places, they will be very verbose.
//To avoid this, you can use the type aliases.For example:
// declare new type that can contain one of the 4 string literal types
type someMouseEvent = `click` | `dblclick` | `mouseup` | `mousedown`;
// declare a variable of type someMouseEvent
let firstEvent: someMouseEvent;
// assign one of the 4 string literal types to the variable
firstEvent = `click`; // valid
firstEvent = `dblclick`; // valid
firstEvent = `mouseup`; // valid
firstEvent = `mousedown`; // valid
// firstEvent = 'mouseover'; // compiler error
// declare another variable of type someMouseEvent
let anotherEvent: MouseEvent;
