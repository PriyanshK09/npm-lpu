const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

// Taking input from the user
rl.question("Enter the first number: ", (num1) => {
    rl.question("Enter the second number: ", (num2) => {
        // Converting the input to numbers
        num1 = Number(num1);
        num2 = Number(num2);

        // Asking what to do with the numbers
        rl.question("Enter the operation (+, -, *, /): ", (operation) => {
            // Performing the operation
            let result;
            if (operation === "+") {
                result = add(num1, num2);
            }
            else if (operation === "-") {
                result = subtract(num1, num2);
            }
            else if (operation === "*") {
                result = multiply(num1, num2);
            }
            else if (operation === "/") {
                result = divide(num1, num2);
            }
            else {
                result = "Invalid operation!";
            }

            console.log("Result:", result);

            rl.close();
        });
    });
});
