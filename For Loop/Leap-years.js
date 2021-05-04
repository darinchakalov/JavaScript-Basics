function leapYears(input) {
    let year1 = input[0]
    let year2 = input[1]

    for (let i =year1; i <= year2; i++){
        if (i % 4 == 0) {
            console.log(i)
        }
    }
}
leapYears(['2000','2011'])