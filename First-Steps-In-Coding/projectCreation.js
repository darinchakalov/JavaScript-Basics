function projectCreation(input) {
    let name = input[0];
    let numberOfProctects= input[1];
    let numberOfHours = numberOfProctects*3;
    console.log(`The architect ${name} will need ${numberOfHours} hours to complete ${numberOfProctects} project/s.`);
}
projectCreation(['George', '4']);