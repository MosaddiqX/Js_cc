// Color-coded logging component
function logMessage(message, colorCode) {
  const colors = {
    purple: "\x1b[35m",
    green: "\x1b[32m",
    blue: "\x1b[34m",
    gray: "\x1b[37m",
    cyan: "\x1b[36m",
    red: "\x1b[31m",
    reset: "\x1b[0m",
  };

/*
    Use the logMessage function for color-coded output
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    Steps:
    1. add color to the message
    2. add reset color to the message
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
*/
  console.log(`${colors[colorCode] || colors.reset}${message}${colors.reset}`);
}

let fizzBizzArray = [];
function FizzBuzzGame(targetNumber) {
  for (let i = 1; i <= targetNumber; i++) {
    const num1 = 3;
    const num2 = 5;

    // Use the logMessage function for color-coded output
    switch (true) {
      case i % num1 === 0 && i % num2 === 0:
        logMessage(`FizzBuzz: ${i}`, "purple");
        fizzBizzArray.push("FizzBuzz: " + i);
        break;

      case i % num1 === 0 && i % num2 !== 0:
        logMessage(`Fizz: ${i}`, "green");
        fizzBizzArray.push("Fizz: " + i);
        break;

      case i % num1 !== 0 && i % num2 === 0:
        logMessage(`Buzz: ${i}`, "blue");
        fizzBizzArray.push("Buzz: " + i);
        break;

      default:
        logMessage(`${i}`, "gray");
        fizzBizzArray.push(i);
        break;
    }
  }

  // Summary message
  logMessage("FizzBuzz Game Completed! Here are your results:", "cyan");
  logMessage(
    fizzBizzArray.length
      ? fizzBizzArray.join(", ")
      : "No FizzBuzz results to show.",
    "red"
  );
}

FizzBuzzGame(100);
