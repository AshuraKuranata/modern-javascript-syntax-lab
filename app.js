/* Modern JavaScript Syntax Lab */

// # map() iterator


/*
Uses the .map() operator to iterate through an array and act on each item to generate a new array.
The old array is not manipulated.
Use return to add the items into the new variable storing the new array information.

const flavors = ['vanilla', 'chocolate', 'strawberry'];

const iceCreamFlavors = flavors.map((flavor) => {
    return `${flavor} ice cream`;
})

console.log(iceCreamFlavors);
*/

// ## Exercise 1:
// a. Use the `map()` method to iterate over the provided `nums` array
//
// b. Use the callback function of the `map()` method you wrote to
//    create a new array where each value is multiplied by 2.
//    Name the new array `numsTimesTwo`.
//
// c. Console log the new array.

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Your code here:

const numsTimesTwo = nums.map((num) => {
    num = num*2;
    return `${num}`
})

console.log('Exercise 1: \n' + numsTimesTwo.join(', '))

// # Array Destructuring
/*
Array destructuring allows you to use a single line of code to take the aligned items in an array to store into variables
const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];
const [firstPet, secondPet] = petsArray;

console.log(firstPet);
console.log(secondPet);
*/

// ## Exercise 2:
// a. Given the provided `pizzaToppings` array, use destructuring to extract 
//    the first and second values and place them into variables. Name the 
//    variable that corresponds to the first value `firstIngredient`. Name the 
//    variable that corresponds to the second value `secondIngredient`.
//
// b. Console log the `firstIngredient` and `secondIngredient` variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here:

const [firstIngredient, secondIngredient] = pizzaToppings;

console.log('\nExercise 2: \n' + firstIngredient + '\n' + secondIngredient);

// # Object destructuring
/*
Like arrays, can do the same with an object: call upon the properties of object to assign to variables:

const person = {
    name: 'Alex',
    role: 'Software Engineer',
};

const { name, role } = person;

console.log(name);
console.log(role);
*/

// ## Exercise 3:
// a. Given the provided `car` object, use destructuring to create two
//    variables: `make` and `model` that will hold the respective values.
//
// b. Console log the `make` and `model` variables.

const car = {
    make: 'Audi',
    model: 'Q5',
};
  
// Your code here:
  
const { make, model } = car;
console.log('\nExercise 3: \n' + make + '\n' + model)

// # Apply spread operator on arrays
/*
'...' operator allows the duplication or combination of arrays, 
allows copy of elements from one array to another directly. 

Important distinction: this clones as a new array, not a reference.  So if either is changed, the other is not affected.

const originalArray = [1, 2, 3];
const duplicateArray = [...originalArray]; // This code creates a duplicated array
const referenceArray = originalArray; // This code refers to the original array, which means changes here WILL affect the original array or vice versa
console.log(duplicateArray);

const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['broccoli', 'carrot', 'spinach'];

const fruitsAndVegetables = [...fruits, ...vegetables];
console.log(fruitsAndVegetables);
*/
// ## Exercise 4: 
// a. Duplicate the provided `morePizzaToppings` array using the spread 
//    operator and assign it to a variable named `uncontroversialPizzaToppings`.
// 
// b. Console log the `uncontroversialPizzaToppings` variable.

const morePizzaToppings = ['Cheese', 'Sauce'];

// Your code here:

const uncontroversialPizzaToppings = [...morePizzaToppings];
console.log('\nExercise 4:\n' + uncontroversialPizzaToppings.join(', '));

// # Applying the spread operator on objects

/*
Like array, can also spread objects:
const originalObject = {
    foo: 'Hello',
    bar: 100,
}
const clonedObject = { ...originalObject }; // This way makes a duplicated object in clonedObject
const referenceObject = originalObject; // This way makes the constant referenceObject a reference to the original originalObject, which means changes to either changes both.
// referenceObject.foo = "Goodbye"

clonedObject.foo = 'Welcome';
clonedObject.bar = 24

console.log(originalObject, clonedObject, referenceObject)
*/

// ## Exercise 5:
// a. Duplicate the provided `anotherCar` object and spread its values into a 
//    new variable named `myCar`.
//
// b. Change the `make` and `model` properties of the `myCar` object to new 
//    values.
//
// c. Console log both objects and observe the results.

