const prompt = require('prompt-sync')();

var input = 0;
var result = 0;
do {
	input = parseInt(input);
	result+=input;
	input = prompt('Input angka = ');
} while(input != '=')

console.log(`Total ${result}`);