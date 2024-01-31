let a = parseFloat(prompt('Enter number a'));
let b = parseFloat(prompt('Enter number b'));

let aRes = b%a;
let bRes = a%b;

if (aRes === 0 && bRes === 0) {
    alert('Number a divisor b. Number b divisor a')
} else if (aRes === 0 && bRes > 0) {
    alert('Number a divisor b. Number b is NOT divisor a')
} else if (aRes > 0 && bRes === 0) {
    alert('Number a is NOT divisor b. Number b divisor a')
} else {
    alert('Number a is NOT divisor b. Number b is NOT divisor a')
}