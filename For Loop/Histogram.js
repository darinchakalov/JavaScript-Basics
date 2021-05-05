function histogram(input) {
    let num = input[0]
    let numsUnder200 = 0;
    let numsBetween200to399 = 0;
    let numsBetween400to599 = 0;
    let numsBetween600to799 = 0;
    let numsBiggerThan800 = 0;
    for (i = 1; i <= num; i++) {
        if (input[i] < 200) {
            numsUnder200 += 1;
        } else if (input[i] >= 200 && input[i] < 400) {
            numsBetween200to399 += 1;
        } else if (input[i] >= 400 && input[i] < 600) {
            numsBetween400to599 += 1;
        } else if (input[i] >= 600 && input[i] < 800) {
            numsBetween600to799 += 1;
        } else if (input[i] >= 800) {
            numsBiggerThan800 += 1;
        }
    }
    console.log(`${((numsUnder200 / num) * 100).toFixed(2)}%`)
    console.log(`${((numsBetween200to399 / num) * 100).toFixed(2)}%`)
    console.log(`${((numsBetween400to599 / num) * 100).toFixed(2)}%`)
    console.log(`${((numsBetween600to799 / num) * 100).toFixed(2)}%`)
    console.log(`${((numsBiggerThan800 / num) * 100).toFixed(2)}%`)
}
histogram(['3', '1', '2', '999'])