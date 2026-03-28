const express = require('express');
const connect = require('./config/database.js')
const App = express();

// after creating models in ./models/Tweet.js now import

const Tweet = require('./models/tweet.js');

// after creating tweet repository

const TweetRepository = require('./repository/tweet-repository.js')

App.listen(3000,async()=>{
    console.log("App Started on the Port : ",3000); 
    await connect();
    console.log('DB connected.');

    // here the connect of models and creating documents

    // const tweet = await Tweet.create({
    //     content:'First tweet',
    //     userEmail:'a@b.com'
    // });

    // now till two or three documents are already created
    // lets comment upper part so no new one again create.



    // -----> we can apply queries on the data base also
    
    // const tweets = await Tweet.find(); // will return array of all documents
    // const tweetId = await Tweet.find({userEmail:'a@b.com'});
    // const tweetParticular = await Tweet.findById('69c81972b966ceeb7bdfa466');  // will give the particular tweets 
    // tweetParticular.userEmail="arvind@21gmail.com"; 
    // await tweetParticular.save(); // like this you can update the document also
    // console.log(tweetParticular); // this will give updatedAt props - means when the document got updated



        // now we have made Repository so we no need to do byHand this databaseQuery so comment out all

        const tweetrepo = new TweetRepository();
        const tweetRepoPrticular = await tweetrepo.get('69c81972b966ceeb7bdfa466');
        const tweetRepoPrticularAndUpdate = await tweetrepo.update('69c81972b966ceeb7bdfa466',{content:"I am Updating"});
        console.log(tweetRepoPrticularAndUpdate);
});  
//const { connect, disconnect } = require('./db'); you can doo this if you are exporting using {curley brace}