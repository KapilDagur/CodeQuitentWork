var op1 = parseFloat(process.argv[2]);
var opr = process.argv[3];
var op2 = parseFloat(process.argv[4]);
var result = "";
switch(opr){
    case '+':
        result = op1 + op2;
        break;
    case '-':
        result = op1 - op2;
        break;
    case '*':
        result = op1 * op2;
        break;
    case '/':
        result = op2 == 0 ? "Infinite" : op1 / op2 ;
        break;
    case '%':
        result = op2 == 0 ? "Infinite" : op1 % op2 ;
        break;
    default:
        console.log("Can't Perform This Operation !!!");

}

console.log("Result : "+result);