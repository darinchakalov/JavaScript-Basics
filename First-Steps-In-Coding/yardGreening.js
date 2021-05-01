function yardGreening(input) {
    let squareMeters=input[0];
    let pricePerSquareMeter='7.61';
    let priceBeforeDiscount = squareMeters*pricePerSquareMeter;
    let discount= priceBeforeDiscount*0.18;
    let finalPrice = priceBeforeDiscount-discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(['550']);