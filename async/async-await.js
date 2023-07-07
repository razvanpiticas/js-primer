const someFunction = () => {
    return "some text";
}

console.log(someFunction()); // prints: some text

// now let's make it async
const someFunctionAsync = async () => {
    return "some other text";
}

console.log(someFunctionAsync()); // prints: Promise { 'some other text' }

someFunctionAsync().then((data) =>
    console.log(data)
).catch((err) => 
    console.log(err)
);

const squareNumber = (num) => new Promise((resolve, reject) => {
    setTimeout(()=>{
        typeof num === "number" ? resolve(num * num) : reject("Number not provided");
    }, 1000)
})

const someOtherFunctionAsync = async () => {
    const firstSqare = await squareNumber(10);           // no then, no callbacks
    const secondSqare = await squareNumber(firstSqare);  // no then, no callbacks
    const thirdSqare = await squareNumber(secondSqare);  // no then, no callbacks

    return thirdSqare; // return the final promise
}

someOtherFunctionAsync().then((data) =>
    console.log(data)
).catch((err) => 
    console.log(err)
);

