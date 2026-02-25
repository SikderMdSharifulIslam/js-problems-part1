// 12 inch = 1 feet 

function inchToFeet(inch){
    const feet = inch/12;
    const inches = inch % 12;
    const result = parseInt(feet) + ' fit ' + inches + ' inches';
    return result;
};

console.log(inchToFeet(75));

function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}

function kilometerToMiles(kilo){
    const miles = kilo * 0.621371;
    return miles;
}
