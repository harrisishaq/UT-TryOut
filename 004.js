function palindrome(str_in) {
  var re = /[\W_]/g;
  var real = str_in.toLowerCase().replace(re, '');
  var reverse = real.split('').reverse().join(''); 
  console.log(real == reverse);
}
 
palindrome("Cigar? Toss it in a can. It is so tragic") // output true
palindrome("I did, did I?") // output true
palindrome("Red rum, sir, is murder") // output true
palindrome("Eva, can I see bees in a cave?") // output true
palindrome("Hello World") // output false