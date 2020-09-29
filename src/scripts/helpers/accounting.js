import { AMOUNT_FORMAT_OPTIONS } from './../settings/global';

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(factory);
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root.Core = factory();
    }
}(this, function () {

    const _addThousandAndDecimalSeparators = ({ value, decimalSeparator, thousandSeparator }) => {

		const valueParts = value.split('.');
		const integerPart = valueParts[0];
		const decimalPart = valueParts[1];

		const reversedIntegerPart = integerPart.split('').reverse().join('');
		
		let i = 0;
		let thousandSeparatedAmount = '';
		for (let i = 0; i < reversedIntegerPart.length; i++) {
			thousandSeparatedAmount += reversedIntegerPart[i];
			if ((i + 1) % 3 === 0 && i !== reversedIntegerPart.length - 1) {
				thousandSeparatedAmount += thousandSeparator;
			}
		}

		const restoredIntegerPartWithThousandSeparator = thousandSeparatedAmount.split('').reverse().join('');

		return `${restoredIntegerPartWithThousandSeparator}${decimalSeparator}${decimalPart}`;
	};

	const _getAbsoluteValue = (value) => Math.abs(value);

	const _getValueAsString = ({ value, precision }) => value.toFixed(precision);

	const parseAmount = (value, options = AMOUNT_FORMAT_OPTIONS) => {
		
		// Extract options's properties
		const { 
			currencySymbol,
			decimalSeparator,
			format,
			precision,
			thousandSeparator,
		} = options;
			
		if (value === 0) {
			return {
				value,
				formattedValue: format.zero
					.replace('%s', currencySymbol)
			}
		}

		const absoluteValue = _getAbsoluteValue(value);
		const valueAsString = _getValueAsString({ 
			value: absoluteValue, 
			precision 
		});
		const outputValue = _addThousandAndDecimalSeparators({ 
			value: valueAsString, 
			decimalSeparator, 
			thousandSeparator 
		});

		if (value < 0) {
			return {
				value,
				formattedValue: format.negative
					.replace('%s', currencySymbol)
					.replace('%v', outputValue)
			}
		}

		return {
			value: value,
			formattedValue: format.positive
				.replace('%s', currencySymbol)
				.replace('%v', outputValue)
		}
	};

    return {
    	ParseAmount: parseAmount
    }
    
}));
