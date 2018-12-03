var shopkeeper = require('./modules/shopkeeper');
var transactions = require('./modules/transactions');
var shopname = require('./modules/shopname');
var customers = require('./modules/customers');
var isEven = require('./tools/isEven');
var capitalizer = require('./tools/capitalizer');


console.log(capitalizer.yell('shark'));
console.log(capitalizer.firstLetter('snake'));
console.log(capitalizer.yell(shopname));

// transactions.forEach(sayTransaction);

// function sayTransaction(transaction){
//   console.log(`this transaction cost ${transaction}`);
// }

// transactions.forEach(isEven.evenDetector);

// sayTransaction(transactions[0]);




