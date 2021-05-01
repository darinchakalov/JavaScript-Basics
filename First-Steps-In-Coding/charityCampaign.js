function charityCampaign(input) {
    let cakePrice = 45;
    let wafflePrice = 5.8;
    let pancacesPrice = 3.2;

    let campaignDays= input[0];
    let numberOfBakers= input[1];
    let numberOfCakesPerBaker= input[2];
    let numberOfWafflesPerBaker= input[3];
    let numberOfPankesPerBaker= input[4];

    let numberOfCakes = (numberOfBakers*numberOfCakesPerBaker)* campaignDays;
    let numberOfWaffles = (numberOfBakers*numberOfWafflesPerBaker)* campaignDays;
    let numberOfPankes = (numberOfBakers*numberOfPankesPerBaker)* campaignDays;

    let moneyBeforeExpenses = (numberOfCakes*cakePrice)+(numberOfWaffles*wafflePrice)+(numberOfPankes*pancacesPrice);
    let expences = moneyBeforeExpenses/8;
    let finalMoney= moneyBeforeExpenses-expences;

    console.log(Number(Math.round(finalMoney+'e'+2)+'e-'+2));
    console.log(Number(Math.round(finalMoney+'e2')+'e-2'));
}
charityCampaign(['23','8','14','30','16']);
charityCampaign(['131','5','9','33','46']);