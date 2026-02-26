// 4️ Bank Account System using Access Modifiers

class BankAccount {
    constructor(name, balance, type) {
        this.accountHolder = name;
        this._balance = balance;  // Using _ convention for private property
        this.accountType = type;
    }

    deposit(amount) {
        this._balance += amount;
        console.log(`Deposited ₹${amount}. New Balance: ₹${this._balance}`);
    }

    getBalance() {
        return this._balance;
    }
}

const acc = new BankAccount("Chinmay", 10000, "Savings");
acc.deposit(2000);
console.log(acc.getBalance());
// console.log(acc._balance);   Convention - should not access private properties

module.exports = { BankAccount };
