function metricConverter(input) {
    let num=input[0];
    let inputType=input[1];
    let outputType=input[2];

    if (inputType == 'mm') {
        if (outputType == 'cm') {
            console.log((num / 10).toFixed(3));
        } else {
            console.log((num / 1000).toFixed(3));
        }
    } else if (inputType == 'cm') {
        if (outputType == 'mm') {
            console.log((num * 10).toFixed(3));
        } else {
            console.log((num / 100).toFixed(3));
        }
    } else {
        if (outputType == 'cm') {
            console.log((num * 100).toFixed(3));
        } else {
            console.log((num * 1000).toFixed(3));
        }
    }
}
metricConverter(['1201.34','mm','cm'])