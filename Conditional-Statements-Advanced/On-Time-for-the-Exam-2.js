function onTime(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let examTotalMinutes = examHour * 60 + examMinutes;
    let arriveTotalMinutes = arrivalHour * 60 + arrivalMinute
    
    if (arriveTotalMinutes > examTotalMinutes) {
        console.log('Late')
    } else if (examTotalMinutes - arriveTotalMinutes <= 30) {
        console.log('On time')
    }
    else {
        console.log('Early')
    }
    let result = Math.abs(examTotalMinutes - arriveTotalMinutes)
    if (examTotalMinutes - arriveTotalMinutes > 0) {
        if (result < 60) {
            console.log(`${result} minutes before the start`)
        } else {
            console.log(`${Math.floor(result/60)}:${result %60} hours before the start`)
        } 
    } else if (arriveTotalMinutes - examTotalMinutes > 0) {
        if (result < 60) {
            console.log(`${result} minutes after the start`)
        } else {
            console.log(`${Math.floor(result/60)}:${result %60} hours before the start`)
        }     
    } 
}
onTime(['16','00','15','00'])