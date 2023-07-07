const getCapitalsFake = (callbackFunction) => {
    setTimeout(() => {
        const data = "simulating an API fetch by waiting for data to arrive";
        callbackFunction(data);
    }, 3000)
}

const getCapitals = (callback) => {

    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            console.log(data)
            callback(undefined, data.map(d => d.capital).flat());
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined);
        }
    });
    request.open('GET', 'https://restcountries.com/v3.1/all?fields=capital');
    request.send();
}

// now that we know what a promise is we can use fetch API for making requests instead of the low level XMLHttpRequest
// fetch returns a promise, so instead of "=> new Promise()" I can do "=> fetch()" instead
// after making the request I return a promise "response.json()" that will contain the response data, or thrw if any errors.

const getCountryByCode = (code) => {
    return fetch(`https://restcountries.com/v3.1/alpha/${code}`).then((response) => {
        if (response.status === 200) {
            return response.json();    // RETURNS ANOTHER PROMISE
        } else {
            throw new Error("Unable to fetch country");
        }
    });
}

const getCountryByCodeAsync = async (code) => {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`); // await
    
    if (response.status === 200) {
        return response.json();    // await here if you want to return something insisde the response
    } else {
        throw new Error("Unable to fetch country");
    }
}

const getCountriesByLanguage = (language) => fetch(`https://restcountries.com/v3.1/lang/${language}`).then((response) => {
    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error("Unable to fetch countries");
    }
})

const getCountriesByLanguageAsync = async (language) => { 
    const response = await fetch(`https://restcountries.com/v3.1/lang/${language}`);
    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error("Unable to fetch countries");
    }
}

const getCountriesByLanguageUsingCountryCodeAsync = async (code) => {
    const country = await getCountryByCodeAsync(code);
    const countryLanguage = Object.values(country[0].languages)[0];
    const allCountriesUsingLanguage = await getCountriesByLanguageAsync(countryLanguage);

    return allCountriesUsingLanguage.map(i => i.name).map(i => i.official);
}