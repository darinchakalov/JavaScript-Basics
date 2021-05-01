function timePlus15Min(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let finalMunutes;
    let finalHours;

    let minutesAdded = Number(minutes + 15);
    if (minutesAdded >= 60) {
        finalMunutes = Number(minutesAdded - 60);
        finalHours = Number(hours+1);
        if (finalHours >23) {
            finalHours = 0
        }
        if (finalMunutes < 10) {
            console.log(`${finalHours}:0${finalMunutes}`);
        } else {
            console.log(`${finalHours}:${finalMunutes}`);
        }
    }
    else {
        finalMunutes = minutesAdded;
        finalHours = hours;
        console.log(`${finalHours}:${finalMunutes}`);
    }
}
timePlus15Min(['23','59']);