function combinations(input) {
    let num = Number(input[0])
    let comb = 0;
    for (i = 0; i <= num; i++){
        for (g = 0; g <= num; g++){
            for (h = 0; h <= num; h++){
                if (i + g + h == num) {
                    comb++
                }
            }
        }
    }
    console.log(comb);
}
combinations([25])