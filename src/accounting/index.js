const readline = require('readline');

function runApp(inputs) {
  let balance = 1000.00;
  let inputIndex = 0;
  let outputs = [];

  function displayMenu() {
    outputs.push('--------------------------------');
    outputs.push('Account Management System');
    outputs.push('1. View Balance');
    outputs.push('2. Credit Account');
    outputs.push('3. Debit Account');
    outputs.push('4. Exit');
    outputs.push('--------------------------------');
    outputs.push('Enter your choice (1-4): ');
    handleChoice(inputs[inputIndex++]);
  }

  function handleChoice(choice) {
    const option = parseInt(choice);
    switch (option) {
      case 1:
        // View Balance
        outputs.push(`Current balance: ${balance.toFixed(2)}`);
        if (inputIndex < inputs.length) displayMenu();
        break;
      case 2:
        // Credit Account
        outputs.push('Enter credit amount: ');
        const amtCredit = parseFloat(inputs[inputIndex++]);
        if (!isNaN(amtCredit) && amtCredit >= 0) {
          balance += amtCredit;
          outputs.push(`Amount credited. New balance: ${balance.toFixed(2)}`);
        } else {
          outputs.push('Invalid amount.');
        }
        if (inputIndex < inputs.length) displayMenu();
        break;
      case 3:
        // Debit Account
        outputs.push('Enter debit amount: ');
        const amtDebit = parseFloat(inputs[inputIndex++]);
        if (!isNaN(amtDebit) && amtDebit >= 0) {
          if (balance >= amtDebit) {
            balance -= amtDebit;
            outputs.push(`Amount debited. New balance: ${balance.toFixed(2)}`);
          } else {
            outputs.push('Insufficient funds for this debit.');
          }
        } else {
          outputs.push('Invalid amount.');
        }
        if (inputIndex < inputs.length) displayMenu();
        break;
      case 4:
        // Exit
        outputs.push('Exiting the program. Goodbye!');
        break;
      default:
        outputs.push('Invalid choice, please select 1-4.');
        if (inputIndex < inputs.length) displayMenu();
        break;
    }
  }

  displayMenu();
  return outputs;
}

if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let balance = 1000.00;

  function displayMenu() {
    console.log('--------------------------------');
    console.log('Account Management System');
    console.log('1. View Balance');
    console.log('2. Credit Account');
    console.log('3. Debit Account');
    console.log('4. Exit');
    console.log('--------------------------------');
    rl.question('Enter your choice (1-4): ', handleChoice);
  }

  function handleChoice(choice) {
    const option = parseInt(choice);
    switch (option) {
      case 1:
        // View Balance
        console.log(`Current balance: ${balance.toFixed(2)}`);
        displayMenu();
        break;
      case 2:
        // Credit Account
        rl.question('Enter credit amount: ', (amount) => {
          const amt = parseFloat(amount);
          if (!isNaN(amt) && amt >= 0) {
            balance += amt;
            console.log(`Amount credited. New balance: ${balance.toFixed(2)}`);
          } else {
            console.log('Invalid amount.');
          }
          displayMenu();
        });
        break;
      case 3:
        // Debit Account
        rl.question('Enter debit amount: ', (amount) => {
          const amt = parseFloat(amount);
          if (!isNaN(amt) && amt >= 0) {
            if (balance >= amt) {
              balance -= amt;
              console.log(`Amount debited. New balance: ${balance.toFixed(2)}`);
            } else {
              console.log('Insufficient funds for this debit.');
            }
          } else {
            console.log('Invalid amount.');
          }
          displayMenu();
        });
        break;
      case 4:
        // Exit
        console.log('Exiting the program. Goodbye!');
        rl.close();
        break;
      default:
        console.log('Invalid choice, please select 1-4.');
        displayMenu();
        break;
    }
  }

  displayMenu();
}

module.exports = { runApp };