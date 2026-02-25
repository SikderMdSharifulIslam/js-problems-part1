// using temp variable

let a = 10, b = 20, temp;
temp = a;
a=b;
b=temp;

console.log(a, b);

// using destructuring
let x = 5, y = 7;

[x, y] = [y, x];

console.log(x, y);