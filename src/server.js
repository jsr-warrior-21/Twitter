const express = require('express');
const connect = require('./config/database.js')
const App = express();
App.listen(3000,async()=>{
    console.log("App Started on the Port : ",3000); 
    await connect();
    console.log('DB connected.');
});  