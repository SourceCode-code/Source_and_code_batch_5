//1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10;

if (typeof strTen === typeof numTen && strTen === numTen) {
    console.log("'10' and 10 are the same type and value.");
} else {
    console.log("'10' is not exactly equal to 10 by type/value.");
    let strTenAsNumber = Number(strTen);
    console.log("Converted value:", strTenAsNumber, "type:", typeof strTenAsNumber);
    console.log("Now equal by value:", strTenAsNumber === numTen);
}

// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.

// 3. Check if 'on' is found in both 'python' and 'jargon'.

// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."

// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:

// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.

// 7. Check if the type of '10' is equal to 10 using `parseInt`.

// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.

// 9. Write three JavaScript statements that provide falsy values.

// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:

// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.

// 12. Evaluate the following expressions and confirm with `console.log()`:

