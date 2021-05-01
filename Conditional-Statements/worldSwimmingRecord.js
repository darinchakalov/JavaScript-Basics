function worldSwimmingRecord(input) {
    let recordInSeconds = input[0];
    let lenghtInMeters = input[1];
    let timeInSecondsFor1meter = input[2];

    let resistance = Math.floor(lenghtInMeters / 15) * 12.5;
    console.log(resistance)
    let timeHeDidItIn = lenghtInMeters * timeInSecondsFor1meter + resistance;
    let result = timeHeDidItIn - recordInSeconds;
    if (result < 0) {
        console.log(`Yes, he succeeded! The new world record is ${timeHeDidItIn.toFixed(2)} seconds.`)
    } else {
        result = Math.abs(result);
        console.log(`No, he failed! He was ${result.toFixed(2)} seconds slower.`)
    }
}
worldSwimmingRecord(['55555.67','3017','5.03'])