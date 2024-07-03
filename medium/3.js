let arr = prompt("Введите слово:");
let array = arr.split('');

let c = 0;
let vowels = 0;

while(c <= array.length){
    if(array[c] == "a" || array[c] == "e" ||array[c] == "i" ||array[c] == "o" ||array[c] == "u" ){
        vowels = vowels + 1;
    }
    c = c + 1;
}
console.log(array);
console.log(vowels);