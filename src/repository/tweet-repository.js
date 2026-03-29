const Tweet = require("../models/tweet");
// all the bussiness logic of database written in this folder
// database Query
class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async get(id) {
    try {
      const tweet = await Tweet.findById(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async update(tweetId,data) {

    try {
                const tweet = await Tweet.findByIdAndUpdate(tweetId,data,{new:true});
                return tweet
            } catch (error) {
                    console.log(error);
            }
  }

  async destroy(id) {
    try {
      const tweet = await Tweet.findByIdAndRemove(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
 
  async getAll(offset,limit){
    try {
      const tweet = await Tweet.find().skip(offset).limit(limit); //now you will got some number of document from your data base not all
      // data -> equal to limit number
      // offset -> if you want to skip some starting document. 
      return tweet;
    } catch (error) {
       console.log(error); 
    }
  }



};

module.exports = TweetRepository;

// now Exports From Here and import in server.js
