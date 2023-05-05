class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    //Getter
    get balance(): number {
        return this._balance
    }
    // getBalance(): number {
    //     return this._balance
    // }

    //setter
    set deposit(ammount: number) {
        this._balance = this.balance + ammount
    }
    // addDeposit(amount: number) {
    //     this._balance = this._balance + amount;
    // }
}

class StudentAccount extends BankAccount {
    // test() {
    //     this._balance
    // }
}

const myAccount = new BankAccount(444, "Persian", 20);
// myAccount.addDeposit(20);
// myAccount.getBalance();

// console.log(myAccount.getBalance())
console.log(myAccount.balance)
myAccount.deposit = 30
console.log(myAccount.balance)