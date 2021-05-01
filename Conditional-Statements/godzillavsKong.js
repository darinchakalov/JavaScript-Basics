function godzillavsKong(input) {
    let budget = input[0];
    let numberOfpeople = input[1];
    let costPerCostume = input[2];

    let decor = Number(budget * 0.10);
    if (numberOfpeople >=150) {
        costPerCostume = costPerCostume - (costPerCostume * 0.1);
    }

    let totalCost = (numberOfpeople * costPerCostume) + decor;
    if (totalCost <= budget) {
        let budgetLeft = budget - totalCost;
        console.log('Action!');
        console.log(`Wingard starts filming with ${budgetLeft.toFixed(2)} leva left.`)
    } else {
        let minusBudget = totalCost - budget;
        console.log('Not enough money!');
        console.log(`Wingard needs ${minusBudget.toFixed(2)} leva more.`)
    }
}
godzillavsKong(['20000','120','55.5'])