// Declare a constant variable 'accountId' with a numeric value
const accountId = 144553;

// Declare a variable 'accountEmail' and initialize it with a string value
let accountEmail = "hitesh@google.com";

// Declare a variable 'accountPassword' and initialize it with a string value
var accountPassword = "12345";

// Declare a variable 'accountCity' without using const, let, or var; automatically becomes a global variable
accountCity = "Jaipur";

// Declare a variable 'accountState' without initialization; it will have the value 'undefined'
let accountState;
var abcd;

// Attempt to reassign 'accountId' (const variables cannot be reassigned)
// Uncommenting the line below will result in an error
// accountId = 2;

// Reassign the values of the mutable variables
accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

// Output the value of 'accountId' to the console
console.log(accountId);

/*
   Prefer not to use 'var'
   because of issues related to block scope and functional scope
*/

// Display the values of variables in a table format using console.table
console.table([accountId, accountEmail, accountPassword, accountCity, accountState, abcd]);
