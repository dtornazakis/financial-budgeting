import { GenerateId } from './../helpers/core';
import Financial from './../models/financial';

const savings = Financial.Account({ Name: "Savings", Id: GenerateId });
const vacation = Financial.Account({  Name: "Vacation", Id: GenerateId });
const webDevelopment = Financial.Account({  Name:"Web Development", Id: GenerateId });
const provisions = Financial.Account({  Name:"Annual Provisions", Id: GenerateId });
const dimitrisPersonal = Financial.Account({ Name:"Dimitri's Personal", Id: GenerateId });
const vassiaPersonal = Financial.Account({  Name:"Vassia's Personal", Id: GenerateId });
const danaosPayroll = Financial.Account({ Name:"Danaos Payroll", Id: GenerateId });
const eyPayroll = Financial.Account({ Name:"EY Payroll", Id: GenerateId });
const privateLessons = Financial.Account({ Name:"Private Lessons", Id: GenerateId });
const JUL_2020_BE = Financial.Account({  Name:"Budget Expenses (Jul 2020)", Id: GenerateId });
const JUL_2020_FE = Financial.Account({  Name:"Fixed Expenses (Jul 2020)", Id: GenerateId });
const JUL_2020_S = Financial.Account({ Name:"Savings (Jul 2020)", Id: GenerateId });

const accounts = [
	savings,
	vacation,
	webDevelopment,
	provisions,
	dimitrisPersonal,
	vassiaPersonal,
	danaosPayroll,
	eyPayroll,
	privateLessons,
	JUL_2020_BE,
	JUL_2020_FE,
	JUL_2020_S
];

export { accounts };

export default accounts;