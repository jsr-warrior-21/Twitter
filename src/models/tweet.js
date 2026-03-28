const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    userEmail:{
        type:String
    }
},{timestamps:true});

// as you do timestamp:true there will also be two more key and value 1.createdAt:______ 2.updatedAt:______ in which you will got timings
const tweet = mongoose.model('Tweet',tweetSchema);
module.exports = tweet;