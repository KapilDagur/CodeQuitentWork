//For Http request and response...
const http = require('https');

//For File operations in our case write data in file...
const fs = require('fs');

//API address for fetch data...
const api_address = "https://api.weather.gov/openapi.json";

//File Path where file have to save...
const file_path = "./result/weather.json";

//Making a GET request at API endpoint...
http.get(api_address,function(res){
    
    //FS Stream writter here...
    const file_stream = fs.createWriteStream(file_path);

    //Here we are creating pipeline b/w api and file stream writter
    res.pipe(file_stream);

    //Here we made an callback function which called whenever completely fetched...
    res.on("end", ()=>{
        console.log("Data Fetched Successfully!!!");
    });

    //Here we made an callback function which called whenever any error occur...
    res.on("error", (err)=>{
        console.log("Error Occur in API Data Retrieval :",err);
    }).on("error", (err)=>{
        console.log("Error Occur in API Connection :",err);
    });
});