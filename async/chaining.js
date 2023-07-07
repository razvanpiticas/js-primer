// we will demonstrate chaining by calling a function that multiplies a number by itself and passing the result three times.

const squareNumber = (num) => new Promise((resolve, reject) => {
    setTimeout(()=>{
        typeof num === "number" ? resolve(num * num) : reject("Number not provided");
    }, 1000)
})

// this approach is close to the callback hell that you would be forced to do with callback pattern
squareNumber(10).then((data) => {
    squareNumber(data).then((data) => {
        squareNumber(data).then((data) => {
            console.log(data);
        }, (err) => {
            console.log(err);
        })
    }, (err) => {
        console.log(err);
    })     
}, (err) => {
    console.log(err);
})

// Instead of nesting each call we can return another promise like so:
// when we return a promise from another promise it's called chaining
squareNumber(10).then((data) => {  // resolve and get result (data = 100)
    return squareNumber(data)      // I'm calling sqare(100) BUT I'm not resolving, I'm returning a promise
}).then((data) => {                // resolve and get result (data = 10000)
    return squareNumber(data)      // I'm calling sqare(10000) BUT I'm not resolving, I'm returning a promise
}).then((data) => {                // resolve and get result (data = 100000000)
    console.log(data);             // print final result here 100000000
}).catch((err) => {                // we chain a SINGLE error handler that will catch errors from any of the promises above 
    console.log(err)
})