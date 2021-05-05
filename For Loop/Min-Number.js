function minNumber(input) {
    let n = input[0]
    let currentNumber = 0;
    let minNum = input[1]

    for (i = 2; i <= n; i++) {
        currentNumber = Number(input[i])
        if ((currentNumber) < (minNum)) {
            minNum = currentNumber
        }
    }
    console.log(minNum)
}
minNumber(['4','-45','-520','7','999'])