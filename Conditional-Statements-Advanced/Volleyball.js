function volleyball(input) {
    let year = input[0]
    let holidays = Number(input[1])/3
    let weekendsGoingHome = Number([input[2]])

    let playedHome = holidays*2+weekendsGoingHome
    let playedSofia = ((48 - weekendsGoingHome)/4)*3

    let timesPlayed = playedHome + playedSofia;
    if (year == 'leap') {
        timesPlayed = (timesPlayed * 0.15)+ timesPlayed;
    }
    console.log(Math.floor(timesPlayed))
}
volleyball(['normal','3','2'])