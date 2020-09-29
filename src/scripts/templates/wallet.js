const generateWallet = ({ AccountId: accountId, Money: money, IsConsole: isConsole = false }) => {

	const generateHTMLWallet = ({ Header: header, Data: data }) => {

		const generateTableData = ({ Data: data }) => `
			<tbody>
				<tr>
					${data.map(item => `
						<td>${item.getQuantity()}</td>
					`).join('')}
					<td>${data.map(item => item.getQuantity()).reduce((acc, value) => acc + value)}</td>
				</tr>
			</tbody>
		`;

		const generateTableFooter = ({ Data: data }) => `
			<tfoot>
				<tr>
					${data.map(item => `<td>${item.bill.value * item.getQuantity()}</td>`).join('')}
					<td>${data.map(item => item.bill.value * item.getQuantity()).reduce((acc, value) => acc + value)}</td>
				</tr>
			</tfoot>
		`;

		const generateTableHeader = ({ Data: data }) => `
			<thead>
				<tr>
					${data.map(item => `<th style='background-color: ${item.bill.color};'>${item.bill.value}</th>`).join('')}
					<td>Total</td>
				</tr>
			</thead>
		`;

		return `
		<section>
		
			<h3>${header}</h3>

			<table>
				${generateTableHeader({ Data: money })}
				${generateTableData({ Data: money })}
				${generateTableFooter({ Data: money })}
			</table>

		</section>`;
	};

	const generateConsoleWallet = ({ Header: header, Data: data }) => {

		const generateTableData = ({ Data: data }) => `
			${data.map(item => `
				${item.getQuantity()}
			`).join(' | ')}
			| ${data.map(item => item.getQuantity()).reduce((acc, value) => acc + value)}
		`;

		const generateTableFooter = ({ Data: data }) => `
			${data.map(item => item.bill.value * item.getQuantity()).join(' | ')}
			${data.map(item => item.bill.value * item.getQuantity()).reduce((acc, value) => acc + value)}
		`;

		const generateTableHeader = ({ Data: data }) => `
			${data.map(item => item.bill.value)}
		`;

		const print = data.map(item => { return { value: item.bill.value, quantity: item.getQuantity(), total: item.bill.value * item.getQuantity() }});
		console.table(print);
	};

	if (isConsole) {
		const template = generateConsoleWallet({ Header: `#${accountId}`, Data: money }); 
		console.log(template);
		return '';
	}

	return generateHTMLWallet({ Header: `#${accountId}`, Data: money });
};

const wallet = {
	GenerateWallet: generateWallet
};

export {
	generateWallet as GenerateWallet
};

export default generateWallet;