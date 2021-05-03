function newHouse(input) {
    let flowers = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);
    let discount = 0;
    let cost = 0;
    switch (flowers) {
        case "Roses":
            cost = 5 * count;
            if (count > 80) {
                discount = (cost * 0.1)
                cost = cost - discount; 
            }
            break;
        case "Dahlias":
            cost = 3.8 * count;
            if (count > 90) {
                discount = (cost * 0.15)
                cost = cost - discount; 
            }
            break;
        case "Tulips":
            cost = 2.8* count;
            if (count > 80) {
                discount = (cost * 0.15)
                cost = cost - discount; 
            }
            break;
        case "Narcissus":
            cost = 3* count;
            if (count < 120) {
                discount = (cost * 0.15)
                cost = cost + discount; 
            }
            break;
        case "Gladiolus":
            cost = 2.5* count;
            if (count < 80) {
                discount = (cost * 0.2)
                cost = cost + discount; 
            }
            break;
    }
    if (budget < cost) {
        console.log(`Not enough money, you need ${(cost - budget).toFixed(2)} leva more.`)
    } else {
        console.log(`Hey, you have a great garden with ${count} ${flowers} and ${(budget - cost).toFixed(2)} leva left.`)
    }
}
newHouse(['Narcissus','119','360'])