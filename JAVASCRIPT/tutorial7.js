// number methods
let result;

// parseInt() method

let n1 = "500"
result = parseInt(n1)


// parseFloat
result = parseFloat('10.5')

// isNan method
result = isNaN('a') // NaN = not a number

let phoneNumber = "35l"

result = isNaN(phoneNumber) ? 'yes':'no';

// tofixed method
let incomingSalary = 2100.50

result = incomingSalary.toFixed()

console.log(result)
console.log(typeof result)

// Number(phoneNumber)