function cinemaTickets(input) {
    let filmName = input.shift()
    let standardCount = 0;
    let kidCount = 0;
    let studentCount = 0;
    let totalTickets = 0;
    while (filmName !== 'Finish') {
        let capacity = Number(input.shift());
        let ticketType = input.shift();
        let ticketsSold = 0;
        while (ticketType !== 'End') {
            if (ticketType === 'standard') {
                standardCount++;
            } else if (ticketType === 'kid') {
                kidCount++;
            } else {
                studentCount++;
            }
            ticketsSold++;
            totalTickets++;
            if (ticketsSold >= capacity) {
                break;
            }
            ticketType = input.shift()
        }
        console.log(`${filmName} - ${((ticketsSold / capacity) * 100).toFixed(2)}% full.`);
        filmName = input.shift()
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentCount/totalTickets)*100).toFixed(2)}% student tickets.`);
    console.log(`${((standardCount/totalTickets)*100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidCount/totalTickets)*100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(['Taxi', '10', 'standard', 'kid', 'student', 'student', 'standard', 'standard', 'End', 'Scary Movie', '6', 'student', 'student', 'student', 'student', 'student', 'student', 'Finish'])