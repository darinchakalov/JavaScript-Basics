function sequence(input) {
    let num = Number(input[0])
    let currentNum = 1
    console.log(currentNum)
    while (((currentNum * 2) + 1) <= num) {
        currentNum = (currentNum * 2) + 1;
        console.log(currentNum)
    }

}
sequence(['8'])