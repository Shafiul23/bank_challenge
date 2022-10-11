const Account = require("../src/account");


describe(`Account tests:`, () => {
    let expected, actual;
    const first = { getAmount: () => 1000, getDate: () => `10/01/2012`, getCard: () => `credit`, setBalance: () => 1000, getBalance: () => 1000 };
    const second = { getAmount: () => 2000, getDate: () => `13/01/2012`, getCard: () => `credit`, setBalance: () => 3000, getBalance: () => 3000 };
    const third = { getAmount: () => -500, getDate: () => `14/01/2012`, getCard: () => `debit`, setBalance: () => 2500, getBalance: () => 2500 };

    beforeEach(() => {
        account = new Account();
    })

    afterEach(() => {
        account = null;
        expected = null;
        actual = null;
    });

    describe(`test 1 - `, () => {
        it(`Should store deposit into the transactions array`, () => {
            //Arrange
            let expected = 1;
            //Act/Assert
            account.makeDeposit(first);
            let actual = account.getTransactions().length;

            //Expect
            expect(actual).toBe(expected);
        });
    });
    describe(`test 2 -`, () => {
        it(`First deposit should have a value, date and card type`, () => {
            account.makeDeposit(first);
            let actual = account.getTransactions()[0];
            expect(actual).toEqual(first);
        });
    });
    describe(`test 3 - `, () => {
        it(`Second deposit should be made`, () => {
            account.makeDeposit(first);
            account.makeDeposit(second)
            let actual = account.getTransactions()[1];
            expect(actual).toEqual(second);
        });
    });
    describe(`test 4 -`, () => {
        it(`Third transaction should have a negative value to represent withdrawal`, () => {
            account.makeDeposit(first);
            account.makeDeposit(second);
            account.makeWithdrawal(third);
            let actual = account.getTransactions()[2];
            expect(actual).toEqual(third);
        });
    });
    describe(`test 5 -`, () => {
        it(`See if balance updates with second transaction`, () => {
            account.makeDeposit(first);
            account.makeDeposit(second);
            let actual = account.getBalance();
            expect(actual).toEqual(second.getBalance());
        });
    });
});