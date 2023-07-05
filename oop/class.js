class Wallet {

    // clean diferentiation from regular functions using constructor keyword
    constructor(address, balance){
        this.address = address;
        this._balance = balance;
    }

    // methods defined within the class, not all over the place
    getOwner() { 
        return this.address; 
    }

    addToBalance(value) { 
        this._balance += value;
    }

    // encapsulation through getters and setters <3. (although we could do without the parenthesis)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
    get balance(){
        return this._balance;
    }

    set balance(value){
        if(value >= 0){
            this._balance = value;
        }
    }
}

const wallet1 = new Wallet("0x123", 101010);
console.log(wallet1);


// Inheritance
class MultiSigWallet extends Wallet {               // extends like in java
    constructor(address, secondAddress, balance){
        super(address, balance);                    // super like in java

        this.secondAddress = secondAddress;
    }

    // method override polimorphism in subclass just like in C#/Java
    getOwner(){ return `first address: ${this.address} & second address: ${this.secondAddress}`; }

}

const w = new Wallet("0x123", 101010);
console.log(w);
w.addToBalance = 5000;          // method from Wallet
console.log(w.getOwner());      // method from Wallet

const msw = new MultiSigWallet("0x456", "0x789", 9999999);
console.log(msw);
w.addToBalance = 6000;          // method from Wallet (no override on MultiSigWallet)
console.log(msw.getOwner());    // method from MultiSigWallet
