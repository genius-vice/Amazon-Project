import { formatCurrency } from "../Javascript/utils/money.js";


console.log('suite test: formatCurrency')

console.log('Working with priceCents')
if (formatCurrency(2095) === '20.95') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('Working thousands')

if (formatCurrency(100000) === '1000.00') {
    console.log('Passed');
} else {
    console.log('Failed')
} 

console.log('Working with the nearest cents')
if (formatCurrency(2000.5) === '20.01') {
    console.log('Passed')
} else {
    console.log('failed')
}