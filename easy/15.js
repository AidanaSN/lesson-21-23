let arr = [4, 5, 21, -58, 12, 3, -7, 1, -9, -15, 25, 35];

let result = [];
let a = 0;

while(a < arr.length) {
    if (arr[a] > 0) {
        result.push(arr[a])
    } 
    a = a + 1;
}
console.log("Новый массив: "+ result);