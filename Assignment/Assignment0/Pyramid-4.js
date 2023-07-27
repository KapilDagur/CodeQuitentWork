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
    // Use the readLine() function to read a line from STDIN.
    var n = readLine();
    var pattern = "";
    for(var i = n-1; i >= 0; i--){
      for(var j = i; j > 0; j--){
        pattern += "*";
      }
      for(var j = n-i; j > 0; j--){
        pattern += j;
      }
      pattern += "\n";
    }
    console.log(pattern);
}