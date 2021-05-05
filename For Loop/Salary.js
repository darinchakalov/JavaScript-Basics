function salary(input) {
    let numberOfTabs = input[0]
    let salary = input[1]

    for (i = 1; i <= numberOfTabs + 1; i++) {
        switch (input[i]) {
            case 'Facebook':
                salary -= 150;
                break;
            case 'Instagram':
                salary -= 100;
                break;
            case 'Reddit':
                salary -= 50;
                break;
        }
        if (salary <= 0) {
            console.log('You have lost your salary.')
            break;
        }
    }
    if (salary > 0) {
        console.log(salary)
    }
}
salary(['4', '500', 'Facebook', 'Facebook', 'Reddit', 'Reddit'])