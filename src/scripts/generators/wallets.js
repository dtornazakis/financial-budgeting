import { GenerateId } from './../helpers/core';
import Financial from './../models/financial';
import accounts from './accounts';

const dimitrisCash = Financial.Wallet({ AccountIds: [accounts[2].id], Name: "Dimitri's Wallet", Id: GenerateId });
const vassiaCash = Financial.Wallet({ Name: "Vassia's Wallet", Id: GenerateId });
const hsbc = Financial.Wallet({ Name: "HSBC", Id: GenerateId });
const nbg = Financial.Wallet({ Name: "NBG", Id: GenerateId });
const alphaBankDimitris = Financial.Wallet({ Name: "Alphabank (Dimitris)", Id: GenerateId });
const alphaBankVassia = Financial.Wallet({ Name: "Alphabank (Vassia)", Id: GenerateId });
const ticketRestaurantGiftCard = Financial.Wallet({ Name: "Ticket Restaurant (Gift Card)", Id: GenerateId });

const wallets = [
	dimitrisCash,
	vassiaCash,
	hsbc,
	nbg,
	alphaBankDimitris,
	alphaBankVassia,
	ticketRestaurantGiftCard
];

export { wallets };

export default wallets;