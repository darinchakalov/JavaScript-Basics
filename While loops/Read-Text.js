function readText(input) {
    let index = 0
    while (true) {
        let word = input[index]
        if (word == 'Stop') {
            break;
        }
        console.log(word);
        index+=1;
    }
}
readText(['Nakov','SoftUni','Sofia','Bulgaria','SomeText','Stop','AfterStop','Europe','HelloWorlds'])