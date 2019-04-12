const mongoose =  require('mongoose');

let CoinModel = new mongoose.Schema({
    name: String,
    country: String,
    value:Number,
    value_us:Number,
    year:Number,
    review:String,
    isAvailable:Boolean,
    img:String
});

module.exports = mongoose.model('Coin', CoinModel);