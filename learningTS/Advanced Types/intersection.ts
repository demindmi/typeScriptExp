// An intersection type creates a new type by combining multiple existing types.
// The new type has all features of the existing types.
// ^ type typeAB = typeA & typeB;  // typeAB contains all properties of typeA and typeB

// the union type uses the | operator that defines a variable which can hold a value of either typeA or typeB
// ^ type typeAB = typeA | typeB;  // typeAB contains all properties of typeA and typeB

// # EX 1 - Intersection of two types
interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}
// The following defines two intersection types:
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

// > Employee
let EMP1: Employee = {
  id: 1,
  name: "Bat",
  email: "bat@man.com",
  phone: "123-456-7890",
};
// > Customer
let CUST1: Customer = {
  name: "Super",
  credit: 1000,
  email: "super@man.com",
  phone: "123-456-7891",
};

// * Type Guards
// ----------------------------------------------
type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }

  throw new Error("Invalid arguments. Both arguments must be either numbers or strings.");
}

// * Instanceof Type Guards
// ----------------------------------------------
// Similar to the typeof operator, TypeScript is also aware of the usage of the instanceof operator.

class Customer2 {
  isCreditAllowed(): boolean {
    // ...
    return true;
  }
}

class Supplier2 {
  isInShortList(): boolean {
    // ...
    return true;
  }
}

type BusinessPartner_2 = Customer2 | Supplier2;

function signContract(partner: BusinessPartner): string {
  let message: string;
  if (partner instanceof Customer2) {
    message = partner.isCreditAllowed() ? "Sign a new contract with the customer" : "Credit issue";
  }

  if (partner instanceof Supplier2) {
    message = partner.isInShortList()
      ? "Sign a new contract the supplier"
      : "Need to evaluate further";
  }

  return message!;
}
// How it works
// First, declare the Customer and Supplier classes.
// Second, create a type alias BusinessPartner which is a union type of Customer and Supplier.
// Third, declare a function signContract() that accepts a parameter with the type BusinessPartner.
// Finally, check if the partner is an instance of Customer or Supplier, and then provide the respective logic.

// * IN
// ----------------------------------------------

// The in operator carries a safe check for the existence of a property on an object. You can also use it as a type guard. For example:

function signContract2(partner: BusinessPartner_2): string {
  let message: string;
  if ("isCreditAllowed" in partner) {
    message = partner.isCreditAllowed() ? "Sign a new contract with the customer" : "Credit issue";
  } else {
    // must be Supplier
    message = partner.isInShortList()
      ? "Sign a new contract the supplier "
      : "Need to evaluate further";
  }
  return message;
}

// * User Defined Type Guards
// ----------------------------------------------
//User-defined type guards allow you to define a type guard or help TypeScript infer a type when you use a function.
// A user-defined type guard function is a function that simply returns //^ arg is aType
function isCustomer(partner: any): partner is Customer2 {
  return partner instanceof Customer2;
}
function signContract3(partner: BusinessPartner_2): string {
  let message: string;
  if (isCustomer(partner)) {
    message = partner.isCreditAllowed() ? "Sign a new contract with the customer" : "Credit issue";
  } else {
    message = partner.isInShortList()
      ? "Sign a new contract with the supplier"
      : "Need to evaluate further";
  }

  return message;
}

//Type guards narrow down the type of a variable within a conditional block.
// Use the typeof and instanceof operators to implement type guards in the conditional blocks
