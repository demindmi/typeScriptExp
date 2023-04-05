// A class can reuse the properties and methods of another class. This is called inheritance in TypeScript.
// inheritance is a way to reuse the code of an existing class when you create a new one.

class person_C3 {
  constructor(private _name: string, public _age: number) {
    this._name = _name;
    this._age = _age;
  }

  public information(): string {
    return `Name: ${this.name()} and Age: ${this._age}`;
  }

  protected name(): string {
    return this._name;
  }
}

class employee_c3 extends person_C3 {
  //Because the Person class has a constructor that initializes the firstName and lastName properties, you need to initialize these properties in the constructor of the Employee class by calling its parent class’ constructor.

  //To call the constructor of the parent class in the constructor of the child class, you use the super() syntax. For example:
  // super(firstName, lastName);
  // also NOTE: you need public or private modifiers in the constructor of the child class if you want to access shorthand initialization in the child class.
  constructor(name: string, age: number, private _salary: number) {
    super(name, age);
  }

  public name(): string {
    return "Name: Mr. " + super.name(); // here we are calling the parent's name() method
  }

  public oldEmployee(): string {
    return "Age : " + this._age; // here we are calling the parent's name() method
  }
}
let newEmployee_c3 = new employee_c3("Alex", 25, 10000);
console.log(newEmployee_c3.information()); // this will effectivity call the information() method of the parent class
// note that the name() method of the parent class is protected, so it can only be called from within the class or its subclasses.
// also note that child is calling its own name() method, which is overriding the parent's name() method in the information() method.
console.log(newEmployee_c3.name()); // Mr. Alex
console.log(newEmployee_c3.oldEmployee()); // Age: 25
console.log(newEmployee_c3);
