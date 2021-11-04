const router = require('express').Router();
const users = require('../models/users');

router.route('/sign').post((req,res) => {
    const user_name = req.body.name;
    const email = req.body.email;
    const contact = req.body.contact;
    const password = req.body.password;
    const user_type = req.body.userType;
    const status = req.body.userStatus;
    const user_id = req.body.UserId
    const newuser = new users({
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
        .catch(error => res.status(400).json(error))
    
});




module.exports = router;