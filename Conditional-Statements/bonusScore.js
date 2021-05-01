function bonusScore(input) {
    let initialPoints = Number(input[0]);
    let bonusPoints = 0;
    if (initialPoints % 2 == 0) {
        bonusPoints +=1;
    }
    if (initialPoints % 10 == 5) { //if the number ends with 5
        bonusPoints +=2;
    }

    if (initialPoints <= 100) {
        bonusPoints += 5;
        let finalScore = Number(initialPoints)+Number(bonusPoints);
        console.log(bonusPoints);
        console.log(finalScore);
    } else if ( initialPoints > 100 && initialPoints < 1000) {
        bonusPoints = bonusPoints + (initialPoints*0.200);
        let finalScore = initialPoints+bonusPoints;
        console.log(bonusPoints);
        console.log(finalScore);
    } else {
        bonusPoints = bonusPoints + (initialPoints*0.10);
        let finalScore = initialPoints+bonusPoints;
        console.log(bonusPoints);
        console.log(finalScore);
    }
}
bonusScore(['20']);