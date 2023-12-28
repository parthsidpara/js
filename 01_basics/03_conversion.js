let score1 = 100;
let score2 = "101"
let score3 = "101abc"

console.log("Type of score1: ", typeof score1);
console.log("Type of score2: ", typeof (score2));
console.log("Type of score3: ", typeof (score3));

// Converting score2(string) --> to number
let numScore2 = Number(score2)
console.log("Type of score2 after converting it into a number: ", typeof numScore2);


// but if we convert score3(string) --> to number, it will also have datatype of number even if 101abc is not a number
let numScore3 = Number(score3)
console.log("Type of score3 after converting it into a number: ", typeof numScore3);

// numScore3 is NaN
console.log(numScore3);

// also check this:
let i1 = null;
let ni1 = Number(i1);

let i2 = undefined;
let ni2 = Number(i2);

let i3 = true;
let i4 = false;
let ni3 = Number(i3);
let ni4 = Number(i4);

let i5 = "this is a string";
let ni5 = Number(i5)

console.table([ni1, ni2, ni3, ni4, ni5]);

// Oke.
// converting into boolean

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//for different values of variable isLoggesIn:
// 1 => true; 0 => false
// "" => false
// "hitesh" => true

// Oke.
// Converting into string:

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);