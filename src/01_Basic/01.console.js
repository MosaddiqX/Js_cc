// The console object in JavaScript is used for debugging and logging information to the browser's console.
// It provides various methods to output information in different formats and styles. Here are some common types:

// 1. console.log(): Used to output general information.
console.log("This is a log message.");

// 2. console.error(): Used to output error messages.
console.error("This is an error message.");

// 3. console.warn(): Used to output warning messages.
console.warn("This is a warning message.");

// 4. console.info(): Used to output informational messages.
console.info("This is an informational message.");

// 5. console.table(): Used to display tabular data in a table format.
console.table([{name: "Alice", age: 25}, {name: "Bob", age: 30}]);

// 6. console.group() and console.groupEnd(): Used to group related messages together.
console.group("Group of messages");
console.log("Message 1 in group");
console.log("Message 2 in group");
console.groupEnd();

// 7. console.time() and console.timeEnd(): Used to measure the time taken for an operation.
console.time("Time taken");
for(let i = 0; i < 1000000; i++) {} // Some operation
console.timeEnd("Time taken");

// 8. console.assert(): Outputs a message if the assertion is false.
console.assert(1 === 2, "This assertion failed, 1 is not equal to 2.");

