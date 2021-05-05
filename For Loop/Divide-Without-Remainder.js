function divider(input) {
    let num = Number(input[0])
    let numsDiv2 = 0;
    let numsDiv3 = 0;
    let numsDiv4 = 0;
    for (i = 1; i <= num; i++) {
        if ((input[i]) % 2 == 0) {
            numsDiv2++;
        }
        if ((input[i]) % 3 == 0) {
            numsDiv3++;
        }
        if ((input[i]) % 4 == 0) {
            numsDiv4++;
        }
    }
    console.log(`${((numsDiv2 / num) * 100).toFixed(2)}%`)
    console.log(`${((numsDiv3 / num) * 100).toFixed(2)}%`)
    console.log(`${((numsDiv4 / num) * 100).toFixed(2)}%`)
}
//divider(['10','680','2','600','200','800','799','199','46','128','65'])
divider(['3', '3', '6', '9'])

