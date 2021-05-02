function operationsBetweenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2]; 
    let end='';
    let result = 0;
    if (operator == '+' || operator == '-' || operator == '*') {
        if (operator == '+') {
            result = num1 + num2
        } else if (operator == '-'){
            result = num1 - num2
        } else {
            result = num1 * num2
        }
        if (result % 2 == 0) {
            end = 'even';
        } else {
            end = 'odd';
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${end}`)
    } else if (operator == '/' || operator == '%') {
        if (num2 == 0) {
            console.log(`Cannot divide ${num1} by zero`)
        } else {
            if (operator == '/') {
                result = num1 / num2
                console.log(`${num1} ${operator} ${num2} = ${(result).toFixed(2)}`)
            } else {
                result = num1 % num2
                console.log(`${num1} ${operator} ${num2} = ${(result)}`)
            }
        }        
    }
}
operationsBetweenNumbers(['123','12','/'])