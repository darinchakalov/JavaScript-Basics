function countWords(input) {
    let words = input.length
    let count = 0;
    //console.log(words)
    for (i = 0; i < words; i++) {
        if (input[i] === ' ') {
            count += 1;
        }
    }
    let result = count + 1
    if (result > 10) {
        console.log(`The message is too long to be send! Has ${result} words.`)
    } else {
        console.log(`The message was sent successfully!`)
    }
}
countWords([`This message has exactly eleven words. One more as it's allowed!`])