'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main(){
    // Use the readLine() method to read a line from STDIN
    var n = readLine();
    var pattern = "";
    var x = 1;
    for(var i = n-1; i >= 0; i--){
      for(var j = i; j > 0; j--){
        pattern += "*";
      }
      x = 1;
      for(var j = n-i; j > 0; j--){
        pattern += x++;
      }
      pattern += "\n";
    }
    console.log(pattern);
}