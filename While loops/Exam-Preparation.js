function examPrep(input) {
    let poorGrades = Number(input[0]);
    let index = 1;
    let totalScore = 0;
    let lastProblem = '';
    let numProblems = 0;
    let numPoorGrades = 0;
    let enough = false;
    while (input[index] !== 'Enough') {
        totalScore += Number(input[index + 1]);
        lastProblem = input[index]
        numProblems++;
        if (Number(input[index + 1]) <= 4) {
            numPoorGrades++;
            if (numPoorGrades == poorGrades) {
                console.log(`You need a break, ${numPoorGrades} poor grades.`);
                enough = true;
                break;
            }
        }
        index += 2;
    }
    if (enough == false) {
        console.log(`Average score: ${(totalScore / numProblems).toFixed(2)}`)
        console.log(`Number of problems: ${numProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}
examPrep(['1', 'Money', '6', 'Story', '2', 'Spring Time', '2', 'Bus', '2', 'Enough'])