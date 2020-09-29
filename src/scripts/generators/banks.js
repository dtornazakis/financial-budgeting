import GlobalSettings from './../settings/global';
import { GenerateId } from './../helpers/core';
import Financial from './../models/financial';
import Bank from './../models/bank';

// Initialize the bank's capacity
const bankMoney = GlobalSettings.BANK_BILLS.map(bill => 
	Financial.Money({ Bill: bill, Quantity: 50 })
);

// Create the bank instance for the game
const bank = Bank({
	Id: GenerateId,
	Bills: GlobalSettings.BANK_BILLS,
	Financial: Financial,
	Money: bankMoney
});

export { bank };

export default bank;