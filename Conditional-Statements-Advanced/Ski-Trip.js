function skiTrip(input) {
    let days = Number(input[0])-1;
    let room = input[1];
    let feedback = input[2];

    if (room == "room for one person") {
       if (feedback == 'positive') {
           let price = (days * 18.00);
           let priceAfterFeedback = (price / 4) + price;
           console.log(priceAfterFeedback.toFixed(2));
       } else {
        let price = (days * 18.00);
        let priceAfterFeedback = Math.abs((price * 0.1) - price);
        console.log(priceAfterFeedback.toFixed(2));
       }
    } else if (room == 'apartment') {
        if (days < 10) {
            if (feedback == 'positive') {
                let price = days * 25;
                let discount = price * 0.3;
                let priceAfterDiscount = price - discount;
                let priceAfterFeedback = (priceAfterDiscount / 4) + priceAfterDiscount;
                console.log(priceAfterFeedback.toFixed(2));
            } else {
                let price = days * 25;
                let discount = (price * 0.3);
                let priceAfterDiscount = price - discount;
                let priceAfterFeedback = Math.abs((priceAfterDiscount * 0.1) - priceAfterDiscount);
                console.log(priceAfterFeedback.toFixed(2));
            }
        } else if (days >=10 && days <= 15) {
            if (feedback == 'positive') {
                let price = days * 25;
                let discount = (price * 0.35).toFixed(2);
                let priceAfterDiscount = price - discount;
                let priceAfterFeedback = (priceAfterDiscount / 4) + priceAfterDiscount;
                console.log(priceAfterFeedback.toFixed(2));
            } else {
                let price = days * 25;
                let discount = (price * 0.35);
                let priceAfterDiscount = price - discount;
                let priceAfterFeedback = Math.abs((priceAfterDiscount * 0.1) - priceAfterDiscount);
                console.log(priceAfterFeedback.toFixed(2));
            }
        } 
        else {
            if (feedback == 'positive') {
                let price = days * 25;
                let discount = (price * 0.5).toFixed(2);
                let priceAfterDiscount = price - discount;
                let priceAfterFeedback = (priceAfterDiscount / 4) + priceAfterDiscount;
                console.log(priceAfterFeedback.toFixed(2));
            } else {
                let price = days * 25;
                let discount = (price * 0.5);
                let priceAfterDiscount = price - discount;
                let priceAfterFeedback = Math.abs((priceAfterDiscount * 0.1) - priceAfterDiscount);
                console.log(priceAfterFeedback.toFixed(2));
            }
        }
    } 
    else {
        if (days < 10) {
            if (feedback == 'positive') {
                let price = days * 35;
                let discount = price * 0.1;
                let priceAfterDiscount = price - discount;
                let priceAfterFeedback = (priceAfterDiscount / 4) + priceAfterDiscount;
                console.log(priceAfterFeedback.toFixed(2));
            } else {
                let price = days * 35;
                let discount = (price * 0.1);
                let priceAfterDiscount = price - discount;
                let priceAfterFeedback = Math.abs((priceAfterDiscount * 0.1) - priceAfterDiscount);
                console.log(priceAfterFeedback.toFixed(2));
            }
        } else if (days >=10 && days <= 15) {
            if (feedback == 'positive') {
                let price = days * 35;
                let discount = (price * 0.15).toFixed(2);
                let priceAfterDiscount = price - discount;
                let priceAfterFeedback = (priceAfterDiscount / 4) + priceAfterDiscount;
                console.log(priceAfterFeedback.toFixed(2));
            } else {
                let price = days * 35;
                let discount = (price * 0.15);
                let priceAfterDiscount = price - discount;
                let priceAfterFeedback = Math.abs((priceAfterDiscount * 0.1) - priceAfterDiscount);
                console.log(priceAfterFeedback.toFixed(2));
            }
        } 
        else {
            if (feedback == 'positive') {
                let price = days * 35;
                let discount = (price * 0.2).toFixed(2);
                let priceAfterDiscount = price - discount;
                let priceAfterFeedback = (priceAfterDiscount / 4) + priceAfterDiscount;
                console.log(priceAfterFeedback.toFixed(2));
            } else {
                let price = days * 35;
                let discount = (price * 0.2).toFixed(2);
                let priceAfterDiscount = price - discount;
                let priceAfterFeedback = Math.abs((priceAfterDiscount * 0.1) - priceAfterDiscount);
                console.log(priceAfterFeedback.toFixed(2));
            }
        }
    }
}
skiTrip(['30','president apartment','negative'])