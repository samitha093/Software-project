const User = require('../models/users');

function getusername (req, res, next){
    //console.log(req.userdata.email)
    User.find({email:req.userdata.email},(err,data) => {
        req.username = data[0].username;
        next();
    })
};

function getuserid (req, res, next){
    User.find({email:req.userdata.email},(err,data) => {
        req.userid = data[0]._id;
        next();
    })
};

module.exports={
    getusername,
    getuserid,
};
