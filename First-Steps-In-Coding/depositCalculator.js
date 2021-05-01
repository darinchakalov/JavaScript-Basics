function depositCalculator(input) {
    let deposit = Number(input[0]);
    let period = Number(input[1]);
    let yearlyPercentage = Number(input[2])/100;
    let currentInterest = deposit*yearlyPercentage;
    let monthlyInterest=currentInterest/12;
    let finalSum = deposit + (period * monthlyInterest);
    console.log(finalSum);
}
depositCalculator(['200', '3', '5.7']);