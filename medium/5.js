let array = [1,2,3,4,2,3,6,5];

let c = 0;
let newArray = [];

let isFound = false;

while (c < array.length) {
    isFound = false;
    let n = 0;
    while(n < newArray.length){
        if (newArray[n] == array[c]) {
            isFound = true;  
            break;      
        }
        n = n + 1; 
    }
    
    if(!isFound){
        newArray.push(array[c]);
        }
        c = c + 1;
}

console.log(newArray); 
