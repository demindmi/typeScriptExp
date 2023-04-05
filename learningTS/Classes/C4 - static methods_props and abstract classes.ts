// static properties and methods are shared among all instances of the class.
// use the keyword 'static'

class employee_c4 {
  static numberOfEmployees: number = 0;

  static getEmployeeCount(): number {
    return employee_c4.numberOfEmployees;
  }

  constructor(private _firstName: string, private _lastName: string, private _salary: number) {
    employee_c4.numberOfEmployees++;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public get salary(): number {
    return this._salary;
  }

  public set salary(newSalary: number) {
    if (this.checkSalaryIncrease(newSalary)) {
      this._salary = newSalary;
      console.log(`Salary updated to ${this._salary}`);
    } else {
      console.log(`Salary change is too high! Keeping the current salary: ${this._salary}`);
    }
  }

  private checkSalaryIncrease(newSalary: number): boolean {
    if (Math.abs(this._salary - newSalary) / this._salary > 0.2) {
      return false;
    }
    return true;
  }
}
let newEmployee_c4 = new employee_c4("Alex", "Smith", 10000);
console.log(newEmployee_c4.firstName); // Alex
newEmployee_c4.salary = 12000; // Salary updated to 12000
newEmployee_c4.salary = 15000; // Salary change is too high!
employee_c4.numberOfEmployees; // 1
let newEmployee_c5 = new employee_c4("John", "Doe", 66666);
employee_c4.numberOfEmployees; // 2
employee_c4.getEmployeeCount(); // 2

// * -----------------------------------------------------------------------------------------
// Abstract Classes
// An abstract class is typically used to define common behaviors for derived classes to extend. Unlike a regular class, an abstract class cannot be instantiated directly
// An abstract class can contain both abstract and non-abstract methods
// An abstract method is a method that is declared, but not implemented in the abstract class
// An abstract method must be implemented in the derived class

abstract class employee_c4_2 {
  //An abstract method does not contain implementation. It only defines the signature of the method without including the method body.
  constructor(private _firstName: string, private _lastName: string) {}

  //children classes will have to implement this method
  abstract getSalary(): number;

  // this is an implemented method
  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}
// because this is an abstract class, we cannot instantiate it
// let newEmployee_c4_2 = new employee_c4_2("Alex", "Smith", 10000); // error

// we can create a child class that extends the abstract class
class fullTimeEmployee_c4_2 extends employee_c4_2 {
  constructor(firstName: string, lastName: string, public _salary: number) {
    super(firstName, lastName);
  }
  // this is a required method because it is abstract in the parent class
  getSalary(): number {
    return this._salary;
  }
}
let newFullTimeEmployee_c4_2 = new fullTimeEmployee_c4_2("Alex", "Smith", 10000);
console.log(newFullTimeEmployee_c4_2);

// lets create another class from employee
class partTimeEmployee_c4_2 extends employee_c4_2 {
  constructor(firstName: string, lastName: string, public _rate: number) {
    super(firstName, lastName);
  }

  getSalary(): number {
    return this._rate * 8;
  }
}
let newPartTimeEmployee_c4_2 = new partTimeEmployee_c4_2("John", "Doe", 100);
console.log(newPartTimeEmployee_c4_2.getSalary()); // 800
