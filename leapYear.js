/***
 * A year is a leap year if it is divisible by 4, except for century years (ending in 00) which must be divisible by 400.
 * 
 */

function isLeapYear(year){
    if((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0))
    {
        return true;
    }else{
        return false;
    }
}

console.log(isLeapYear(2000));