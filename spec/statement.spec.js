const Transaction = require("../src/transaction");
const Account = require("../src/account");
const Statement = require("../src/statement");

describe(`Statement tests:`, () => {
    let expected, actual;


    describe(`test 1 - `, () => {
        it(`print method should be called`, () => {
            // Arrange / Act
            let test1 = new Account();
            let stat = new Statement(test1 = new Account());
            let depo1 = new Transaction(1000, new Date(2012, 1, 10), `credit`);
            let depo2 = new Transaction(2000, new Date(2012, 1, 13), `credit`);
            let depo3 = new Transaction(-500, new Date(2012, 1, 14), `debit`);
            test1.makeDeposit(depo1);
            test1.makeDeposit(depo2);
            test1.makeWithdrawal(depo3);
            // Assert

            let printSpy = spyOn(stat, `print`)
            stat.print();
            expect(printSpy).toHaveBeenCalledTimes(1);

        });
    });
});