const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const PORT = process.env.PORT;
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require('../model/userSchema')

router.get('/', (req, res) => {
    res.send("welcome from the homepage to auth.js");
    console.log(`User at URL : localhost:${PORT}${req.url}`)
})

router.post('/register', async (req, res) => {
    const {username, email, password, cpassword, role} = req.body;
    if(!username || !email || !password || !cpassword && role){
        return res.status(422).send({Error: "Enter complete details for Processing"});
    }

    try {
        const userExist = await User.findOne({email:email});

        if(userExist){
            return res.status(421).json({Error: "Email already exits"})
        }
        else if(password != cpassword){
            return res.status(420).json({Error: "password are not matching"})
        }
        else{
            const user = new User({username,email,password,cpassword,role});
            await user.save();
            res.status(200).json({success:"User Register Successfully"});
        }
    } catch (err) {
        console.log(`Admin There is an Error : ${err}`);
    }

    console.log(`Your Register password is : ${password}`);
    console.log(`Your Register username is : ${username}`);
    console.log(`You are a : ${role}`);
})

router.post('/login', async (req, res) => {
    try {
        let token;
        let {username, password} = req.body;

        if(!username || !password){
            return res.status(403).json({Error: "Please fill the Data"});
        }

        const userLogin = await User.findOne({username:username});

        if(userLogin){
            const isMatch = await bcrypt.compare(String(password), String(userLogin.password));

            token = await userLogin.generateAuthToken();
            console.log(`The new Token Generated is : ${token}`)
            res.cookie("jwt_users_token",token,{
                expires:new Date(Date.now() + 25892000000),   //it is 30 days;
                httpOnly:true
            });

            if(!isMatch){
                res.status(402).json({error: "Password wrong"});
            }
            else{
                res.status(200).json({message:"user login successfully"});
            }
        }
        else{
            res.status(400).json({error:"Invalid username or Password!"});
        }

        if(userLogin===null){
            res.status(401).send("please register to login")
            console.log(`Please register to login in codofile`)
        } 
        else{
            console.log(`Login Successful - Here is the Completed data`)
            console.log(userLogin);
        }
    } catch (err) {
        console.log(`Admin There is an error : ${err}`);
    }
})

router.get('/logout', async (req, res) => {
    console.log("hello the accout is logout");

    res.status(200).send('user is logout');
})

module.exports = router