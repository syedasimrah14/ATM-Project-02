#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Good Day! Please insert your card to get started");
let accountBalance = 100000;
let pinCode = 5121;
let myPin = await inquirer.prompt([
    {
        name: "PIN",
        message: " Pease enter your 4 digits PIN",
        type: "number",
    },
]);
if (myPin.PIN === pinCode) {
    console.log("Your PIN has been verified sucessfully");
    let myOperation = await inquirer.prompt([
        {
            name: "Operation",
            message: " How can we assist you today? Please select from the following options:",
            type: "list",
            choices: ["Cash Withdrawl", "Balance Inquiry"]
        }
    ]);
    if (myOperation.Operation === "Cash Withdrawl") {
        let myAmount = await inquirer.prompt([
            {
                name: "Amount",
                message: "Please enter your amount:",
                type: "number",
            }
        ]);
        if (myAmount.Amount <= accountBalance) {
            accountBalance -= myAmount.Amount;
            console.log("Please collect your cash. Your rmaining balance is Rupees " + accountBalance);
        }
        else {
            console.log("You have insufficient balance to proceed with the transaction");
        }
    }
    else if (myOperation.Operation === "Balance Inquiry")
        console.log(`Your balance is Rupees : ${accountBalance}`);
}
else {
    console.log("Please enter a valid PIN");
}
