// 4️ Bank Account System using Access Modifiers

class BankAccount {
    public accountHolder: string;
    private balance: number;
    protected accountType: string;

    constructor(name: string, balance: number, type: string) {
        this.accountHolder = name;
        this.balance = balance;
        this.accountType = type;
    }

    public deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ₹${amount}. New Balance: ₹${this.balance}`);
    }

    public getBalance(): number {
        return this.balance;
    }
}

const acc = new BankAccount("Chinmay", 10000, "Savings");
acc.deposit(2000);
console.log(acc.getBalance());
// console.log(acc.balance); ❌ Error (private)

export { BankAccount };
