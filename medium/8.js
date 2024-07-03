let a = prompt("Введите строку: ");
let arr = a.split('');

let c = 0;
let countWords = 0;

while(c < arr.length) {
    if(arr[c] == " ") {
        countWords = countWords + 1;
    }
    c++;
}
console.log(countWords+1);