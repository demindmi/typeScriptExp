// TypeScript interfaces define the contracts within your code. They also provide explicit names for type checking.
//
interface Person_i1 {
  firstName: string;
  lastName: string;
}

function getFullName(person: Person_i1) {
  return `${person.firstName} ${person.lastName}`;
}

let john = {
  firstName: "John",
  lastName: "Doe",
};

console.log(getFullName(john)); // John Doe
// however if we create a new object with more properties we can still use the function
// as long as the properties that are required are present
let jane = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
};
console.log(getFullName(jane)); // Jane Doe

// * -------------------------------------------------------------------------------------
// optional properties
// we can make properties optional by adding a question mark after the property name
interface Person_i2 {
  firstName: string;
  lastName: string;
  age?: number;
}

// * -------------------------------------------------------------------------------------
// readonly properties
// we can make properties readonly by adding the readonly keyword before the property name
interface Person_i3 {
  firstName: string;
  lastName: string;
  readonly ssn: number;
}
let example_i3: Person_i3 = {
  firstName: "John",
  lastName: "Doe",
  ssn: 123456789,
};
example_i3.firstName = "Bob"; // OK
// example_i3.ssn = 987654321; // Error
