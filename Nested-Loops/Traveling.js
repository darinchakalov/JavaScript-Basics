function traveling(input) {
    let destination = input[0]
    let cost = Number(input[1])
    let currentMoney = 0;
    let index = 2;
    let gotToDestination = false
    while (input[index] !== 'End') {
        if (input[index] === 'End') {
            break;
        }
        if (Number.isNaN(Number(input[index]))) {
            if (input[index] === 'End') {
                break;
            } else {
                destination = input[index]
            }
        } else {
            currentMoney += Number(input[index])
        }
        if (currentMoney >= cost) {
            console.log(`Going to ${destination}!`);
            //currentMoney = currentMoney - cost;
            currentMoney = 0;
            if (input[index + 1] === 'End') {
                break;
            } else {
                destination = input[index + 1]
                cost = Number(input[index + 2])
            }
            gotToDestination = true;
            index += 2;
        }
        if (currentMoney < cost) {
            gotToDestination = false;
        }
        if (!gotToDestination) {
            index++
        }
    }
}
traveling(['Greece', '1000', '200', '200', '300', '100', '150', '240', 'Spain', '1200', '300', '500', '193', '423', 'End'])