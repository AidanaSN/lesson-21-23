let arr = [4, 5, 21, 58, 6, 12, 3, 7];

let min = arr[0];
let a = 0;

while(a < arr.length) {
    if (arr[a] <= min){
        min = arr[a];   
        
    }
    a = a + 1;
}
console.log("Минимальное значение = "+ min);
