class Account {

    #balance;
    #transactions;

    constructor() {
        this.#balance = 0;
        this.#transactions = [];

    };

    makeDeposit(info) {
        this.#balance += info.getAmount();
        info.setBalance(this.#balance);
        this.#transactions.push(info);
    };

    makeWithdrawal(info) {
        this.#balance += info.getAmount();
        info.setBalance(this.#balance);
        this.#transactions.push(info);
    }

    getTransactions() {
        return this.#transactions;
    };

    getBalance() {
        return this.#balance;
    };
};

module.exports = Account;

