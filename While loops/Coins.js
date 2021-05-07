function coins(input) {
    let change = Number(input[0]);
    let coins = 0;
    while (true) {
        if (change >= 2) {
            coins++;
            change -= 2;
            change = change.toFixed(2)
            if (change <= 0) {
                break;
            }
        } else if (change < 2 && change >= 1) {
            coins++;
            change -= 1;
            change = change.toFixed(2)
            if (change <= 0) {
                break;
            }
        } else if (change < 1 && change >= 0.20){
            coins++;
            change -=0.20
            change = change.toFixed(2)
            if (change <= 0) {
                break;
            }
        } else if (change < 0.20 && change >= 0.10) {
            coins++;
            change -= 0.10
            change = change.toFixed(2)
            if (change <= 0) {
                break;
            }
        } else if (change < 0.10 && change >= 0.02){
            coins++;
            change -= 0.02
            change = change.toFixed(2)
            if (change <= 0) {
                break;
            }
        } 
        else if (change < 0.02 && change >= 0.01){
            coins++;
            change -= 0.1
            change = change.toFixed(2)
            if (change <= 0) {
                break;
            }
        }        
    }
    console.log(coins);
}
coins(['1.51'])