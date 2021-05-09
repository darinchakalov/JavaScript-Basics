function specialNumbers(input) {
    let n = Number(input[0])
    let printLine = ''
    for (let i = 1111; i <= 9999; i++) {
        let ifSpecial = '' + i;
        let count = 0;
        for (let j = 0; j < ifSpecial.length; j++) {  
            if (n % Number(ifSpecial[j]) == 0) {
                count++
            }
            if (count == ifSpecial.length) {
                printLine += `${ifSpecial} `
            }
        }
    }
    console.log(printLine);
}
specialNumbers(['3'])