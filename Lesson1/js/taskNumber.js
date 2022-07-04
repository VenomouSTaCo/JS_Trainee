let PI = Math.PI;
console.log(PI.toFixed(2));

let newArray = [15, 11, 16, 12, 51, 12, 13, 51];
console.log(Math.max.apply(null, newArray));
console.log(Math.min.apply(null, newArray));

console.log(Math.random().toFixed(2));
console.log(Math.ceil(100*Math.random()));

console.log((0.6 + 0.7).toFixed(1));

console.log(parseInt('100$'));