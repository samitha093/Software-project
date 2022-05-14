const jwt = require('jsonwebtoken');
const User = require('../models/users');

function verifyAccessToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    //console.log(token);
    if(token == null) return res.sendStatus(401)
    User.find({token: token})
        .then(data =>{
            jwt.verify(token, data[0].secret, (err, datas)=>{
                //console.log(datas);
                if(err) return res.sendStatus(403)
                if(datas.type === data[0].usertype){
                    req.userdata = { "email" : data[0].email , "type" : data[0].usertype};
                    //console.log(req.userdata);
                    next();
                }else{
                    return res.sendStatus(403)
                }                 
            })
        })
        .catch(err =>{
            return res.sendStatus(403)
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
