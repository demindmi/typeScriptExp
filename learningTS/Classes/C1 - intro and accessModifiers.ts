class Person {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let newPerson: Person = new Person("123-45-6789", "John", "Doe");
// let newPerson = new Person("123-45-6789", "John", "Doe"); - also okay
// console.log(newPerson.getFullName());

// * -----------------------------------------------------------------------------------------
// access modifiers
// access modifiers are keywords that set the accessibility of properties and methods in classes
// public - accessible from anywhere
// private - accessible only from within the class
// protected - accessible only from within the class and its subclasses (inherited classes)
// default - accessible only from within the class

// private
class Person2 {
  private ssn: string;
  private firstName: string;
  private lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
let newPerson2 = new Person2("153-07-3130", "John", "Doe");
// console.log(newPerson2.firstName); // will throw -
// console.log(newPerson2.getFullName()); // is fine

// public
class Person3 {
  public ssn: string;
  public firstName: string;
  public lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
let newPerson3 = new Person3("153-07-3130", "John", "Doe");
//console.log(newPerson3.firstName); // is fine
//console.log(newPerson3.getFullName()); // is fine

// protected
class Person4 {
  protected ssn: string; // will be accessible within the Person class and in any class that inherits from the Person class.
  private firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person4 {
  employeeId: number;

  constructor(ssn: string, firstName: string, lastName: string, employeeId: number) {
    super(ssn, firstName, lastName);
    this.employeeId = employeeId;
  }

  // getFirstName(): string {
  //   return this.firstName; // 'firstName' is private and only accessible within class 'Person4'.
  // }

  getEmployeeId(): number {
    return this.employeeId;
  }
}

let newEmployee = new Employee("153-07-3130", "John", "Doe", 123);
// console.log(newEmployee.ssn); // 'ssn' is protected and only accessible within class 'Person4' and its subclasses.
// console.log(newEmployee.employeeId); // will work as its not protected

// * -----------------------------------------------------------------------------------------
// shorthand initialization
// shorthand initialization is a way to initialize properties in a class
// it is a shortcut for assigning properties in the constructor
// it is only available in TypeScript
class Person5 {
  constructor(public ssn: string, public firstName: string, public lastName: string) {}
}
let newPerson5 = new Person5("153-07-3130", "John", "Doe");
