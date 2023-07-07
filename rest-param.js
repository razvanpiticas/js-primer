const sum = (a, b) => {
    return a + b;
}

console.log(sum(1,2));

// similar to C# params. You can pass any number of parameters and it will receive them as an array.
const sum2 = (...params) => {
    let sum = 0;
    params.forEach(i => sum += i);

    return sum;
}

console.log(sum2(1, 2, 3));
console.log(sum2(1, 2, 3, 4, 5));

const arrayOne = ["One", "Two", "Three"];
const arrayTwo = [...arrayOne]; // this takes each element of arrayOne and adds it to array to achieving deep copy
arrayTwo.push("Four");
console.log(arrayOne);
console.log(arrayTwo);

const numbers = [10, 20, 30, 40, 50, 60];
// the sum method should be called like this:
sum2(10, 20, 30, 40, 50, 60);
// but mu numbers are in an array.
// so I use spread operator which has the same syntax as rest param but is used in a function call rather than the function signature
console.log(sum2(...numbers));
//this will spread out all the elements of the array as parameters