import { GenerateId } from './helpers/core';
import { ParseAmount } from './helpers/accounting';
import categories from './generators/categories';
import accounts from './generators/accounts';
import wallets from './generators/wallets';
import Financial from './models/financial';

console.log('Financial Budgeting - 2020-06-17');
console.log('---------------------');

const app = document.querySelector('[data-id="app"]');

// Add limit to an account + add account type

const danaosPayroll = accounts.find(item => item.code === "danaos-payroll");
const dimitrisPersonal = accounts.find(item => item.code === "dimitris-personal");
const webDevelopment = accounts.find(item => item.code === "web-development");
const vacation = accounts.find(item => item.code === "vacation");
const expenses = accounts.find(iteme => item.code === "budget-expenses-jul-2020");

const nbg = wallets.find(item => item.code === 'nbg');
const dimitrisWallet = wallets.find(item => item.code === 'dimitris-wallet');

danaosPayroll.deposit({ Amount: 1510.34 });
// danaosPayroll.transfer({ Account: dimitrisPersonal, Amount: 100 });
// danaosPayroll.transfer({ Account: vacation, Amount: 50 });
danaosPayroll.transfer({ Wallet: dimitrisWallet, Amount: 160 });
danaosPayroll.transfer({ Wallet: dimitrisWallet, Amount: 320 });
danaosPayroll.transfer({ Wallet: nbg, Amount: 353.52 });
danaosPayroll.transfer({ Wallet: nbg, Amount: 80 });

console.log(danaosPayroll);
console.log(danaosPayroll.getBalance());

// danaosPayroll.transfer({ Account: expenses, Wallet: });

// dimitrisPersonal.transfer({ Account: webDevelopment, Amount: 100 });
// dimitrisPersonal.transfer({ Wallet: dimitrisWallet, Amount: 100 });

// nbg.transfer({ Wallet: dimitrisWallet, Amount: 300 });
// nbg.transfer({ Wallet: dimitrisWallet, Amount: 80 });
// dimitrisWallet.transfer({ Wallet: nbg, Amount: 50 });

const walletsOverviewTemplate = `<pre><code>--- Wallets ---</code>${wallets.map(item => `<li>${item.name} - ${ParseAmount(item.getBalance()).formattedValue}</li>`).join('')}</pre>`;
const accountOverviewTemplate = `<pre><code>--- Accounts ---</code>${accounts.map(item => `<li>${item.name} - ${ParseAmount(item.getBalance()).formattedValue}</li>`).join('')}</pre>`;
const accountDetails = `<code>${accounts[6].name} [${accounts[6].code}] transactions</code><pre>${accounts[6].transactions.map(item => `<li>${item.id} - ${ParseAmount(item.amount).formattedValue}</li>`).join('')}</pre>`;
app.innerHTML = `${accountOverviewTemplate} ${walletsOverviewTemplate} ${accountDetails}`;





// nbg.tranfser({ Account: })
// dimitrisWallet.transfer({ Account: budgetExpensesAccount_June_2020, Amount: 30 }); console.log(ParseAmount(dimitrisWallet.getBalance()).formattedValue);
// dimitrisWallet.transfer({ Account: budgetExpensesAccount_June_2020, Amount: 19.42 }); console.log(ParseAmount(dimitrisWallet.getBalance()).formattedValue);
// dimitrisWallet.transfer({ Account: budgetExpensesAccount_June_2020, Amount: 243000 }); console.log(ParseAmount(dimitrisWallet.getBalance()).formattedValue);

// console.log(ParseAmount(dimitrisWallet.transactions[0].amount).formattedValue);
// console.log(ParseAmount(dimitrisWallet.transactions[1].amount).formattedValue);
// console.log(ParseAmount(dimitrisWallet.transactions[2].amount).formattedValue);
// console.log(ParseAmount(dimitrisWallet.transactions[3].amount).formattedValue);
// console.log(ParseAmount(dimitrisWallet.transactions[4].amount).formattedValue);

// console.log(dimitrisWallet);
// console.log(vassiasWallet);
// console.log(budgetExpensesAccount_June_2020);
