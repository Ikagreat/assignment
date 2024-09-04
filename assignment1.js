function calculate(num1, num2, operation) {
    if (num1 === null || num1 === undefined || num2 === null || num2 === undefined) {
        return "Invalid: Numbers shoud not be null or undefined.";
    }

    const validOperations = ['add', 'minus', 'multiply', 'divide'];
    if (!validOperations.includes(operation)) {
        return "Invalid operation: Must include 'add', 'minus', 'multiply', or 'divide'.";
    }

    if (operation === 'add') {
            return num1 + num2;}
        else if (operation === 'minus') {
            return num1 - num2
        }
        else if (operation === 'multiply') {
            return num1 * num2
        }
        else if (operation === 'divide') { 
            if (num2 === 0) {
                return "Undefined"
            }
             return num1 / num2;
            } else { return "Invalid operation."
    }
}

console.log(calculate(5, 3, 'add'))
console.log(calculate(40, 28, 'minus'))
console.log(calculate(29, 13, 'subtract'))
console.log(calculate(4, 5, 'multiply'))
console.log(calculate(6, null, 'multiply'))
console.log(calculate(39, 3, 'divide'))
console.log(calculate(13, 0, 'divide'))