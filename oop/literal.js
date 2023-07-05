// literal declaration -a wierd json like syntax to define an object on the fly.
// not very useful if you need a second wallet
const wallet = {
    address: "0x123",
    balance: 10101010,
    getOwner() { return this.address; }
}

const owner = wallet.getOwner();
console.log(owner);

//wallet is a reference like in C# => same shallow/deep copy behavior (same for passing refs in functions)