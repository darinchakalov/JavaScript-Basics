function toyShop(input) {
    let puzzlePrice = 2.6;
    let dollPrice = 3;
    let bearPrice = 4.1;
    let minionPrice = 8.2;
    let truckPrice = 2;

    let tripPrice = input[0];
    let puzzleCount = input[1];
    let dollCount = input[2];
    let bearCount = input[3];
    let minionCount = input[4];
    let truckCount = input[5];

    let totalToysCount = puzzleCount + dollCount + bearCount + minionCount + truckCount;
    let price = (puzzleCount * puzzlePrice) + (dollCount * dollPrice) + (bearCount * bearPrice) + (minionCount * minionPrice) + (truckCount * truckPrice);
    if (totalToysCount >= 50) {
        finalPrice = price - ( price * 0.25);
    } else{
        finalPrice = price;
    }
    let rent = finalPrice * 0.10;
    let moneyLeft = finalPrice - rent;

    if (moneyLeft >= tripPrice) {
        let left = moneyLeft - tripPrice;
        console.log(`Yes! ${left.toFixed(2)} lv left.`);
    } else {
        let left = tripPrice - moneyLeft;
        console.log(`Not enough money! ${left.toFixed(2)} lv needed.`);
    }
}
toyShop(['40.8','20','25','30','50','10']);
toyShop(['320','8','2','5','5','1']);