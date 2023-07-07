const createBankAccount = () => {
    let balance = 100000;

    getBalance = () => balance;

    depozit = (amount) => balance += amount;

    withdraw = (amount) => {
        if(amount <= 5000){
            balance -= amount;
        }
    }

    return {getBalance, depozit, withdraw};
}

const bankAccount = createBankAccount();

bankAccount.depozit(6000)
console.log(bankAccount.getBalance());   // prints 106000

bankAccount.withdraw(7000)
console.log(bankAccount.getBalance());   // prints 106000 (withdraw > 5000)

bankAccount.withdraw(4000)
console.log(bankAccount.getBalance());   // prints 102000
