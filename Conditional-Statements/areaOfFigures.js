function areaOfFigures(input) {
    let figure = input[0];
    let sideA = input[1];
    let sideB = input[2];

    if (figure == 'square') {
        let area = sideA * sideA;
        console.log(area.toFixed(3));
    } else if (figure == 'rectangle') {
        let area = sideA * sideB;
        console.log(area.toFixed(3));
    } else if (figure == 'circle') {
        let area = Math.PI*(sideA * sideA);
        console.log(area.toFixed(3));
    } else {
        let area = (sideA/2) * sideB;
        console.log(area.toFixed(3));
    }
}
areaOfFigures(['circle','6'])