function oddEven(number) {
  let result = number % 2 ? 'ganjil' : 'genap';

  console.log(result);
}

oddEven(10) // output genap
oddEven(5) // output ganjil