function vacantionBookList(input) {
    let pageCount = input[0];
    let pagesPerHour = input[1];
    let daysForBook = input[2];
    let hoursForBook = pageCount/pagesPerHour;
    let hoursPerDay = hoursForBook/daysForBook;
    console.log(hoursPerDay);
}
vacantionBookList(["212","20", "2"]);