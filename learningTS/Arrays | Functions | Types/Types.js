//Once an identifier is annotated with a type, it can be used as that type only. If the identifier is used as a different type, the TypeScript compiler will issue an error.
// let variableName: type;
// let variableName: type = value;
// const constantName: type = value;
// object types
var Person;
// let person1 = { name: "John", age: 30 };
//function annotation
var greeting;
greeting = function (name) {
    return "Hello ".concat(name);
};
// same as
// const greeting = (name: string): string => {
//   return `Hello ${name}`;
// };
var someGreeting = greeting("John");
// ----------------- Type Number -----------------
// there is a floating type - number and big integer type - bigint
var price = 9.95;
// let bigNumber: bigint = 433333123n;
// ----------------- Type String -----------------
var firstName = "John";
var title = "Web Developer";
// we can also use template literals for multiline strings
var multiline = "Hello ".concat(firstName, "\nI am a ").concat(title, "\nBye");
// ----------------- Type Boolean -----------------
// can just be true or false
// JavaScript has the Boolean type that refers to the non-primitive boxed object - do not use it
var flag = true;
// ----------------- Type Object -----------------
var employee;
employee = {
    name: "John",
    age: 30,
};
// however if we try this, it will fail as its a primitive value
// employee = "John"; //type string is not assignable to type object
// better practice is to declare the object type
var employee2;
// = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,
//     jobTitle: 'Web Developer'
// };
// ----------------- Type Array -----------------
var names;
names = ["John", "Jane", "Mary"];
//or
var random = [];
random[0] = "John";
random[1] = 30;
random.push(null);
console.log(random);
