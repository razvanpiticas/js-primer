// literal declaration
const wallet = {
    address: "0x123",
    balance: 10101010,
    getOwner() { return this.address; }
}

const owner = wallet.getOwner();
console.log(owner);