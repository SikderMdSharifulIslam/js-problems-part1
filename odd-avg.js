// create a function that takes an array as parameter and returns the avg of all odd numbers in the array

function oddAvg(arr){
    let sum = 0, count=0;
    arr.forEach(element => {
       if(element % 2 !== 0){
            sum+=element;
            count++;
       }
    });
    const avg = sum/count;
    return avg;
}

console.log(oddAvg([1,2,3,4,5]));