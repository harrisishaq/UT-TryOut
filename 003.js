function generate_random() {
	return Math.floor((Math.random() * 100) + 1)
}

function max(deret) {
	console.log(Math.max.apply(null, deret));
}

function min(deret) {
	console.log(Math.min.apply(null, deret));
}

function avg(deret) {
	console.log(deret.reduce((a, b) => a += b, 0) / deret.length);
}

var deretAngka = [];
for (var i = 0; i < 10; i++) {
	deretAngka.push(generate_random());
}

max(deretAngka);
min(deretAngka);
avg(deretAngka);