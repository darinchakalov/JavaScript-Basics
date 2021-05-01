function birthdayParty(input) {
    let priceForVenue = Number(input[0]);
    let cakePrice = priceForVenue * 0.2;
    let drinksPrice = cakePrice - (cakePrice*0.45);
    let animatorPrice = priceForVenue/3;
    let budget = priceForVenue + cakePrice + drinksPrice + animatorPrice;
    console.log(budget);
}
birthdayParty(['2250']);