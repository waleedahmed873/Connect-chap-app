const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const generateTokenAndSetCookie = require("../utils/generateToken");

const signup = async (req, res) =>{
    try {
        const {fullName,username,password,confirmPassword,gender} = req.body;
        if (password !== confirmPassword){
            return res.status(400).json({error:"password not matched"})
        }
        const user = await User.findOne({username});
        if (user){
            return res.status(400).json({error:"Username already exists"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt); 

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`
    
    const newUser = new User({
        fullName,
        username,
        password:hashedPassword,
        gender,
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic
    })
    if(newUser){
        generateTokenAndSetCookie(newUser._id, res);
        await newUser.save();
    res.status(201).json({
        _id:newUser._id,
        fullName:newUser.fullName,
        username:newUser.username,
        profilePic:newUser.profilePic,
    })
    }else{
        res.status(400).json({error:"Invalid user data"})
    }


    } catch (error) {
        console.log("error in signup controller",error.message);
        res.status(500).json({error:"Internal Server Error"})
    };
};


const login = async (req, res) =>{
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"invalid username or password"});
        }
        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
    } catch (error) {
        console.log("error in login controller",error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
};


const logout =  (req, res) =>{
    try {
        res.cookie("jwt","", {maxAge:0});
        res.status(200).json({message:"Logged out successfully"});
    } catch (error) {
        console.log("error in logout controller",error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}
module.exports = {
    signup,
    login,
    logout,
}