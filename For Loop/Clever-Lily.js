function cleverLily(input) {
    let age = Number(input[0])
    let priceOfWashingMachine = Number(input[1])
    let pricePerToy = Number(input[2])
    let moneyPerBirthday = 10;
    let sum = 0;
    let toysCount = 0;
    for (let i = 1; i <= age; i++) {
        if (i % 2 != 0) {
            toysCount += 1;
        } else {
            sum += moneyPerBirthday
            moneyPerBirthday += 10;
            sum -= 1;
        }
    }
    let moneyFromToys = (toysCount * pricePerToy)
    sum += moneyFromToys;
    if (priceOfWashingMachine < sum) {
        console.log(`Yes! ${(sum - priceOfWashingMachine).toFixed(2)}`)
    } else {
        console.log(`No! ${(priceOfWashingMachine - sum).toFixed(2)}`)
    }
}
cleverLily(['5', '9.99', '6.33'])