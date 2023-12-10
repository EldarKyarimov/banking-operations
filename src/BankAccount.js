function BankAccount(ownerName, initialBalance) {
    this.ownerName = ownerName;
    this.balance = initialBalance;
}

BankAccount.prototype.deposit = function (amount) {
    if (amount > 0) {
        this.balance += amount;
    } else {
        throw new Error('Deposit amount must be positive!')
    }
}

BankAccount.prototype.withdraw = function (amount) {
    if (amount > 0 && this.balance >= amount) {
        this.balance -= amount;
    } else {
        throw new Error('Insufficient funds!');
    }
}

BankAccount.prototype.getBalance = function getBalance() {
    return this.balance;
}

module.exports = { BankAccount }







