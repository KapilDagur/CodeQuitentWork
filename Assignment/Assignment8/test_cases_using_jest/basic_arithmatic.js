function addTwoNumbers(num1,num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number')
        return NaN;
    return num1 + num2;
}

function subTwoNumbers(num1,num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number')
        return NaN;
    return num1 - num2;
}

function mulTwoNumbers(num1,num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number')
        return NaN;
    return num1 * num2;
}

function divTwoNumbers(num1,num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number')
        return NaN;
    return num1 / num2;
}

module.exports = {
    addTwoNumbers,
    subTwoNumbers,
    mulTwoNumbers,
    divTwoNumbers
}