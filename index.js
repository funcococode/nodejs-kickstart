const express = require("express");
const path = require("path");
let app = express();

app.use(express.static(path.join(__dirname, 'src')))

app.get('/',(req,res)=>{
    res.sendFile('index.html');
})

app.listen(8080,()=>{
    console.log("App running on port 8080");
})