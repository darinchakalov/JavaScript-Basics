function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let studioPricePerNight = 0;
    let apartmentPricePerNight = 0;
    let studioDiscount = 0;
    let apartmentDiscount = 0;
    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case 'May':
        case 'October':
            studioPricePerNight = 50;
            apartmentPricePerNight = 65;
            break;
        case 'June':
        case 'September':
            studioPricePerNight = 75.20;
            apartmentPricePerNight = 68.70;
            break;
        case 'July':
        case 'August':
            studioPricePerNight = 76;
            apartmentPricePerNight = 77;
            break;
            
    }
    studioPrice = studioPricePerNight * nights;
    apartmentPrice = apartmentPricePerNight * nights;

    if (month == 'May' || month == 'October') {
        if (nights > 7 && nights <=14) {
            studioDiscount = studioPrice * 0.05;
        } else if (nights > 14 ) {
            studioDiscount = studioPrice * 0.30;
        }
    } else if (month == 'June' || month == 'September' ){
        if (nights > 14) {
            studioDiscount = studioPrice * 0.20;
        }
    }
    if (nights > 14){
        apartmentDiscount = apartmentPrice * 0.10;
    }
    studioPrice = studioPrice - studioDiscount;
    apartmentPrice = apartmentPrice - apartmentDiscount;

    console.log(`Apartment: ${(apartmentPrice).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPrice).toFixed(2)} lv.`);
}
hotelRoom(['May','15'])