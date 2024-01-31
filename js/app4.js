let num = prompt('Enter number');

let numRes = parseInt(num%10);

if (numRes === 0) {
    alert(`The last digit of the number is ${numRes}`)
} else if (numRes%2 === 0) {
    alert(`The last digit of the number is ${numRes} and it is even`)
} else {
    alert(`The last digit of the number is ${numRes} and it is odd`)
}