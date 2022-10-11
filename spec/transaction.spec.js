const Transaction = require("../src/transaction");

describe(`Transaction tests:`, () => {
    let expected, actual;

    beforeEach(() => {
        depo1 = new Transaction(1000, new Date(2012, 1, 10), `credit`);
        depo2 = new Transaction(2000, new Date(2012, 1, 13), `credit`);
        depo3 = new Transaction(-500, new Date(2012, 1, 14), `debit`);
    })

    afterEach(() => {
        expected = null;
        actual = null;
    });

    describe(`test 1 - `, () => {
        it(`Should create a new transaction with a value of 1000`, () => {
            // Arrange / Act
            // Assert
            expected = 1000
            actual = depo1.getAmount();
            expect(actual).toBe(expected)
        });
    });
    describe(`test 2 - `, () => {
        it(`Should create a new transaction with a date of 10-12-01`, () => {
            // Arrange / Act
            // Assert
            expected = `10/01/2012`
            actual = depo1.getDate();
            expect(actual).toBe(expected)
        });
    });
    describe(`test 3 - `, () => {
        it(`Should create a new transaction with a credit card`, () => {
            // Arrange / Act
            // Assert
            expected = `credit`
            actual = depo1.getCard();
            expect(actual).toBe(expected)
        });
        // These 3 tests cover all elements in the first TWO user requirements
    });
    describe(`test 4 - `, () => {
        it(`Should create a new transaction with a negative value to represent a withdrawal`, () => {

            expected = -500
            actual = depo3.getAmount();
            expect(actual).toBe(expected)
        });
    });
});
