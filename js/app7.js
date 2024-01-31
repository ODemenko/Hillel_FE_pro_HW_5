let num = prompt('Enter a three-digit number');

let num1 = parseInt(num/100);
let num2 = parseInt((num/10)%10);
let num3 = parseInt(num%10);

if (num1 === num2 && num2 === num3) {
    alert('all digits are the same')
} else if (num1 === num2 && num2 !== num3) {
    alert('the number contains the same digits')
} else if (num1 !== num2 && num2 === num3) {
    alert('the number contains the same digits')
} else if (num1 === num3 && num2 !== num3) {
    alert('the number contains the same digits')
} else {
    alert('all numbers are different')
}