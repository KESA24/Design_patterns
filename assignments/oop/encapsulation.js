var BankMember = /** @class */ (function () {
    function BankMember(savingsBalance) {
        this._savingsBalance = savingsBalance;
    }
    Object.defineProperty(BankMember.prototype, "savingsBalance", {
        // Created a public get method which our outside clients can use for leverage within their application
        get: function () {
            return this._savingsBalance;
        },
        enumerable: false,
        configurable: true
    });
    BankMember.prototype.deposit = function (amount) {
        this._savingsBalance += amount;
    };
    BankMember.prototype.withdraw = function (amount) {
        if (this.savingsBalance < amount) {
            console.log("Insufficient Funds");
            return;
        }
        this._savingsBalance -= amount;
    };
    return BankMember;
}());
;
var Kesa = new BankMember(3000);
// Depositing
console.log("Deposit Funds");
Kesa.deposit(150);
console.log("Kesa's Savings Balance is : $" + Kesa.savingsBalance);
// Withdrawing
console.log("Withdrawing Funds");
Kesa.withdraw(1650);
console.log("Chuck's Savings Balance is: $" + Kesa.savingsBalance + " \n");
