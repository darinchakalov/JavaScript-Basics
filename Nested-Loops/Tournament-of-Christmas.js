function tournament(input) {
    let tournamentDays = Number(input.shift());
    let command = input.shift()
    let daysCount = 0;
    let dayWins = 0;
    let dayLoses = 0;
    let wins = 0;
    let loses = 0;
    let moneyWonForDay = 0;
    let totalMoney =0;
    while (daysCount < tournamentDays) {
        if (command !== 'Finish') {
            if (command !== 'win' && command !== 'lose') {
                command = input.shift()
            } else {
                if (command === 'win') {
                    wins++
                    moneyWonForDay+=20;
                } else if (command === 'lose') {
                    loses++
                }
                command = input.shift()
            }
        } else{
            if (wins > loses) {
                dayWins++
                moneyWonForDay = moneyWonForDay + (moneyWonForDay * 0.10)
                wins =0;
                loses=0;
            } else if (loses > wins) {
                dayLoses++
                wins =0;
                loses=0;
            }
            daysCount++
            totalMoney+= moneyWonForDay;
            moneyWonForDay = 0;
            command = input.shift()
        }
    }
    if (dayWins > dayLoses) {
        totalMoney = totalMoney + (totalMoney * 0.20)
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}
tournament(['2', 'volleyball', 'win', 'ffa', 'lose', 'ffffa', 'win', 'Finish', 'golf', 'win', 'tennis', 'win', 'bagminton', 'win', 'Finish'])