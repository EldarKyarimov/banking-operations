const { BankAccount } = require('./BankAccount');
describe('BankAccount class', () => {
    describe('for Victor Acc', () => {
        let account;
        beforeEach(() => {
            account = new BankAccount('Victor', 700);
        })

        test('should be defined', () => {
            expect(BankAccount).toBeDefined();
        })

        test('should return correct owner and balance', () => {
            expect(account.balance).toBe(700);
            expect(account.ownerName).toBe('Victor');
        })

        test('should return the correct balance increase result', () => {
            account.deposit(300);
            expect(account.balance).toBe(1000);
            account.deposit(555);
            expect(account.balance).toBe(1555);
        })

        test('should return the correct balance decrease result', () => {
            account.withdraw(400);
            expect(account.balance).toBe(300);
            account.withdraw(150);
            expect(account.balance).toBe(150);
        })

        test('should not allow negative deposit amount', () => {
            expect(() => {
                account.deposit(-300);
            }).toThrow('Deposit amount must be positive!');
        })

        test('should not allow withdrawing more than the balance', () => {
            expect(() => {
                account.withdraw(1000);
            }).toThrow('Insufficient funds!')
        })

        test('should return correct balance', () => {
            expect(account.getBalance()).toBe(700);
        })

    });

    describe('for Nick Acc', () => {
        let account;
        beforeEach(() => {
            account = new BankAccount('Nick', 3746);
        })

        test('should be defined', () => {
            expect(BankAccount).toBeDefined();
        })

        test('should return correct owner and balance', () => {
            expect(account.ownerName).toBe('Nick');
            expect(account.balance).toBe(3746);
        })

        test('should return the correct balance increase result', () => {
            account.deposit(254);
            expect(account.balance).toBe(4000);
            account.deposit(567);
            expect(account.balance).toBe(4567);
        })

        test('should return the correct balance decrease result', () => {
            account.withdraw(746);
            expect(account.balance).toBe(3000);
            account.withdraw(1100);
            expect(account.balance).toBe(1900);
        })

        test('should not allow negative deposit amount', () => {
            expect(() => {
                account.deposit(-475);
            }).toThrow('Deposit amount must be positive!');
        })

        test('should not allow withdrawing more than the balance', () => {
            expect(() => {
                account.withdraw(4000);
            }).toThrow('Insufficient funds!')
        })

        test('should return correct balance', () => {
            expect(account.getBalance()).toBe(3746);
        })
    });
})