let arr = prompt("Введите элементы массива, разделенные запятой:");
let array1 = arr.split(',');
let arr2 = prompt("Введите слово");
let array2 = arr2.split('');


let c = 0;
let vowels = 0;


while(c <= array2.length){
    array1.push(array2[c])
    c = c + 1;
}
console.log(array1); 