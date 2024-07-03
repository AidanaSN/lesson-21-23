let a = prompt("Введите строку: ");

let b  = a.split('');
let arr = [];
let c = b.length-1;

while(c >= 0) {
    arr.push(b[c]);
    c = c - 1;
    
}
console.log(arr);