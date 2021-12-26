const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/users');

router.route('/register').post((req,res) => {
    const user_name = req.body.name;
    const email = req.body.email;
    const contact = req.body.contact;
    const password = req.body.password;
    const user_type = req.body.userType;
    const status = req.body.userStatus;
    const user_id = req.body.UserId

    User.find({email:email},(err,data) => {
    if(data.length>0) res.status(400).json("User alreadyt exist");

    const newuser = new User({
        user_name,
        email,
        contact,
        password,
        user_type,
        status,
        user_id

        });
    newuser.save()
        .then(()=> res.status(200).json("Registration success"))
        .catch(err => res.status(400).json(err + "Registration failed"))

        
    })
 
});


router.route('/login').post((req,res) => {
    
    const email = req.body.email;
    const password = req.body.password;

    User.find({email:email, password:password, status:true},(err,data)=>{
    if(data.length>0){
        const token = jwt.sign(email,"eb01a367e696551962e1b8b659e643b59f6f21c8eb6c42657fede6be6d509c93fc9282f6643c7ce00c723fbb810955656203867676b819efbfa6653316db42da")
        let datapack = {
            tokenkey: token,
            type: data[0].user_type, 
        }
        res.json(datapack);
    }else{
        res.status(400).json("User does not exist");
    }
  })
    
});

function authtoken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, "eb01a367e696551962e1b8b659e643b59f6f21c8eb6c42657fede6be6d509c93fc9282f6643c7ce00c723fbb810955656203867676b819efbfa6653316db42da" , (err, data)=>{
        if(err) return res.sendStatus(403)
        next();
    } )
 
}


module.exports = router;