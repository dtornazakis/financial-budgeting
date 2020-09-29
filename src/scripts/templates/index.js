const accountMoney = ({ Account: account, Name: name, DebugMode: debugMode = false }) => {

	const accountMoneyDebug = ({ Account: account, Name: name }) => {
		
		return `${name} account [#${account.id}] money\n----------------\n${account.money.map(item => `- ${item.getQuantity()} * ${item.bill.value} = ${item.bill.value * item.getQuantity()} \n`).join('')}----------------\n- Total = ${account.money.map(item => item.bill.value * item.getQuantity()).reduce((acc, value) => acc + value)}\n----------------`;
	};

	const accountMoneyHTML = ({ Account: account, Name: name }) => {
		
		return `${name} account [#${account.id}] money\n----------------\n${account.money.map(item => `- ${item.getQuantity()} * ${item.bill.value} = ${item.bill.value * item.getQuantity()} \n`).join('')}----------------\n- Total = ${account.money.map(item => item.bill.value * item.getQuantity()).reduce((acc, value) => acc + value)}\n----------------`;
	};

	if (debugMode) {

		const template = accountMoneyDebug({ Account: account, Name: name });
		console.log(template);

		return '';
	}

	return accountMoneyHTML({ Account: account, Name: name });
};

const accountTransactions = ({ Account: account, Name: name, DebugMode: debugMode = false }) => {

	const accountTransactionsDebug = ({ Account: account, Name: name }) => {
		
		return `${name} account [#${account.id}] transactions\n----------------\n${account.transactions.map(item => `- #${item.id}: ${item.amount} \n`).join('')}`	
	};

	const accountTransactionsHTML = ({ Account: account, Name: name }) => {
		
		return "";
	};

	if (debugMode) {

		const template = accountTransactionsDebug({ Account: account, Name: name });
		console.log(template);

		return '';
	}

	return accountTransactionsHTML({ Account: account, Name: name });
};

const displayMap = ({ Map: map, Players: players, DebugMode: debugMode = false }) => {

	const displayMapDebug = ({ Map: map, Players: players }) => {

		const playerIndexes = players.map(player => { return { index: player.getMapPosition(), name: player.name }; });
		for (let tile of map.tiles) {
			tile.player = '';
			const isPlayerInTile = playerIndexes.find(item => item.index === tile.index);
			if (isPlayerInTile) {
				tile.player = isPlayerInTile.name;
			}
		}

		return `Map instance [#${map.id}]
		\n----------------
		\n${map.tiles.map(item => `- ${item.index} [${item.player || ''}] - [${item.event || ''}]\n`).join('')}`;
	};

	const displayMapHTML = ({ Map: map, Players: players }) => {
		return `Map instance [#${map.id}]
			\n----------------
			\n${map.tiles.map(item => `- ${item.index} [${item.event || ''}]\n`).join('')}`;
	};

	if (debugMode) {
		const template = displayMapDebug({ Map: map, Players: players });
		console.log(template);

		return '';
	}

	return displayMapHTML({ Map: map, Players: players });
};

const templates = {
	AccountMoney: accountMoney,
	AccountTransactions: accountTransactions,
	DisplayMap: displayMap,
};

export {
	accountMoney as AccountMoney,
	accountTransactions as AccountTransactions,
	displayMap as DisplayMap,
};

export default templates;


// const template = `

// <h2>Player 1</h2>

// <ul>
// 	<li>Id: <strong>${Configuration.player1.id}</strong></li>
// 	<li>Color: <strong>${Configuration.player1.color}</strong></li>
// </ul>

// <h3>Account - <code>${Configuration.player1.account.id}</code></h3>

// <ul>
// 	<li>Id: <strong>${Configuration.player1.id}</strong></li>
// 	<li>Money: <strong>${Configuration.player1.account.money.map(monetaryItem => `${monetaryItem.bill.value}[${monetaryItem.getQuantity()}]`).join(' - ')}</strong></li>
// 	<li>Balance: <strong>${Configuration.player1.account.getBalance()}</strong></li>
// </ul>

// <h4>Transactions</h4>

// ${Configuration.player1.account.transactions.length > 0 ? `
// 	<ul>
// 		${Configuration.player1.account.transactions.map(item => `<li>${item.accountId}: ${item.amount}</li>`).join('')}
// 	</ul>
// `
// : null
// }

// <h2>Bank</h2>

// <ul>
// 	<li>Id: <strong>${Configuration.bank.id}</strong></li>
// 	<li>Bills: <strong>${Configuration.bank.bills.map(bill => `${bill.value}[${bill.color}]`).join(' - ')}</strong></li>
// 	<li>Money: <strong>${Configuration.bank.account.money.map(monetaryItem => `${monetaryItem.bill.value}[${monetaryItem.getQuantity()}]`).join(' - ')}</strong></li>
// 	<li>Balance: <strong>${Configuration.bank.account.getBalance()}</strong></li>
// </ul>

// <h3>Account - <code>${Configuration.bank.account.id}</code></h3>


// ${Configuration.bank.account.transactions.length > 0 ? `
// 	<ul>
// 		${Configuration.bank.account.transactions.map(item => `<li>${item.accountId}: ${item.amount}</li>`).join('')}
// 	</ul>
// `
// : null
// }

// ${Templates.AccountTransactions({ Name: "bank", Account: bank.account, DebugMode: true })}
// ${Templates.AccountMoney({ Name: "bank", Account: bank.account, DebugMode: true })}


// ${Templates.AccountMoney({ Name: player1.name, Account: player1.account, DebugMode: true })}
// ${Templates.AccountMoney({ Name: player2.name, Account: player2.account, DebugMode: true })}

// ${Templates.AccountTransactions({ Name: player1.name, Account: player1.account, DebugMode: true })}
// ${Templates.AccountTransactions({ Name: player2.name, Account: player2.account, DebugMode: true })}

// `;