const mongoose = require('mongoose');
mongoose.plugin(require('@meanie/mongoose-to-json'));

const schema = mongoose.Schema;

const SellerAnalitics = new schema({
    sellerid : {type:String},
    date : {type:String},
    //detail section 1
    noofsoldbydirect: {type:Number,default: 0},
    amountsoldbydirect: {type:Number,default: 0}, //pi
    noofbid: {type:Number,default: 0},
    noofbidWin: {type:Number,default: 0},
    noofpaidbid: {type:Number,default: 0},
    amountpaidbid: {type:Number,default: 0},
    amountunpaidbid: {type:Number,default: 0},
    totalamountforbid: {type:Number,default: 0}, //pi
    total: {type:Number,default: 0}, //line
},{
    timestamps:true
});

const sellerAnalitics = mongoose.model('SellerAnalitics',SellerAnalitics);
module.exports = sellerAnalitics