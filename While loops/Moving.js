function moving(input) {
    let width = input[0];
    let lenght = input[1];
    let hight = input[2];
    let apartmentSize = width * lenght * hight;
    let takenSoFar = 0;
    let index = 3;
    while (true) {
        if (input[index] == 'Done' || apartmentSize <= takenSoFar) {
            break;
        }
        takenSoFar += Number(input[index])
        index++;
    }
    if (apartmentSize > takenSoFar) {
        console.log(`${apartmentSize - takenSoFar} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${takenSoFar - apartmentSize} Cubic meters more.`);
    }
}
moving(['10', '10', '2', '20', '20', '20', '20', '122','Stop'])