const anotherCar = {
    make: 'Toyota',
    model: 'RAV4',
};
  
// Your code here:

const myCar = { ...anotherCar };
myCar.make = 'Mazda';
myCar.model = 'CX-9';
console.log('\nExercise 5:\n' + `Make: ${myCar.make}\n` + `Model: ${myCar.model}`)

// # Dynamic Keys in Objects
/*
Variable and expressions can be used as dynamic keys in object with bracket notations.
Enhances ability to access data in an object, great way to access key names not known ahead of time or if it needs to be computed on the fly.

let fruitInventory = { // changed to a 'let' to practice using a dynamic key to alter objects
    apples: 2,
    oranges: 4,
}
const selectedFruit = 'apples'
const selectedFruitCount = fruitInventory[selectedFruit];

const fruitType = 'bananas';
fruitInventory = {...fruitInventory, [fruitType]: 5} // One way append the new fruit types into an object

console.log(selectedFruitCount)
console.log(fruitInventory)
*/

// ## Exercise 6:
// a. Define a variable named `propertyName` and assign a string (like 
//    'username', 'age', or 'email') to it.
// 
// b. Create an object named `userProfile`. 
// 
// c. Use `propertyName` as a dynamic key in `userProfile`. Assign it a 
//    relevant value.
//
// d. Console log the `userProfile` object to see the result.
//
// Your code here:

const username = 'PropertyManager';
const userage = 35;
const email = 'buyMyHouse@aol.com';

let userProfile = {}

userProfile = {username, userage, email}
console.log('\nExercise 6:\n' + `Username: ${userProfile.username}\n` + `Age: ${userProfile.age}\n` + `Email: ${userProfile.email}`)

// # import and export

/*
## Export:
Allows sharing of code between different JavaScript files. More modern and native approach over require and module.exports.
export allows user of functions, objects, or primitives available for other files:
1. **Named Exports**: used to export multiple items from a file:
    export const myNumber = 123;
    export const myString = 'Hello;
2. **Default Exports**: userd to export a single item from a file:
    export default function superCoolFunction () {
    ...
}
Can mix use of Default and Named exports, but best practice is to stick with a single style for consistency and clarity.  Named is usually preferred.

## Import:
Use import to bring over exported files:
1. **Importing named exports**:
    import { myNumber, myString } from './myData.js;
2. **Importing a default export**:
    import superCoolFunction from './superCoolFunctions.js';
Can also import all named exports as a single object, useful when dealing with modules that export several items:
    import * as MyData from './myData.js';
    console.log(MyData.myNumber);
    console.log(MyData.myString);
*/
// ## Exercise 7:

import name, { computer, age, job } from'./exportingFile.js';
console.log(`\nExercise 7:\n` + name, computer, age, job);

// # Default Parameters
/*
Default values for parameters (ensures that the code will have something to operate on):
function addTwoNumbers(numA = 0, numB = 0) { // add in the fact that the parameter equals something, otherwise it will return NaN. 
    return numA + numB;
}
console.log(addTwoNumbers(2));

*/
// ## Exercise 8:
// a. Create a function with two parameters, `noun` and `adjective`.
// 
// b. Give `noun` a default value of "cat" and `adjective` a default value of 
//    "orange".
//
// c. The function should log a sentence 'The cat is orange.' by default, but 
//    should substitute the appropriate parameters when it is supplied with 
//    arguments.
//
// Your code here:

const defaultSentence = function (noun = 'cat', adj = 'orange') {
    return console.log(`\nExercise 8:\nThe ${noun} is ${adj}.`)
}
defaultSentence(undefined, 'yellow')

// # Ternary operator
/*
A different way to handle conditional logic in a single code line.  a more concise 'if...else' statement.
3 parts:
1. Condition: a boolean expression evaluated for truthiness, placed before the ?
2. True Expression: value assigned to the variable if the condition is true, immediately after the ?
3. False Expression: value assigned to the variable if the condition is false, following the :

const ternAge = 22;

// ### Standard if...else statement:
// let access;
// if (ternAge > 21) { 
//     access = 'Yes';
// } else {
//     access = 'No';
// }
// use of the ternary:

// ### Ternary operator statement 
let access = ternAge > 21? 'Yes' : 'No';

console.log(access)
*/

