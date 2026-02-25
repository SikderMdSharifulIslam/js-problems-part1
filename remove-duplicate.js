// take an array and remove all duplicates

const arr = [1,2,3,4,5,1,4];

function noDuplicate(arr){
    const newArr = [];
    arr.forEach(item => {
        if(newArr.includes(item) === false){
            newArr.push(item);
        }
    });
    return newArr;
};

console.log(noDuplicate(arr));