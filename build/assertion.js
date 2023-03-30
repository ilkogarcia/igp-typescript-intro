"use strict";
let randomValue = 10;
randomValue = 'Mateo';
randomValue = true;
if (typeof randomValue === "string") {
    console.log(randomValue.toUpperCase()); //* Returns MATEO to the console.
}
else {
    console.log("Error - A string was expected here."); //* Returns an error message.
}
