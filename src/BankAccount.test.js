const { BankAccount } = require('./BankAccount');

describe('BankAccount', () => {
    describe('Initialization', () => {
        test('should create an instance of BankAccount with correct owner and initial balance', () => {
            const account = new BankAccount('Victor', 700);
            expect(account).toBeInstanceOf(BankAccount);
            expect(account.ownerName).toBe('Victor');
            expect(account.getBalance()).toBe(700);
        });
    });

    describe('Deposit and Withdraw', () => {
        let account;

        beforeEach(() => {
            account = new BankAccount('Victor', 700);
        });

        test('should correctly increase balance with deposit', () => {
            account.deposit(300);
            expect(account.getBalance()).toBe(1000);
        });

        test('should correctly decrease balance with withdraw', () => {
            account.withdraw(400);
            expect(account.getBalance()).toBe(300);
        });

        test('should not allow negative deposit amount', () => {
            expect(() => {
                account.deposit(-300);
            }).toThrow('Deposit amount must be positive!');
        });

        test('should not allow withdrawing more than the balance', () => {
            expect(() => {
                account.withdraw(1000);
            }).toThrow('Insufficient funds!');
        });
    });

    describe('Balance', () => {
        let account;

        beforeEach(() => {
            account = new BankAccount('Victor', 700);
        });

        test('should return correct balance', () => {
            expect(account.getBalance()).toBe(700);
        });
    });
});