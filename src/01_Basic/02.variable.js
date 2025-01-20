/*
  Rules for Variable Naming
  ==========================
  - The variable name cannot be a reserved keyword.
  - The variable name must start with a letter or an underscore.
  - The variable name must only contain letters, numbers, or underscores.
  - Variable names are case-sensitive.

  What you can't do:
  - Start with a number.
  - Use spaces in the name.

  What you can do:
  - Start with an underscore.
  - Use hyphens (but typically avoided in JavaScript for variable names).

  Naming Conventions:
  ===================
  - Use camelCase for variable names (common in JavaScript). Example: `firstName`
  - Use snake_case for variable names (mostly used in Python). Example: `first_name`
*/

// Declaring a variable
let name;

// Declaring and initializing a variable
let me;
me = "Hazrat"; // Initializing 'me' with a value
// console.log(me); // Uncomment to see the value of 'me'

// Declaring and initializing a variable with a value
let youtubeChannel = "mrBeast";

// Reassigning the value of a variable
youtubeChannel = "mrBeast Gaming";
console.log(youtubeChannel); // Output: mrBeast Gaming

// Using const to declare a constant
const pi = 3.14;
// pi = 3.15; // Uncommenting this will show an error because constants can't be reassigned
console.log(pi); // Output: 3.14

/*
  Rules for Declaring Constants
  ============================
  - Constants declared with `const` cannot be reassigned.
  - Constants must be initialized with a value.
*/


// Exercise starts here

    let myName = "Hazrat";
    const whatDoYouWannaBecomeInYourLife = "programmer"
    let gender = "male";
    let twitterHandle = "@HazratSiddiqui";

    console.table([myName, whatDoYouWannaBecomeInYourLife, gender, twitterHandle]);

// Exercise ends here










