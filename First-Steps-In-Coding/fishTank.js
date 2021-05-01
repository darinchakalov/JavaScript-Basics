function fishTank(input) {
    let lenght = input[0];
    let widght = input[1];
    let height = input[2];
    let percentage = input[3]/100;

    let surfaceArea =lenght*widght;
    let parallelepipedVolume = surfaceArea*height;
    let volumeInDecimeters = parallelepipedVolume * 0.001;

    let usableVolume = volumeInDecimeters - (volumeInDecimeters * percentage);
    console.log(usableVolume);
}
fishTank(['85','75','47','17']);