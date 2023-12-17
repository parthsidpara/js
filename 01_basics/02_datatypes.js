"use strict"; // Enable strict mode to catch common coding mistakes

// Avoid using alerts in Node.js, as it is typically used in a browser environment
// alert(3 + 3); // Commented out for Node.js environment

// Use console.log for outputting values in a Node.js environment
console.log(3 
    + 
    3); // Ensure code readability by maintaining consistent indentation

console.log("Hitesh");

// Declare variables with various data types
let name = "hitesh"; // string
let age = 18; // number
let isLoggedIn = false; // boolean
let state; // undefined (since no value is assigned yet)

// Data types in JavaScript
// number: Represents numeric values (up to 2 to the power of 53)
// bigint: Represents larger integers
// string: Represents textual data enclosed in double or single quotes
// boolean: Represents true or false values
// null: Represents a standalone value with the absence of any object value
// undefined: Represents an uninitialized variable
// symbol: Represents a unique identifier
// object: Represents a collection of key-value pairs (properties)

// Output the data types of 'undefined' and 'null'
console.log("Type of undefined:", typeof undefined); // Output: undefined
console.log("Type of null:", typeof null); // Output: object (Note: This is a historical quirk in JavaScript)

// Note: JavaScript typeof null returning 'object' is considered a mistake in the language design.
