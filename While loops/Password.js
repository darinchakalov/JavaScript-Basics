function password(input) {
    let username = input[0];
    let pass = input[1];

    let inputPass = input[2]
    let index = 3;
    while (inputPass !== pass) {
        inputPass = input[index]
        index++;
    }
    console.log(`Welcome ${username}!`);
}
password(['Darin','1234','pass','1324','1134'])