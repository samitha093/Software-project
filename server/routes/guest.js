const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/users');

/**
 * @swagger
 *  components:
 *      schemas:
 *          CreateUsers:
 *              type: object
 *              required:
 *                  - name
 *                  - email
 *                  - password
 *                  - user-type
 *              properties:
 *                  name:
 *                      type: string
 *                      description: validated number of charactors
 *                  email:
 *                      type: string
 *                      description: Validated email Format
 *                  contact-number:
 *                      type: string
 *                      description: Validated Phone number Format With 10 Digits
 *                  password:
 *                      type: string
 *                      description: Validated Password & Same Password 
 *                  user-type:
 *                      type: string
 *                      description: Should validated if admin 
 *              example:
 *                  name: "?"
 *                  email: "?"
 *                  contact-number: "?"
 *                  password: "?"
 *                  user-type: "?"
 */

/**
  * @swagger
  * tags:
  *   name: User-guest
  *   description: Private Routes
  */

  /**
   * @swagger
   * '/g/register':
   *  post:
   *     tags:
   *     - User-guest
   *     summary: Register a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUsers'
   *     responses:
   *      200:
   *        description: Success
   *      400:
   *        description: Exist user account
   *      500:
   *        description: Server failure
   */

router.route('/register').post((req,res) => {
    const user_name = req.body.name;
    const email = req.body.email;
    const contact = req.body.contact;
    const password = req.body.password;
    const user_type = req.body.userType;
    const status = true;

    User.find({email:email},(err,data) => {
        if(data.length>0){
            res.status(400).json("User alreadyt exist");
            return 0;
        } 
        const newuser = new User({
            user_name,
            email,
            contact,
            password,
            user_type,
            status,
            
            });
        console.log(newuser);
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