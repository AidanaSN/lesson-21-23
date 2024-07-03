let arr = [4, 5, 10, 58, 6, 12, 3, 7];

let a = 0;
let sum = 0;

while(a < arr.length) {
    sum = sum + arr[a];
    a = a + 1;
}

console.log(sum);