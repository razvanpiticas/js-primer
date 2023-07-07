// promise ctor expects two callback functions as params, one for success and one for failure
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const currentSeconds = new Date().getSeconds();
        if (currentSeconds % 2 === 0) {
            resolve("I am the data from the API endpoint");
        }
        else {
            reject("I am an error, the API endpoint was down");
        }

    }, 2000)
});

// then is a method on the Promise object and it requires two functions as parameters
    // a function that will be called when the Promise will be resolved with the data
    // a function that will be called when the Promise will be rejected with the error
myPromise.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
})

console.log("continue executing");

// in order to allow the promise access some data we can wrap a function around it that returns the promise like so:
/*
const getPromiseFunction = (seedNumber) => {
    return new Promise((resolve, reject) => {
        //code excluded for brevity
    });
}
*/

// we can simplify this further by removing the {} and return 
// getPromiseFunction is a function that receives a number as param and returns a promise
const getPromiseFunction = (seedNumber) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const currentSeconds = new Date().getSeconds() + seedNumber;
        if (currentSeconds % 2 === 0) {
            resolve("I am the data from the API endpoint");
        }
        else {
            reject("I am an error, the API endpoint was down");
        }

    }, 2000)
});

const myPromise2 = getPromiseFunction(3)
    .then((data) => {
        console.log(data);
    }, (err) => {
        console.log(err);
    })