function solve(input) {
    let start = input[0]
    let finish = input[1]
    let printLine = '';
    for (let i = start; i <= finish; i++) {
        let current = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j <= current.length; j++) {
            let currentDigit = Number(current.charAt(j))
            if (j % 2 == 0) {
                evenSum += currentDigit
            } else {
                oddSum += currentDigit
            }
        }
        if (oddSum === evenSum) {
            printLine+= `${i} `
        }
    }
    console.log(printLine);
}
solve(['100000', '100050'])