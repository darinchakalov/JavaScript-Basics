function onTime(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);
    let timeToHourBefore = 60 - arrivalMinute;
    let timeToHourAfter = 60 - examMinutes;
    let hoursLate = 0;
    let hoursEarly = 0;
    let minutesLate=0;
    let minutesEarly=0;
    if (examHour == arrivalHour) {
        if (arrivalMinute >= examMinutes - 30 && arrivalMinute <= examMinutes) {
            if (arrivalMinute == examMinutes) {
                console.log("On time")
            } else {
                console.log("On time")
                console.log(`${examMinutes - arrivalMinute} minutes before the start`)   
            }
        } else if (arrivalMinute < examMinutes - 30){
            console.log("Early")
            console.log(`${examMinutes - arrivalMinute} minutes before the start`)
        } else {
            console.log("Late")
            console.log(`${arrivalMinute - examMinutes} minutes after the start`)
        }

    } else {
        if (arrivalHour == examHour -1) {
            if (examMinutes + timeToHourBefore <= 30) {
                console.log("On time")
                console.log(`${examMinutes + timeToHourBefore} minutes before the start`)
            } else if (examMinutes + timeToHourBefore > 30 && examMinutes + timeToHourBefore < 60){
                console.log("Early")
                console.log(`${examMinutes + timeToHourBefore} minutes before the start`)
            } else{
                hoursEarly = 1;
                minutesEarly = (examMinutes + timeToHourBefore) -60;
                if (minutesEarly < 10) {
                    console.log("Early")
                    console.log(`${hoursEarly}:0${minutesEarly} hours before the start`)
                } else {
                    console.log("Early")
                    console.log(`${hoursEarly}:${minutesEarly} hours before the start`)
                }
            }
        } else if (arrivalHour == examHour +1) {
            if (arrivalMinute + timeToHourAfter < 60) {
                console.log("Late")
                minutesLate = arrivalMinute + timeToHourAfter;
                console.log(`${arrivalMinute + timeToHourAfter} minutes after the start`)
            } else{
                hoursLate = 1;
                minutesLate = (arrivalMinute + timeToHourAfter) -60;
                if (minutesLate < 10) {
                    console.log("Late")
                    console.log(`${hoursLate}:0${minutesLate} hours after the start`)
                } else {
                    console.log("Late")
                    console.log(`${hoursLate}:${minutesLate} hours after the start`)
                }
            }
        }
        else {
            if (arrivalHour < examHour) {
                console.log(`Early`)
                if (arrivalMinute < examMinutes) {
                    hoursEarly = examHour - arrivalHour;
                    minutesEarly = (examMinutes - arrivalMinute )
                } else {
                    hoursEarly = (examHour - arrivalHour) - 1;
                    minutesEarly = (examMinutes + timeToHourBefore);
                }
                if (minutesEarly < 10) {
                    console.log(`${hoursEarly}:0${minutesEarly} hours before the start`)
                } else {
                    console.log(`${hoursEarly}:${minutesEarly} hours before the start`)
                }
            } else {
                console.log('Late')
                if (examMinutes > arrivalMinute) {
                    hoursLate = (arrivalHour - examHour) -1;
                    minutesLate = examMinutes - arrivalMinute
                } else {
                    hoursLate =(arrivalHour - examHour);
                    minutesLate =  arrivalMinute - examMinutes
                }
                if (minutesLate < 10) {
                    console.log(`${hoursLate}:0${minutesLate} hours after the start`)
                } else {
                    console.log(`${hoursLate}:${minutesLate} hours after the start`)
                }
            }
        }
    }
}
//onTime(['9','00','10','30'])
onTime(['11','30','8','32'])