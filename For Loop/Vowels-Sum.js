function vowelsSum(input) {
    let text = input[0]
    let result = 0;
    let letter;
    for (let i = 0; i < text.length; i++) {
        letter = text[i]
        switch (letter) {
            case 'a': result +=1; break;
            case 'e': result +=2; break;
            case 'i': result +=3; break;
            case 'o': result +=4; break;
            case 'u': result +=5; break;
        }
    }
    console.log(result)
}
vowelsSum(['hello'])