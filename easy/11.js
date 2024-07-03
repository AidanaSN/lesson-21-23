let arr = [4, 5, 10, 58, 6, 12, -3, 7];

let a = 0;
let sum = 0;
let hasNegative = false;

while(a < arr.length) {
    if(arr[a] < 0){
    hasNegative = true;
    break;
    }
    a = a + 1;
}
if(hasNegative) {
    console.log("Есть отрицательные элементы." + arr[a])
}
else {
    console.log("Все элементы положительные."+ arr[a])
}