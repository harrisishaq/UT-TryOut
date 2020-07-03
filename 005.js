function leapYear(year1, year2) {
	for (var i = year1; i <= year2; i++) {

		let result = ((i % 4 == 0) && (i % 100 != 0)) || (i % 400 == 0) ? 'tahun kabisat' : 'bukan tahun kabisat';
		console.log(i + ' adalah ' + result);
	}
}

leapYear(1600, 2020)

// example 
// output 2004 adalah tahun kabisat 
// output 2008 adalah tahun kabisat 
// output 2012 adalah tahun kabisat 
// output 1900 adalah bukan tahun kabisat 
// output 2100 adalah bukan tahun kabisat 
// output 1600 adalah tahun kabisat 
// output 2000 adalah tahun kabisat 
// output 2009 adalah bukan tahun kabisat 