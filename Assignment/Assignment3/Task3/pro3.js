const fs = require('fs');
let cli_data = "";
for(let x =2; x < process.argv.length; x++){
    cli_data += process.argv[x];
}

fs.writeFile('./file.txt', cli_data, function(error){
    if(error){
        console.log("Error : ", error);
    }
    else{
        console.log("Congrats !!! Data Successfully Written in File.");
    }
});