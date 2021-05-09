function train(input) {
    let juree = input.shift()
    let presentation = input.shift()
    let allPresentationsScore = 0;
    let presentationsCount = 0;
    while (presentation !== 'Finish') {
        let avaragePresentationScore = 0;
        for (i = 0; i < juree; i++) {
            avaragePresentationScore += Number(input.shift())
        }
        console.log(`${presentation} - ${(avaragePresentationScore / juree).toFixed(2)}.`);
        allPresentationsScore += (avaragePresentationScore);
        presentationsCount++
        presentation = input.shift()
    }
    console.log(`Student's final assessment is ${(allPresentationsScore / (presentationsCount*juree)).toFixed(2)}.`);
}
train(['2','While-Loop','6.00','5.50','For-Loop','5.85','5.66','Finish'])