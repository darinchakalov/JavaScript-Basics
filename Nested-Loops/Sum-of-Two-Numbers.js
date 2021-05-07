function sum(input) {
    let start = Number(input[0])
    let finish = Number(input[1])
    let num = Number(input[2])
    let comb = 0;
    let found = false
    for (let x1 = start; x1 <= finish; x1++) {
        for (let x2 = start; x2 <= finish; x2++) {
            //console.log(`${x1} ${x2}`);
            comb++
            if (x1 + x2 == num) {
                console.log(`Combination N:${comb} (${x1} + ${x2} = ${num})`);
                found = true;
                break;
            }
        
        }
        if (found) {
            break;
        }
    }
    if (found == false) {
        console.log(`${comb} combinations - neither equals ${num}`);
    }
}
sum(['88', '888','1000'])