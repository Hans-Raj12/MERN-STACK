const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');

router.post('/register', async (req, res) => {  
    try{
        const { username, email, password } = req.body;
        //check if user already exists
        const hashPassword =  bcrypt.hashSync(password);
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message: 'User already exists'});
        }

        const newUser = new User({username, email, password:hashPassword});
        await newUser.save();
        res.status(200).json({user: newUser});

    } catch(err){
        res.status(400).json({message: err.message});
    }
});

//sign in

router.post('/signin', async (req, res) => {
    try{
        
        const user = await User.findOne({email:req.body.email});
        if(!user){
            return res.status(400).json({message: 'Please Register'});
        }
        const isMatch = bcrypt.compareSync(req.body.password, user.password);
        if(!isMatch){
            return res.status(400).json({message: 'Invalid Credentials'});
        }
        const { password, ...others } = user._doc;
        res.status(200).json({user : others});
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
});

module.exports = router;