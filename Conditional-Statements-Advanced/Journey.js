function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = '';
    let cost = 0;
    let vecationType = '';
   
    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season == 'summer') {
            cost = budget * 0.3;
        } else {
            cost = budget * 0.7;
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = 'Balkans';
        if (season == 'summer') {
            cost = budget * 0.4;
        } else {
            cost = budget * 0.8;
        }
    } 
    else {
        destination = 'Europe';
        cost = budget * 0.9;
    }
    if (season == 'summer' && destination != 'Europe') {
        vecationType = 'Camp';
    } else if (season == 'winter' || destination == 'Europe'){
        vecationType = 'Hotel';
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${vecationType} - ${cost.toFixed(2)}`)
}
journey(['50','summer'])
journey(['75','winter'])