function traveling(input) {
    let destination = input.shift()
    let savings = 0
    let going = false
    while (destination !== "End"){
        let cost = Number(input.shift())
        while (cost > savings){
            savings+=Number(input.shift())
            if (savings >= cost) {
                console.log(`Going to ${destination}!`);
                savings = 0;
                going = true;
                break;
            }
        }
        destination = input.shift()
    }
}
traveling(['Greece', '1000', '200', '200', '300', '100', '150', '240', 'Spain', '1200', '300', '500', '193', '423', 'End'])