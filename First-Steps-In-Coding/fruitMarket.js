function fruitMarket(input) {
    let strawberriesPrice = input[0];
    let kgOfBannanas = input[1];
    let kgOfOranges = input[2];
    let kgOfРaspberries = input[3];
    let kgOfStrawberries = input[4];

    let raspberriesPrice = strawberriesPrice/2;
    let orangesPrice = raspberriesPrice - (raspberriesPrice*0.4);
    let bannanasPrice = raspberriesPrice - (raspberriesPrice*0.8);

    let finalPrice = (strawberriesPrice*kgOfStrawberries)+(kgOfBannanas*bannanasPrice)+(kgOfOranges*orangesPrice)+(kgOfРaspberries*raspberriesPrice);
    console.log(Number(Math.round(finalPrice+'e'+2)+'e-'+2));
}
fruitMarket(['48','10','3.3','6.5','1.7']);
fruitMarket(['63.5','3.57','6.35','8.15','2.5']);