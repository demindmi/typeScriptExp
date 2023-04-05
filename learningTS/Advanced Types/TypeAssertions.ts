// Type assertions instruct the TypeScript compiler to treat a value as a specified type. It uses the as keyword to do so:
// ^ expression as targetType

// A type assertion is also known as type narrowing. It allows you to narrow a type from a union type. Let’s see the following simple function:

function getNetPrice(price: number, discount: number, format: boolean): number | string {
  let netPrice = price * (1 - discount);
  return format ? `$${netPrice}` : netPrice;
}

// The getNetPrice() function accepts price, discount, and format arguments and returns a value of the union type number | string.
// If the format is true, the getNetPrice() returns a formatted net price as a string. Otherwise, it returns the net price as a number.
// The following uses the as keyword to instruct the compiler that the value assigned to the netPrice is a string:

let netPrice = getNetPrice(100, 0.05, true) as string;
console.log(netPrice);

let netPrice2 = getNetPrice(100, 0.05, false) as number;
console.log(netPrice);

// Note that a type assertion does not carry any type casting. It only tells the compiler which type it should apply to a value for the type checking purposes.

// or you can use
let netPrice3 = <number>getNetPrice(100, 0.05, false);
// ! this < > will not with react, the AS notation should be used
