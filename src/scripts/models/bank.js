import { GCD } from './../helpers/math';

const Bank = ({ Bills: bills, Financial, Id, Money: money }) => {

	// GCD: Greatest Common Divisor
	const calculateGCD = ({ Values: values }) => {
		let gcd = values[0];
		for (let i = 1; i < values.length; i++) {
			const value = values[i];
			gcd = GCD(gcd, value);
		}
		return gcd;
	};

	const convertAmountToMoney = ({ Amount: amount }) => {

		if (amount % gcd !== 0) {
			throw new Error("Invalid amount");
		}

		const billsSortedDesc = bills.sort((a,b) => {
			if(a.value > b.value) return -1;
    		if(a.value < b.value) return 1;
			return 0;
		});	

		const money = [];
		for (let item of billsSortedDesc) {
			
			let itemQuantity = 0;
			while (amount >= item.value) {
				itemQuantity += 1;
				amount = amount - item.value;
			}
			money.push(Financial.Money({ Bill: item, Quantity: itemQuantity }));
		}

		return money;
	};

	const account = Financial.Account({ Money: money, Id });
	
	const gcd = calculateGCD({ Values: account.money.map(item => item.bill.value) });

	return Object.freeze({
		id: Id(),
		account,
		bills,
		convertAmountToMoney,
	});
};

export default Bank;