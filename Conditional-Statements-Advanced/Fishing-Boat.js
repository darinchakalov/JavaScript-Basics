function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermans = Number(input[2]);
    let cost = 0;
    let discount = 0;
    let finalprice = 0;
    if (season == "Spring") {
        cost = 3000;
        if (fishermans <= 6) {
            if (fishermans % 2 == 0 ) {
                discount = cost * 0.15;
                finalprice = cost - discount;
            } else {
                discount = cost * 0.1;
                finalprice = cost - discount;
            }
            if (budget > finalprice) {
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        } else if (fishermans > 6 && fishermans <= 11) {
            if (fishermans % 2 == 0 ) {
                discount = cost * 0.2;
                finalprice = cost - discount;
            } else {
                discount = cost * 0.15;
                finalprice = cost - discount;
            }
            if (budget > finalprice) {
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        } 
        else {
            if (fishermans % 2 == 0 ) {
                discount = cost * 0.30;
                finalprice = cost - discount;
            } else {
                discount = cost * 0.25;
                finalprice = cost - discount;
            }
            if (budget > finalprice) {
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        }
    } else if (season == 'Summer') {
        cost = 4200;
        if (fishermans <= 6) {
            if (fishermans % 2 == 0 ) {
                discount = cost * 0.15;
                finalprice = cost - discount;
            } else {
                discount = cost * 0.1;
                finalprice = cost - discount;
            }
            if (budget > finalprice) {
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        } else if (fishermans > 6 && fishermans <= 11) {
            if (fishermans % 2 == 0 ) {
                discount = cost * 0.2;
                finalprice = cost - discount;
            } else {
                discount = cost * 0.15;
                finalprice = cost - discount;
            }
            if (budget > finalprice) {
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        } 
        else {
            if (fishermans % 2 == 0 ) {
                discount = cost * 0.30;
                finalprice = cost - discount;
            } else {
                discount = cost * 0.25;
                finalprice = cost - discount;
            }
            if (budget > finalprice) {
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        }
    } else if (season == 'Autumn') {
        cost = 4200;
        if (fishermans <= 6) {
                discount = cost * 0.1;
                finalprice = cost - discount;
            if (budget > finalprice) {
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        } else if (fishermans > 6 && fishermans <= 11) {
                discount = cost * 0.15;
                finalprice = cost - discount
            if (budget > finalprice) {
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        } 
        else {
            discount = cost * 0.25;
            finalprice = cost - discount;
            if (budget > finalprice) {
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        }
    } 
    else {
        cost = 2600;
        if (fishermans <= 6) {
            if (fishermans % 2 == 0 ) {
                discount = cost * 0.15;
                finalprice = cost - discount;
            } else {
                discount = cost * 0.1;
                finalprice = cost - discount;
            }
            if (budget > finalprice) {
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        } else if (fishermans > 6 && fishermans <= 11) {
            if (fishermans % 2 == 0 ) {
                discount = cost * 0.2;
                finalprice = cost - discount;
            } else {
                discount = cost * 0.15;
                finalprice = cost - discount;
            }
            if (budget > finalprice) {
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        } 
        else {
            if (fishermans % 2 == 0 ) {
                discount = cost * 0.30;
                finalprice = cost - discount;
            } else {
                discount = cost * 0.25;
                finalprice = cost - discount;
            }
            if (budget > finalprice) {
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        }
    }
}
fishingBoat(['3000','Summer','11'])