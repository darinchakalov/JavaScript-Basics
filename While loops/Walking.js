function walking(input) {
    let lenght = Object.keys(input).length
    let index = 0;
    let steps = 0;
    let wentHome = false;
    while (index < lenght) {
        if (input[index] == "Going home") {
            wentHome = true
            break;
        }
        steps += Number(input[index])
        index++;
    }
    if (wentHome) {
        steps += Number(input[index+1])
    }
    if (steps < 10000) {
        console.log(`${10000 - steps} more steps to reach goal.`);
    } else{
        console.log(`Goal reached! Good job!`)
        console.log(`${steps - 10000} steps over the goal!`);
    }
}
walking(["1000", "1500", "2500", "3000","Going home","200"])