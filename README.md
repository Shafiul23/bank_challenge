# Shafiul's Bank challenge. 

This challenge set by the Digital Futures Academy focused on developing a domain model which would then be converted into a functioning programme via test-driven develepment using more complicated (and more efficient) methods of testing. 

## Instructions to install and run project
1. Fork this repo and clone to your machine
2. `npm install` to install the project dependencies
3. `npm test` to run all the spec files containing the tests
4. `npm start` to run the programme 

- To make a new deposit, declare a variable and create a new instance of the deposit class with the desired properties. 
- e.g. `let variable = new Deposit(500, '01/07/2022', 'credit')`
- The first input should be the value of the transaction (positive for deposit, negative for withdrawal)
- Second input is the date in string form.
- Third input is the card type ('credit' or 'debit')
- Next, create a new account (e.g, `let account = new Account()` )
- Also, create a new statement with the new account instance (e.g. `let stat = new Statement(account)`)
- After this, create any new deposits or withdrawals to the account using `makeDeposit()` or `makeWithdrawal()`
- Finally, to print statement, use `stat.print()`


### Requirements

* You should be able to interact with your code via the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```


#### Standard
- [ ] Meets the spec
- [ ] Developed test-first
- [ ] Passes tests and code is linted
- [ ] Encapsulates adding and storing Transactions in a class
- [ ] Encapsulates Statement formatting in a class
- [ ] Encapsulates Transaction data in a class



## Domain model


| Objects        | Properties           | Messages          | Output    |
| -------------- | -------------------- | ----------------- | --------- |
| Deposit        | Value @Number        | getAmount()       | @Number   |
|                | date @String         | getDate()         | @String   |
|                | card @String         | getCard()         | @String   |
| Account        | transactions @Array  | getTransactions() | @String   |
|                | balance @Number      | getBalance()      | @Number   |
| Statemen       |                      | print(            | @Stri     |


# Tests
- 1-4: Test that a new deposit creates a value of 1000, a date of `10-01-2012` and a card type of `credit`
- 5: Test that a new deposit gets stored into a transactions array
- 6-8: Test that each deposit from the user requirements are successful
- 9: Test that balance updates as new deposits are added. 
- 10: Test that the print method from the statement class is called. 
