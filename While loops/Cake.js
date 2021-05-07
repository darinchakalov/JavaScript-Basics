function cake(input) {
    let cakePeaces = (input[0] * input[1]);
    let peacesEaten = 0;
    let index = 2;
    let eaten = false;

    while (input[index] !== "STOP") {
        if (peacesEaten >= cakePeaces) {
            eaten = true;
            break;
        }
        peacesEaten += Number(input[index])
        index++
    }
    if (eaten == true) {
        console.log(`No more cake left! You need ${peacesEaten - cakePeaces} pieces more.`);
    } else {
        console.log(`${cakePeaces - peacesEaten} pieces are left.`);
    }

}
cake(['10', '10', '20', '20', '20', '20', '21'])