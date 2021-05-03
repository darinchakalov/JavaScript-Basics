function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermans = Number(input[2]);

    let boatPrice = 0;
    switch (season) {
        case "Spring":
            boatPrice = 3000;
            break;
        case "Summer":
        case "Autumn":
            boatPrice = 4200;
            break;
        case "Winter":
            boatPrice = 2600;
            break;
    }
    if (fishermans <= 6) {
        boatPrice = boatPrice - (boatPrice * 0.1);
    } else if (fishermans > 6 && fishermans <= 11) {
        boatPrice = boatPrice - (boatPrice * 0.15);
    } 
    else {
        boatPrice = boatPrice - (boatPrice * 0.25);
    }
    if (fishermans % 2 == 0 && season != 'Autumn') {
        boatPrice = boatPrice - (boatPrice * 0.05);
    }
    if (boatPrice > budget) {
        console.log(`Not enough money! You need ${(boatPrice - budget).toFixed(2)} leva.`)
    } else {
        console.log(`Yes! You have ${(budget - boatPrice).toFixed(2)} leva left.`)
    }
}
fishingBoat(['3600','Autumn','6'])
fishingBoat(['3000','Summer','11'])
fishingBoat(['2000','Winter','13'])