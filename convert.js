// 12 inch = 1 feet 

function inchToFeet(inch){
    const feet = inch/12;
    const inches = inch % 12;
    const result = parseInt(feet) + ' fit ' + inches + ' inches';
    return result;
};

console.log(inchToFeet(75));

