function minNum(input) {
    let index = 0
    let minNum = Number(input[0])

    while (input[index] !== 'Stop') {
        let currentNum = Number(input[index]);
        if (currentNum < minNum) {
            minNum = currentNum;
        }
        index++;
    }
    console.log(minNum);
}
minNum(['100', '101', '55', '70', 'Stop'])