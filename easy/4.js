let a = prompt("Введите число чтобы найти его факториал");
let b = 1;

while (a > 0) {
    b = a * b 
    a = a - 1; 
}
console.log(b);