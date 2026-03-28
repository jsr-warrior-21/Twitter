const express = require('express');
const connect = require('./config/database.js')
const App = express();
App.listen(3000,async()=>{
    console.log("App Started on the Port : ",3000); 
    await connect();
    console.log('DB connected.');
});  

//const { connect, disconnect } = require('./db'); you can doo this if you are exporting using {curley brace}