// ! Exercise 9:
// a. Convert the following `if...else` statement into a ternary:
//
//    if (pizza === 'tasty') {
//      console.log('yum');
//    } else {
//      console.log('yuck');
//    }
//
// Starting code (don't modify this):

const pizza = 'tasty';

// Your code here:

let pizzaResponse = pizza === 'tasty'? 'yum' : 'yuck';
console.log(`\nExercise 9:\nPizza taste? ${pizzaResponse}`)

// # Boolean Gates
/*
Logical operations like '&&' (and) and '||' (or) play interesting roles outside of if...else statements:
1. &&
This evaluates expression from left to right and returns the **FIRST FALSY VALUE** it encounters.  If all values are truthy, it returns the **LAST VALUE**.
Examples: 
    const result = false && 'foo';
    console.log(result)
    // Prints: false 

    const result = 'hello' && '';
    console.log(result);
    // Prints: ''

    const result = 'hello' && '';
    console.log(result);
    // Prints: ''

    const result = 'foo' && 'bar';
    console.log(result); 
    // Prints: 'bar'

2. ||
This evaluates expressions from left to right and returns the **FIRST TRUTHY VALUE** it encounters.  If all values are falsy, it returns the **LAST VALUE**.
Examples:

const result = '' || 'foo';
console.log(result);
// Prints: 'foo'

const result = 2 || 0;
console.log(result);
// Prints: 2

const result = '' || 0;
console.log(result);
// Prints: 0

Guess:

let myVar;
const result1 = 'bar' && 'foo';
const result2 = false || 243;
const result3 = 42 && false;
const result4 = myVar || 3000;

console.log('result1:', result1); // print 'foo'
console.log('result2:', result2); // print '243'
console.log('result3:', result3); // print 'false'
console.log('result4:', result4); // print '3000'
*/

// ## Exercise 10:
// ! 10.1: Set language
// a. Construct a single line of code that assigns a default value using the 
//    logical OR operator. This line should match the logic of the following 
//    statement:
//
//    "lang is equal to localLangConfig or the default value of English."
//
// b. Create a variable called `lang`.
//
// c. Assign `lang` the value of localLangConfig or 'en' as a default if 
//    `localLangConfig is falsy.
//
// d. Log the value of `lang` to the console.
//
// Your code here (localLangConfig is provided to get you started):

// Simulated language configuration (change this variable to test)
const localLangConfig = null; // Change to 'es', 'fr', etc., or leave it `null`.
let lang = localLangConfig || 'en';
console.log(`\nExercise 10.1:\nLanguage: ${lang}`)


// ## 10.2: Set website theme
// Intro: In this exercise, you'll construct a single line of code that assigns 
//        a default value to a variable named `theme` using the logical OR 
//        operator. This line should match the logic of the following statement:
//
//        "theme is equal to savedUserTheme or the default value of light."
//
// a. Create a variable called `theme`.
//
// b. Assign `theme` the value of `savedUserTheme` or 'light' as a default.
//
// c. Log the value of `theme` to the console.
//
// Your code here (`savedUserTheme` is provided to get you started):

// Simulated user theme preference (change this variable to test)
const savedUserTheme = 'turquoise'; // Change to 'dark', etc., or leave it `null`.
let theme = savedUserTheme || 'light';
console.log(`\nExercise 10.2\nWebsite Theme: ${theme}`)

// # Optional Chaining
/*
Way to access deeply nested properties safely.  Avoids errors when we attempt to access undefined or null properties

// TypeError issue - no key in object to refer to. 
const adventurer = {
    name: 'Alice',
}
console.log(adventurer.dog.name) // TypeError: Cannot read properties of undefined (reading 'name')

// Optional Chain
const adventurer = {
    name: 'Alice',
}
let dog = adventurer.dog?.name
console.log(dog) // Prints: undefined 
*/

// # Exercise 11:
// a. Use optional chaining in a console.log so that a console log of
//    `adventurer.cat.age` returns `undefined` instead of an error.
//
// Starting code (don't modify this):

const adventurer = {
    name: 'Alice',
  };
  
  // Your code here:
  
const cat = adventurer.cat?.name
console.log(`\nExercise 11:\nAdventurer's cat: ${cat}`)