let arr = [1,2,1,2,1];

let c = 0;
let left = 0;
let right = arr.length-1;

while(left < right) {
    if(arr[left] != arr[right]) {
        console.log("Не палиндром");
    break;
    }
    left = left + 1;
    right = right - 1;

    if (!(left < right)) {
        console.log("Палиндром");
    } 
}
 
   
