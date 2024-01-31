let num = prompt('Enter a three-digit number');

let num1 = parseInt(num/100);
let num2 = parseInt((num/10)%10);
let num3 = parseInt(num%10);


multipleTwo();
multipleFive();
divisNum();

function multipleTwo() {
    let res = num1 + num2 + num3
    if (res%2 === 0) {
        alert('The sum of the digits is even')
    } else {
        alert('The sum of the digits is odd')
    }
}

function multipleFive() {
    let res1 = num1 + num2 + num3
    if (res1%5 === 0) {
        alert('The sum of the digits is multiple 5')
    } else {
        alert('The sum of the digits is not multiple 5')
    }
}

function divisNum() {
    let res2 = num1 * num2 * num3
    if (res2 > 100) {
        alert('The product of its digits is greater than 100')
    } else {
        alert('The product of its digits is not more than 100')
    }
}