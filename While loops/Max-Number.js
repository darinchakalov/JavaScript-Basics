function maxNumber(input) {
    let index = 0
    let maxNum = Number(input[0])

    while (input[index] !== 'Stop') {
        let currentNum = Number(input[index]);
        if (currentNum > maxNum) {
            maxNum = currentNum;
        }
        index++;
    }
    console.log(maxNum);
}
maxNumber(['100', '101', '80', '70', 'Stop'])