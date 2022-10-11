class Transaction {

    #amount;
    #date;
    #card;
    #balance;

    constructor(amount, date, card) {
        this.#amount = amount;
        this.#date = this.#formatDate(date);
        this.#card = card;

    }

    getAmount() {
        return this.#amount;
    };

    getDate() {
        return this.#date;
    };

    getCard() {
        return this.#card;
    };

    getBalance() {
        return this.#balance;
    }

    setBalance(balance) {
        this.#balance = balance;
    }

    #formatDate(date) {
        let dd = String(date.getDate()).padStart(2, `0`);
        let mm = String(date.getMonth()).padStart(2, `0`); //Month starts on 0 index
        let yyyy = date.getFullYear();

        return dd + '/' + mm + '/' + yyyy;
    }
}



module.exports = Transaction;