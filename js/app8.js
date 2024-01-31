let num = prompt('Enter a six-digit number:');

let num1 = parseInt(num/1000);
let num2 = parseInt(num%1000);

let digit1 = parseInt(num1/100);
let digit2 = parseInt((num1/10)%10);
let digit3 = parseInt(num1%10);

let digit4 = parseInt(num2/100);
let digit5 = parseInt((num2/10)%10);
let digit6 = parseInt(num2%10);

if (digit1 === digit6 && digit2 === digit5 && digit3 === digit4) {
    alert('a given six-digit number is mirrored')
} else {
    alert('condition not met, number is not mirror')
}



