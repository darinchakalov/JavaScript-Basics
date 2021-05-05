function balance(input) {
    let index = 0;
    let sum = 0;
    while (input[index] !== 'NoMoreMoney') {
        if (input[index] >= 0) {
            sum += Number(input[index])
            console.log(`Increase: ${Number(input[index]).toFixed(2)}`);
        } else {
            console.log('Invalid operation!');
            break;
        }
        index++;
    }
    console.log(`Total: ${(sum).toFixed(2)}`);
}
balance(['120','45.55','-150'])