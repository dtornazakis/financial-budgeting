const Financial = require('./financial');
const { GenerateId } = require('./../helpers/core');

test('Create an instance', () => {
	const account = Financial.Account({ Balance: 120, Id: GenerateId });
 	expect(account).toBeDefined();
});
