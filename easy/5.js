let a = prompt("Введите число");

let b = String(a).split('');

let c = 0;
let sum = 0;

while(c < b.length){
    sum = sum + Number(b[c]);
    c = c + 1;
    
}

console.log(sum);