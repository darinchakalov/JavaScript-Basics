function coins2(input) {
    let sum = Number(input[0])
    let coins = 0;
    while (sum > 0) {

        if (sum >= 2) {
            sum -= 2
            coins++
        } else if (sum >=1){
            sum -= 1
            coins++
        }else if (sum >=0.50){
            sum -= 0.50
            sum = sum.toFixed(2)
            coins++
        }else if (sum >=0.20){
            sum -= 0.20
            sum = sum.toFixed(2)
            coins++
        }else if (sum >=0.10){
            sum -= 0.10
            sum = sum.toFixed(2)
            coins++
        }else if (sum >=0.05){
            sum -= 0.05
            sum = sum.toFixed(2)
            coins++
        }else if (sum >=0.02){
            sum -= 0.02
            sum = sum.toFixed(2)
            coins++
        }else if (sum >=0.01){
            sum -= 0.01
            sum = sum.toFixed(2)
            coins++
        }
    }
    console.log(coins);
}
coins2(['0.59'])