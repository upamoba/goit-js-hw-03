function filterArray(numbers, value){
const filteredNumbers = [];
for (let number of numbers){
if (number > value){
filteredNumbers.push(number);}
   }
    return filteredNumbers;
}


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
console.log(filterArray([6, 12, 24, 48, 67], 49))