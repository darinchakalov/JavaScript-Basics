function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let amout = Number(input[2]);

    if (city == "Sofia") {
       if (product == "coffee") {
           let result = amout*0.50;
           console.log(result);
       } else if (product == "water") {
           let result = amout*0.80;
           console.log(result);
       } else if (product == "beer") {
        let result = amout*1.20;
        console.log(result);
       } else if (product == "sweets") {
        let result = amout*1.45;
        console.log(result);
       } else {
        let result = amout*1.60;
        console.log(result);
       }
    } if (city == "Plovdiv") {
        if (product == "coffee") {
            let result = amout*0.40;
            console.log(result);
        } else if (product == "water") {
            let result = amout*0.70;
            console.log(result);
        } else if (product == "beer") {
         let result = amout*1.15;
         console.log(result);
        } else if (product == "sweets") {
         let result = amout*1.30;
         console.log(result);
        } else {
         let result = amout*1.50;
         console.log(result);
        }
    } else if (city == "Varna") {
        if (product == "coffee") {
            let result = amout*0.45;
            console.log(result);
        } else if (product == "water") {
            let result = amout*0.70;
            console.log(result);
        } else if (product == "beer") {
         let result = amout*1.10;
         console.log(result);
        } else if (product == "sweets") {
         let result = amout*1.35;
         console.log(result);
        } else {
         let result = amout*1.55;
         console.log(result);
        }
    }
}
smallShop(['sweet','Sofia','2.23'])