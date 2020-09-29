(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(factory);
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root.Core = factory();
    }
}(this, function () {

    const generateId = () => {
    	
    	const characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    	const template = `xxxxxx`;
    	let output = [];

    	for (let i = 0; i < template.length; i++) {
    		output.push(characters[Math.floor(Math.random() * characters.length)]);
    	}
    	return output.join('');
	};

	const generateCodeFromName = (value) => {
		const separator = "-";
		return value.toLowerCase()
			.replace(/\'/g, '')
			.replace(/ /g, separator)
			.replace(/\(/g, '')
			.replace(/\)/g, '');
	};

    return {
    	GenerateId: generateId,
		GenerateCodeFromName: generateCodeFromName
    }
}));