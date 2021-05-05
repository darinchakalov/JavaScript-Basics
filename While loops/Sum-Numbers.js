function sumNumbers(input) {
    let initialNumber = Number(input[0]);
    let sum = 0;
    let index = 1;
    while (true) {
        sum += Number(input[index]);
        index++;
        if (sum >= initialNumber) {
            break;
        }
    }
    console.log(sum);
}
sumNumbers(['100', '10', '20', '30', '40']);