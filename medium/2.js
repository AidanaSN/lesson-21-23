let arr = prompt("Введите элементы массива, разделенные запятой:");
let array = arr.split(',');

let c = 0;
let min = array[0];

while(c <= array.length){
    if(Number(array[c]) < min){
        min = Number(array[c]);
    }
    c = c + 1;
}
console.log(array);
console.log(min);