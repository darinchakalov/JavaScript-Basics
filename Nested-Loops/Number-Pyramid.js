function pyramid(input) {
    let num = Number(input[0]);

    let current = 1;
    let isBigger = false;
    let printCurrentLine = '';
    for (let x1 = 0; x1 < num; x1++) {
        for (let x2 = 0; x2 <= x1; x2++) {
            if (current > num) {
                isBigger = true
                break;
            }
            printCurrentLine+= current + " ";
            current++
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger) {
            break;
        }
        
    }
}
pyramid(['7'])