const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
    },
    comment: [
      {
        content: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true },
);

// as you do timestamp:true there will also be two more key and value 1.createdAt:______ 2.updatedAt:______ in which you will got timings
const tweet = mongoose.model("Tweet", tweetSchema);
module.exports = tweet;

// You can also make an new Model for the comment in another file like comment.js

/**
 * and then you can store the id of that particular comment into the main Schema
 * like --->
 * comment:{
 *  type: mongoose.Schema.Types.ObjectId,
 *  ref:'Comment'   ---> this is new child Model name when you are creating in last mongoose.mode
 * }
 * 
 * and into the comment.js you make same Schema with name Comment
 * const Comment = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
    }
};
 * 

Now when You print the tweet it will give only ObjectId of the comment not the actual comment

for getting this make a new logic in repository laye like--->

async getWithCommentt(id){
try{
const tweet  =  await Tweet.findById(id).populate({path:'comments'});
return tweet;
}catch(error){
console.log(error);
}

}


 */
