const amountFormatOptions = {
	currencySymbol: '€',
	thousandSeparator: '.',
	decimalSeparator: ',',
	precision: 2,
	format: {
		positive : "%v %s",
		negative : "(%v) %s",
		zero: "-- %s"
	}
}

const configuration = {
	AMOUNT_FORMAT_OPTIONS: amountFormatOptions,
};

export {
	amountFormatOptions as AMOUNT_FORMAT_OPTIONS,
};

export default configuration;