// Function types
// In addition to describing an object with properties, interfaces also allow you to describe function types.
interface StringFormat {
  (str: string, isUpper: boolean): string;
}
let format: StringFormat;
format = (str: string, isUpper: boolean) => {
  return isUpper ? str.toUpperCase() : str.toLowerCase();
};

console.log(format("Hello", true)); // HELLO

// * -------------------------------------------------------------------------------------
// Class types
// Classes implement an interface just like they do a base class. All of the members of the interface must be implemented by the class, and they must be public.
// If you have worked with Java or C#, you can find that the main use of the interface is to define a contract between unrelated classes.

interface nameMe {
  returnName(): string;
}

class Person_i2 implements nameMe {
  constructor(private _firstName: string, private _lastName: string) {}
  returnName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}

let person = new Person_i2("John", "Doe");
console.log(person.returnName());
