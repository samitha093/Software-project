const jwt = require('jsonwebtoken');
const User = require('../models/users');

function verifyAccessToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    const activesecret = process.env.SECRET;
    //console.log(token);
    if(token == null) return res.sendStatus(401)
    jwt.verify(token, activesecret, (err, datas)=>{
        //console.log(datas);
        if(err) return res.sendStatus(403)
        User.find({email:datas.email, status:true},async(err,data)=>{
            if(data.length>0){
                req.userdata = { "email" : datas.email , "type" : datas.type};
                next();
            }else{
                return res.sendStatus(403)
            }
        })               
    })
    
};
function managerverification (req, res, next){
    if(req.userdata.type === "MANAGER"){
        next();
    }else{
        return res.sendStatus(403);
    }
};
function sellerverification (req, res, next){
    if(req.userdata.type === "SELLER"){
        next();
    }else{
        return res.sendStatus(403);
    }
};
function buyerverification (req, res, next){
    if(req.userdata.type === "BUYER"){
        next();
    }else{
        return res.sendStatus(403);
    }
};
function secretGenerator (length){
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
    }
    return result;
};

function otpgenerator(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

module.exports={
    verifyAccessToken,
    secretGenerator,
    managerverification,
    otpgenerator,
    sellerverification,
    buyerverification
};
