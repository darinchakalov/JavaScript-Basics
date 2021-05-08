function solve(input) {
    let index = 0
    let primeSum = 0;
    let nonPrimeSum = 0;
    while (input[index] !== 'stop') {
        if (Number(input[index] < 0)) {
            console.log(`Number is negative.`);
        } else {
            let prime = true;
            for (let d = 2; d <= Math.sqrt(input[index]); d++) {
                if (Number(input[index]) % d == 0) {
                    prime = false;
                    break;
                }
            }
            if (prime) {
                primeSum += Number(input[index]);
            } else {
                nonPrimeSum += Number(input[index]);
            }
        }
        index++
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
solve(['3', '9', '0', '7', '19', '4', 'stop'])