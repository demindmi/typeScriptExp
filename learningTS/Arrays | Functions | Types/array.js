let people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jack", age: 40 },
  { name: "Jill", age: 35 },
];

// ---------------- MAP ----------------
// The map() method calls a callback function on every element of an array and returns a new array that contains the results.
// The map() method takes two named arguments, the first one is required whereas the second one is optional.
// NOTE--> newArr = OldArr.map(function(currentValue, index, array)
// newArr - the new array that is returned
// oldArr - the old array being operated on. This array will not be changed
// currentValue - the current value being processed
// index - the current index of the value being processed
// array - the original array
const ages = people.map((person) => {
  return person.age;
});
// console.log(ages); // [30, 25, 40, 35]

// ---------------- FILTER ----------------
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// NOTE--> array.filter(function(currentValue, index, arr), thisValue)
// currentValue- required, the value of the current element
// index - optional, the array index of the current element
// arr - optional, the array object the current element belongs to.
// thisValue- optional. A value to be passed to the function to be used as its "this" value. If this parameter is empty, the value "undefined" will be passed as its "this" value.
const adults = people.filter((person) => {
  return person.age >= 35;
});
// console.log(adults); // [ { name: 'Jack', age: 40 }, { name: 'Jill', age: 35 } ]

// ---------------- REDUCE ----------------
//The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reduce() method executes a provided function for each value of the array(from left - to - right).
// The return value of the function is stored in an accumulator (result/total).
// reduce() does not execute the function for array elements without values.
// This method does not change the original array.
// NOTE--> array.reduce( function(total, currentValue, currentIndex, arr),initialValue)
// function(total, currentValue, index, arr): It is the required parameter and used to run for each element of the array. It contains four-parameter which are listed below:
// total: It is a required parameter and used to specify the initialValue, or the previously returned value of the function.
// currentValue: It is a required parameter and used to specify the value of the current element.
// currentIndex: It is an optional parameter and used to specify the array index of the current element.
// arr: It is an optional parameter and used to specify the array object the current element belongs to.
// initialValue: It is an optional parameter and used to specify the value to be passed to the function as the initial value.
const totalAge = people.reduce((total, person) => {
  return total + person.age;
}, 0);
// or
() => {
  const totalAge2 = people.reduce(ageMath, 0); // why if we remove 0 this brakes
  function ageMath(total, person) {
    console.log("total", total);
    console.log("person", person);
    return total + person.age * 2;
  }
  console.log("Global", totalAge2); // 260
};

// ---------------- SORT ----------------
// The sort() method sorts the elements of an array in place and returns the sorted array.
// arr.sort([compareFunction])
const sortedPeople = people.sort((a, b) => {
  return a.age - b.age;
});
// console.log(sortedPeople); // [ { name: 'Jane', age: 25 }, { name: 'John', age: 30 }, { name: 'Jill', age: 35 }, { name: 'Jack', age: 40 } ]

// ---------------- FIND ----------------
const jack = people.find((person) => {
  return person.name === "Jack";
});
//console.log(jack); // { name: 'Jack', age: 40 }

// ---------------- FOREACH ----------------
people.forEach((person, i) => {
  // console.log(`index ${i} and name ${person.name}`);
});

// ---------------- INCLUDES ----------------
// console.log("includes", people.includes(jack));
// false

// ---------------- SOME ----------------
// console.log( "some", people.some((person) => person.age < 30));
// true

// ---------------- EVERY ----------------
// console.log( "every", people.every((person) => person.age < 30));
// false

// ---------------- FINDINDEX ----------------
// console.log(people.findIndex((person) => person.age === 40));
// 3

// ---------------- FROM ----------------
const arr = Array.from("Hello");
// console.log(arr);
//[ 'H', 'e', 'l', 'l', 'o' ]

// ---------------- OF ----------------
const arr2 = Array.of(1, 2, 3, 4, 5);
// console.log(arr2);
// [ 1, 2, 3, 4, 5 ]
