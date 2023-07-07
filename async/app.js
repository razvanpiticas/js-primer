// here I'm defining a callback function that receives a pram and logs it
const callbackFunction = function (result) {
    console.log(result);
}
// here I'm passing in the callback function that will be called from within getFakeCodeCallbackPattern with some data as result.
const fakeCapitals = getCapitalsFake(callbackFunction);

// instead of defining the callback function separately I can directly supply an anonymous arrow function as argument
const fakeCapitals2 = getCapitalsFake((result) => {
    console.log(result);
});

console.log("Free to continue doing some other work that does not depend on the capitals");

getCapitals((error, capitals) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(capitals)
    }
});

getCountryByCode("US").then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(`Error: ${err}`);
})

getCountriesByLanguage("English").then((data) => {
    console.log(data.map(i => i.name).map(i => i.official));
}).catch((err) => {
    console.log(`Error: ${err}`);
})

getCountryByCode("US").then((country) => {
    const language = Object.values(country[0].languages)[0];
    return getCountriesByLanguage(language);
}).then((countries) => {
    console.log(countries.map(i => i.name).map(i => i.official));
}).catch((err) => {
    console.log(`Error: ${err}`);
})

getCountryByCodeAsync("GB").then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(`Error: ${err}`);
})

getCountriesByLanguageAsync("Spanish").then((data) => {
    console.log(data.map(i => i.name).map(i => i.official));
}).catch((err) => {
    console.log(`Error: ${err}`);
})

getCountriesByLanguageUsingCountryCodeAsync("FR").then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(`Error: ${err}`);
})