// JavaScript doesn’t have a concept of type casting because variables have dynamic types. However, every variable in TypeScript has a type. Type castings allow you to convert a variable from one type to another.

// ^ In TypeScript, you can use the as keyword or <> operator for type castings.

let input = document.querySelector('input["type="text"]');
//Since the returned type of the document.querySelector() method is the Element type, the following code causes a compiler error:
// console.log(input.value);

//The reason is that the value property doesn’t exist in the Element type. It only exists on the HTMLInputElement type.
// To resolve this, you can use type casting that cast the Element to HTMLInputElement by using the as keyword like this:
let input2 = document.querySelector('input[type="text"]') as HTMLInputElement;
console.log(input2.value); // OK

// one more way to cast is when accessing the properties of the object
let text = (input as HTMLInputElement).value;
// input is of type Element, but we are casting it to HTMLInputElement
//Note that the HTMLInputElement type extends the HTMLElement type that extends to the Element type. When you cast the HTMLElement to HTMLInputElement, this type casting is also known as a down casting.

// ^ syntax for casting types
// ^ let a: typeA;
// ^ let b = a as typeB;

// Casting using <> operator
let input3 = <HTMLInputElement>document.querySelector('input[type="text"]');
console.log(input3.value);
// or
// ^ syntax for casting types with <>
// ^ let a: typeA;
// ^ let b = <typeB>a;
