function oldBooks(input) {
    let neededBook = input[0]
    let checkedBooks = 0;
    let index = 1
    let found = false;
    while (input[index] !== 'No More Books') {
        if (neededBook == input[index]) {
            console.log(`You checked ${checkedBooks} books and found it.`);
            found = true;
            break;
        }
        checkedBooks++
        index++;
    }
    if (found == false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${checkedBooks} books.`);
    }
}
oldBooks(['Test', 'Stronger', 'Life Style', 'Troy', 'No More Books'])