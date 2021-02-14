
class BankMember {
    
    // Made _savingsBalance property private and prepended an underscore to it to denote its private access type
    private _savingsBalance: number;

    // Created a public get method which our outside clients can use for leverage within their application
    public get savingsBalance(): number {
        return this._savingsBalance;
    }

    constructor(savingsBalance: number){
        this._savingsBalance = savingsBalance;
    }

    public deposit(amount: number): void {
        this._savingsBalance += amount;
    }

    public withdraw(amount: number): void {

        if(this.savingsBalance < amount){
            console.log("Insufficient Funds");
            return;
        }

        this._savingsBalance -= amount;

    }

};

const Kesa = new BankMember(3000);

// Depositing
console.log("Deposit Funds");
Kesa.deposit(150);
console.log(`Kesa's Savings Balance is : $${Kesa.savingsBalance}`);

// Withdrawing
console.log("Withdrawing Funds");
Kesa.withdraw(1650);
console.log(`Chuck's Savings Balance is: $${Kesa.savingsBalance} \n`);


