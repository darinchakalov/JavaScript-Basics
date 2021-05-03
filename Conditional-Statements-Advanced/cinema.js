function cinema(input) {
    let projection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;
    let seats = rows * columns;

    if (projection == 'Premiere') {
        income = (seats * 12).toFixed(2);
        console.log(`${income} leva`)
    } else if (projection == 'Normal') {
        income = (seats * 7.5).toFixed(2);
        console.log(`${income} leva`)
    } 
    else {
        income = (seats * 5).toFixed(2);
        console.log(`${income} leva`)
    }
}
cinema(['Premiere','10','12'])