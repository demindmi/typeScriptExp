// readonly properties can be initialized in the constructor
// mark class properties as immutable property. This means that the property can only be assigned once, and cannot be changed after that.
class PersonC2_1 {
  readonly name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let newPersonC2_1 = new PersonC2_1("John", 30);
newPersonC2_1.age = 31; // will work
//newPersonC2_1.name = "Jane"; // will throw an error as name is readonly
console.log(newPersonC2_1);

// we can consolidate the above code
class PersonC2_2 {
  constructor(readonly name: string, public age: number) {}
}
// ? 	readonly	 vs const
// readonly - Use for	Class properties, initialized in the constructor or declaration of the class
// const - Variables, initialized in the declaration of the variable

// * ----------------------------------------------------------------------------------------------
// get and set accessors
class PersonC2_3 {
  private _age: number; // note the _age
  private _firstName: string;
  private _lastName: string;

  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error("The age is invalid");
    }
    this._age = theAge;
  }

  public getFullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}

let newPersonC2_3 = new PersonC2_3();
newPersonC2_3.age = 10;
console.log(newPersonC2_3); // PersonC2_3 { _age: 10 }
// Notice that the call to the setter doesn’t have parentheses like a regular method.
// When you call person.age, the age setter method is invoked.
// If you assign an invalid age value, the setter will throw an error:
// newPersonC2_3.age = 0; // will error out - throw new Error("The age is invalid");
// when calling this console.log(person.age); // will call the getter method

// more complex example
class PersonC2_4 {
  private _age: number;
  private _firstName: string;
  private _lastName: string;

  public get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  public set fullName(name: string) {
    let parts = name.split(" ");
    if (parts.length != 2) {
      throw new Error("Invalid name format: first last");
    }
    this._firstName = parts[0];
    this._lastName = parts[1];
  }
}
let newPersonC2_4 = new PersonC2_4();
newPersonC2_4.fullName = "John Smith";
// console.log(newPersonC2_4.fullName); // John Smith
