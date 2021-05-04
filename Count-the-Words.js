function countTheWords(input) {
    let words = input.toString().split(" ")
    console.log(typeof(words))
    console.log(words[0]);
    let count = 0
    for (let i =0; i<=words.lenght; i++){
            count++
    }
    console.log(count)
    if (count > 10) {
        console.log(`The message is too long to be send! Has ${count} words.`)
    } else {
        console.log(`The message was sent succesfully!`)
    }
}
countTheWords(['test test test test'])