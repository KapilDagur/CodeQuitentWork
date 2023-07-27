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
    for(var i = 0; i < n; i++){
      for(var j = 0; j <= i; j++){
        pattern += j+1;
      }
       pattern += "\n";
    }
    console.log(pattern)
  }