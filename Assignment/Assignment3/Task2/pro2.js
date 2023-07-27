const fs = require('fs');

fs.readFile('./file.txt', 'utf-8', function(error, data){
    if(error){
        console.log("Error : ", error);
    }
    else{
        console.log("Data of File : ", data);
    }
})
