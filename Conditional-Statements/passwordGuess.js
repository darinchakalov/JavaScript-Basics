function passwordGuss(input) {
    let userInput = input[0];
    let password = 's3cr3t!P@ssw0rd';
    if (userInput == password) {
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}
passwordGuss(['2323'])