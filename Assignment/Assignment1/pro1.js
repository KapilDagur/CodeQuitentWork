/*
*    Program For Perform Arithematic Opeartion on Command Line Argumented Expression
*    eval() method is used for evalvate expression.
*/
var expression = "";
for(let x = 2; x < process.argv.length; x++){
    expression += process.argv[x];
}
console.log("Result of Expression : " + expression + " is : " + eval(expression));