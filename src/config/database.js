require('dotenv').config();
const mongose = require('mongoose');
const MongoURL = process.env.MONGO_URI

const connect = async()=>{
    await mongose.connect(MongoURL);
}
module.exports = connect; // iss tarah export karoge to direct call krr sakte ho jaga import hoga
// agar curley brace me karoge to jaha import karoge waha prr db.connect() is tarah call hoga jaha prr db parent component ka name hai jaha se ye aa raha hai
// aur tum direct connec ko import nahi karoge wha prr component ko import karoge aur then . laga krr function ko call karoge