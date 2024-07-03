let arr = [4, 5, 21, 58, 12, 3, 7, 1, 9, 15, 25, 35];

let min = arr[0];
let a = 0;
let positive = 0;
let negative = 0;

while(a < arr.length) {
    if (arr[a]%2 == 0) {
        positive = positive + 1;
    } 
    else if(arr[a]%2 == 1) {
        negative = negative + 1;
    }
    a = a + 1;
}
console.log("Количество четных: "+ positive);
console.log("Количество нечетных: "+ negative);