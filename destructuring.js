/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring gives us a faster way to take an array of items and 
// turn those items into distinct, individual variables.  
// Instead of referencing each element of the  array by its index and 
// declaring each variable individually,   
// we can use destructuring to do it all on a single line of code.  

// Destructuring arrays


let ages = [30, 26, 27];
// instead of assigning each variable an item from the array individually
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
// we can do it on a single line with destructuring
let [john, mary, joe] = ages;
console.log(john, mary, joe)


// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alecia: "accountant",
};
let { mike, jill, alecia } = jobs;
console.log(mike, jill, alecia);

// in both of the above situations, while it  looks like you're defining an 
// array or an object,  
// by putting the square brackets or curly  braces on the left side of the 
// expression, ES6 understands that you are trying to create  
// three separate variables using destructuring. 


// Destructuring subsets

let languages = ["english", "french", "spanish", "german", "japanese"];
// Let's say John speaks two languages and we  want those assigned to two 
// separate variables.  
// What happens here is the first two values of  the array are assigned to 
// the two variables, and the rest of the array is ignored.
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary)

// you can skip values by leaving the  commas in place of the 
// values you want to skip.
let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary)
// logs spanish german

// example with objects
let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};
let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage)
// logs english german



// Using rest parameter syntax

let fruits = ["apple",  "orange", "banana", "peach", "cherry"];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite)
console.log(secondFavourite)
console.log(others)
// apple
// orange
// [ 'banana', 'peach', 'cherry' ]

let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
};
let { brian, sarah, ...rest } = favouriteFoods;
console.log(brian);
console.log(sarah);
console.log(rest);
// pizza
// vegetarian
// { anna: 'pasta', andrea: 'steak' }

// node destructuring.js