function building(input) {
    let floors = input[0]
    let rooms = input[1]

    for ( f = floors; f >= 1; f--){
        let printline = "";
        for ( r = 0; r < rooms; r++){
            if (floors > 1) {
                if (f === floors) {
                    printline += `L${f}${r} `
                } else{
                    if (f % 2 == 0) {
                        printline += `O${f}${r} `
                    } else{
                        printline += `A${f}${r} `
                    }
                }
            } else {
                printline += `L${f}${r} `
            }
        }
        console.log(printline);
    }

}
building(['5','4'])