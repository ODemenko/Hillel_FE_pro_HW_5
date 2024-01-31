let num = prompt('Enter a two-digit number');

let num1 = parseInt(num/10);
let num2 = parseInt(num%10);

if (num1 === num2) {
    alert('First number = second number')
} else if (num1 > num2) {
    alert('First number > second number')
} else {
    alert('First number < second number')
}