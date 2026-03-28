const mongose = require('mongoose');

const connect = async()=>{
    await mongose.connect('url of your db');
}
module.exports = {connect}