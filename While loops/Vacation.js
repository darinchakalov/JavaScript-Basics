function vacantion(input) {
    let vacationCost = Number(input[0]);
    let startMoney = Number(input[1]);
    let spendDays = 0;
    let index = 2;
    let moneySaved = false;
    let days = 0;
    while (true) {
        if (input[index] == 'save') {
            startMoney += Number(input[index + 1])
            days++
            if (startMoney >= vacationCost) {
                moneySaved = true;
                break;
            }
        } else if (input[index] == 'spend') {
            spendDays++
            if (spendDays == 5) {
                break;
            }
            startMoney -= Number(input[index + 1])
            days++
            if (startMoney < 0) {
                startMoney = 0;
            }
        }
        index++
    }

    if (moneySaved == true) {
        console.log(`You saved the money for ${days} days.`);
    } else {
        console.log("You can't save the money.");
        console.log(spendDays);
    }
}
//vacantion(['2000', '1000', 'spend', '1200', 'save', '2000'])
//vacantion(['250', '150', 'spend', '50', 'spend', '50', 'save', '100', 'save', '100'])
vacantion(['110', '60', 'spend', '10', 'spend', '10', 'spend', '10', 'spend', '10', 'spend', '10'])
