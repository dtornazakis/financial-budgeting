import { GenerateCodeFromName } from './../helpers/core';

const canProceedToTransfer = ({ Balance: _balance, Amount: _amount }) => _balance - _amount >= 0;

const Account = ({ Balance: balance = 0, Name: name, Id }) => {

	const deposit = ({ Amount: _amount }) => {
		updateBalance(_amount);
	};

	const getBalance = () => balance;

	const transfer = ({ Account: _account, Wallet: _wallet,  Amount: _amount = 0 }) => {
		const isTransferValid = canProceedToTransfer({ Balance: getBalance(), Amount: _amount });
		if (!isTransferValid) { 
			throw new Error("Transfer cannot be completed");
		}

		if (_account)
			return transferATA({ Account: _account, Amount: _amount });
		else if (_wallet)
			return transferATW({ Wallet: _wallet, Amount: _amount });
	};

	/// Transfer Account to Account
	const transferATA = ({ Account: _account, Amount: _amount }) => {

		// update existing account
		transactions.push(Transaction({ 
			AccountId: _account.id, 
			Amount: -_amount,
			Id
		}));

		updateBalance(-_amount);

		// update transfer account
		_account.transactions.push(Transaction({ 
			AccountId: id, 
			Amount: _amount,
			Id
		}));

		_account.updateBalance(_amount);
	};

	/// Transfer Account to Wallet
	const transferATW = ({ Wallet: _wallet, Amount: _amount }) => {

		const wallet = wallets.find(item => item.id === _wallet.id);
		if (!wallet)
			wallets.push(_wallet);

		// update existing account
		transactions.push(Transaction({ 
			AccountId: _wallet.id, 
			Amount: -_amount,
			Id,
			Type: "D"
		}));

		// update transfer account
		_wallet.transactions.push(Transaction({ 
			AccountId: id, 
			Amount: _amount,
			Id,
			Type: "D"
		}));
		// update transfer wallet
		_wallet.updateBalance(_amount);
	};	

	const updateBalance = (balanceChange) => balance = parseFloat((balance + balanceChange).toFixed(2));

	const validateTransfer = ({ Money: _money }) => {

		if (!_money || _money.length <= 0) { return false; }

		let isValid = true;
		
		for (let _item of _money) {
			const monetaryItem = money.find(item => item.bill.value === _item.bill.value);
			if (_item.getQuantity() > monetaryItem.getQuantity()) {
				isValid = false;
				break;
			}
		}

		return isValid;
	};

	const id = Id();
	const code = GenerateCodeFromName(name);
	const transactions = [];
	const wallets = [];

	return Object.freeze({
		code,
		deposit,
		getBalance,
		id,
		name,
		transactions,
		transfer,
		updateBalance,
		wallets
	});
};

const Wallet = ({ AccountIds: accountIds, Balance: balance = 0, Name: name, Id }) => {
	
	const getBalance = () => balance;
	
	const transfer = ({ Account: _account, Wallet: _wallet,  Amount: _amount = 0 }) => {
		const isTransferValid = canProceedToTransfer({ Balance: getBalance(), Amount: _amount });
		if (!isTransferValid) { 
			throw new Error("Transfer cannot be completed");
		}

		if (_account)
			return transferWTA({ Account: _account, Amount: _amount });
		else if (_wallet)
			return transferWTW({ Wallet: _wallet, Amount: _amount });
	};

	/// Transfer Wallet to Wallet
	const transferWTW = ({ Wallet: _wallet, Amount: _amount }) => {

		// update existing account
		transactions.push(Transaction({ 
			AccountId: _wallet.id, 
			Amount: -_amount,
			Id
		}));

		updateBalance(-_amount);

		// update transfer account
		_wallet.transactions.push(Transaction({ 
			AccountId: id, 
			Amount: _amount,
			Id
		}));

		_wallet.updateBalance(_amount);
	};

	/// Transfer Wallet to Account
	const transferWTA = ({ Account: _account, Amount: _amount }) => {};

	const updateBalance = (balanceChange) => balance = parseFloat((balance + balanceChange).toFixed(2));

	const accounts = [];
	const id = Id();
	const code = GenerateCodeFromName(name);
	const transactions = [];

	return Object.freeze({
		id,
		accounts,
		accountIds,
		code,
		getBalance,
		name,
		transactions,
		transfer,
		updateBalance
	});
};

const Transaction = ({ 
	AccountId: accountId, 
	Amount: amount, 
	CreatedOn: createdOn = new Date().toISOString(), 
	CategoryId: categoryId,
	Type: type,
	Id }) => {

	const id = Id();
	return Object.freeze({
		accountId,
		amount,
		createdOn,
		id,
		type
	});
};

const financial = {
	Account,
	Transaction,
	Wallet
};

export { 
	Account,
	Transaction,
	Wallet
};

export default financial;