function graduation(input) {
    let name = input[0];
    let grade = 1;
    //let currentGrade = Number(input[grade])
    let badGrades = 0;
    let allGrades = 0;
    let excluded = false;
    while (grade <= 12) {
        let currentGrade = Number(input[grade])
        allGrades += currentGrade;
        if (currentGrade < 4) {
            badGrades++;
            if (badGrades == 2) {
                console.log(`${name} has been excluded at ${grade-1} grade`);
                excluded = true;
                break;
            }
        }
        grade++
    }
    if (excluded !== true) {
        console.log(`${name} graduated. Average grade: ${(allGrades / 12).toFixed(2)}`);
    }
}
graduation(['Gosho', '5', '5.5', '6', '5.43', '5.5', '2', '3', '5', '6', '6', '5.43', '5'])