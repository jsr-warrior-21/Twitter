const express = require('express');
const connect = require('./config/database.js')
const App = express();

// after creating models in ./models/Tweet.js now import

const Tweet = require('./models/tweet.js');

App.listen(3000,async()=>{
    console.log("App Started on the Port : ",3000); 
    await connect();
    console.log('DB connected.');

    // here the connect of models

    const tweet = await Tweet.create({
        content:'First tweet',
        userEmail:'a@b.com'
    });

    console.log(tweet);

});  

//const { connect, disconnect } = require('./db'); you can doo this if you are exporting using {curley brace}