/*
  JavaScript Data Types
  ======================
  JavaScript has different data types that fall into two main categories:
  - Primitive Data Types
  - Non-Primitive Data Types
*/

// 1. Primitive Data Types
// -----------------------
// A primitive data type is a data type that is not an object and has no methods.

// - Number
// - String
// - Boolean
// - Null
// - Undefined
// - Symbol (introduced in ECMAScript 2015)

// Example:
let age = 25; // Number
let name = "John Doe"; // String
let isStudent = true; // Boolean
let emptyValue = null; // Null
let notDefined; // Undefined
let uniqueKey = Symbol("id"); // Symbol

// 2. Non-Primitive Data Types
// ---------------------------
// A non-primitive data type is a data type that is an object and can have properties or methods.

// - Object

// Example:
let person = {
  name: "John Doe",
  age: 25,
  isStudent: true,
};

// Type Checking
// =============

// 1. Using the `typeof` operator
// -------------------------------
// The `typeof` operator checks the type of a variable or value.

// console.table([
//   { Variable: 'age', Type: typeof age },
//   { Variable: 'name', Type: typeof name },
//   { Variable: 'isStudent', Type: typeof isStudent },
//   { Variable: 'emptyValue', Type: typeof emptyValue },
//   { Variable: 'notDefined', Type: typeof notDefined },
//   { Variable: 'uniqueKey', Type: typeof uniqueKey },
// ]);

// 2. Using the `instanceof` operator
// ----------------------------------
// The `instanceof` operator checks whether an object is an instance of a specific constructor.

// console.log(person instanceof Object); // Output: true

/*
  Summary
  =======
  - Primitive data types include simple values like numbers, strings, and booleans.
  - Non-primitive data types (objects) can store collections of data and have properties or methods.
  - Use `typeof` to check primitive data types and `instanceof` to check object instances.
*/

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// Basic Math Operations
// ---------------------
let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
let difference = num1 - num2;
let power = num1 ** num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;

console.table([
  { Operation: "Sum", Result: sum },
  { Operation: "Difference", Result: difference },
  { Operation: "Power", Result: power },
  { Operation: "Product", Result: product },
  { Operation: "Quotient", Result: quotient },
  { Operation: "Remainder", Result: remainder },
]);

// Increment and Decrement Operators
// ---------------------------------
num1++; // Increment num1 by 1 (num1 = num1 + 1)
num2--; // Decrement num2 by 1 (num2 = num2 - 1)

// console.table([
//   { Operation: "Increment", Result: num1 },
//   { Operation: "Decrement", Result: num2 },
// ]);

// Boolean Operators
// -----------------
/*
  - Logical AND (&&): Returns true if both operands are true.
  - Logical OR (||): Returns true if at least one operand is true.
  - Logical NOT (!): Inverts the boolean value.
*/

// Relational Operators
let result1 = num1 > num2; // true
let result2 = num1 < num2; // false
let result3 = num1 >= num2; // true
let result4 = num1 <= num2; // false
let result5 = num1 == num2; // false
let result6 = num1 != num2; // true

// console.table([
//   { Comparison: "num1 > num2", Result: result1 },
//   { Comparison: "num1 < num2", Result: result2 },
//   { Comparison: "num1 >= num2", Result: result3 },
//   { Comparison: "num1 <= num2", Result: result4 },
//   { Comparison: "num1 == num2", Result: result5 },
//   { Comparison: "num1 != num2", Result: result6 },
// ]);

// Equality Operators
/*
  - Strict equality (===): Checks both value and type.
  - Strict inequality (!==): Checks both value and type.
  - Loose equality (==): Compares value only.
  - Loose inequality (!=): Compares value only.
*/

// Example:
let a = 10,
  b = "10";

console.log(a === b); // false (strict equality - type mismatch)
console.log(a == b); // true  (loose equality - values match)

// Truthy and Falsy Values
/*
  - Truthy values: true, 1, "string", [], {}, function() {}
  - Falsy values: false, 0, "", null, undefined, NaN
*/

// Examples of truthy and falsy values
console.log(Boolean(1)); // true (truthy)
console.log(Boolean(0)); // false (falsy)
console.log(Boolean("hello")); // true (truthy)
console.log(Boolean("")); // false (falsy)
console.log(Boolean(null)); // false (falsy)
console.log(Boolean([])); // true (truthy)
console.log(Boolean({})); // true (truthy)
console.log(Boolean(NaN)); // false (falsy)
