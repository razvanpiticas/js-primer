const addLikeAPro = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("One of the params is not a number");
    }
    return a + b;
}

try {
    const sum = addLikeAPro(10, "cow");
    console.log(sum);
}
catch (e) {
    console.log(e);
}