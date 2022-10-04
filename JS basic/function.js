function sum (a, b)
{
    return a + b;
}

//Anonymous function
const sum1 = function (a, b) { return a + b };
//Arrow function
const sum2 = (a, b) => {return a + b};
const sum3 = (a, b) => a + b;

console.log(sum(1, 2))
console.log(sum1(1, 2))
console.log(sum2(1, 2))
console.log(sum3(1, 2))


//array methods
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr.push(11));  //11
console.log(arr.pop()); //11
console.log(arr.includes(2));   //true
console.log(arr.slice(2, 5)); //[3, 4, 5]
console.log(arr.splice(2, 5)); //[3, 4, 5, 6, 7]
console.log(arr.concat([11, 12, 13])); //[1, 2, 8, 9, 10, 11, 12, 13]
console.log(arr.join(' ')); // 1 2 8 9 10
console.log(arr.reverse()); // [10, 9, 8, 2, 1]
console.log(arr.shift()); // 10
console.log(arr.unshift(1)); // 5
console.log(arr.sort());  //[1, 1, 2, 8, 9]
console.log(arr.toString()); // 1, 1, 2, 8, 9
console.log();
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr1.map((item) => item * 2));  //multiply 2 to all the values of array and create new array
console.log(arr1.filter((item) => item % 2 === 0)); //[2, 4, 6, 8, 10]
console.log(arr1.forEach((item) => {console.log(item + 2)})); //3 4 5 6 7 8 9 10 11 12 undefined
console.log()
console.log(arr1.every((item) => item > 0)); //true
console.log(arr1.some((item) => item > 10));   //false