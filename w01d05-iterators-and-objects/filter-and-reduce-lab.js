var employees = [
	{
		name: 'Ghadz',
		status: 'full-time',
		weeklyPay: 600
	},
	{
		name: 'Jax',
		status: 'part-time',
		weeklyPay: 200
	},
	{
		name: 'Jars',
		status: 'full-time',
		weeklyPay: 250
	},
	{
		name: 'Trevs',
		status: 'part-time',
		weeklyPay: 500
	},
	{
		name: 'Sauron',
		status: 'full-time',
		weeklyPay: 5000
	},
	{
		name: 'Patty Pancakes',
		status: 'full-time',
		weeklyPay: 300
	}
]


var yourPayments = [
	220,
	350,
	300,
	280,
	500
]

/* part 1 */
// Munirah:
var empFullTime = employees.filter(function(emp){
  if (emp.status == 'full-time'){
      return emp;
  }
});
// console.log(empFullTime);

//Aisha:
var fullTimeEmployees = employees.filter(function(fullTime) {
  return fullTime.status === 'full-time';
});
// console.log('full time ' ,fullTimeEmployees);

/* part 2: */

//may 
var strikeEmployees = employees.filter(function(employ){
  return ((employ.status == 'full-time') && (employ.weeklyPay < 500));
})

// console.log(strikeEmployees);

/* part 3 */
// Abdulrab
var paycheck = yourPayments.reduce(function(accum, current){
  return accum + current ;
}, 0);
// console.log(paycheck);

/* Part 4 */

// Nada

var employees = [
	{
		name: 'Ghadz',
		status: 'full-time',
		weeklyPay: 600
	},
	{
		name: 'Jax',
		status: 'part-time',
		weeklyPay: 200
	},
	{
		name: 'Jars',
		status: 'full-time',
		weeklyPay: 250
	},
	{
		name: 'Trevs',
		status: 'part-time',
		weeklyPay: 500
	},
	{
		name: 'Sauron',
		status: 'full-time',
		weeklyPay: 5000
	},
	{
		name: 'Patty Pancakes',
		status: 'full-time',
		weeklyPay: 300
	}
]

var ptPay = employees.reduce(function(accum, current){
  if (current.status === 'part-time'){
    console.log('accum value inside ', accum)
    return accum += current.weeklyPay;
  } else {
    console.log('accum value is ', accum);
    return accum;
  }
}, 0);

// console.log('Part-time payment', ptPay); 

// Yahya, Sultan
var ptPay = employees.reduce(function(accum,current){
  return current.status === 'part-time' ? accum + current.weeklyPay : accum; //ternary 
}, 0);

