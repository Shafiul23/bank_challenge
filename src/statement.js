const Account = require(".//account")

class Statement {

    constructor(account = new Account()) {
        this.account = account;
    }

    print() {
        console.log(`date       || credit  || debit  || balance`)
        for (let i = this.account.getTransactions().length - 1; i >= 0; i--) {
            const cur = this.account.getTransactions()[i];
            console.log(`${cur.getDate()} || ${cur.getAmount() > 0 ? cur.getAmount().toFixed(2) : `       `} || ${cur.getAmount() < 0 ? (-cur.getAmount()).toFixed(2) + ` ` : `       `}|| ${cur.getBalance().toFixed(2)}`)
        }
    }
}

module.exports = Statement;
