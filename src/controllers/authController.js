const User = require ("../models/userModel");
const Session = require ("../models/sessionModel")
const bcrypt = require ("bcrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config();


async function handleLoginJWT (req, res) {
    const {email, password} = req.body;

    //1. cari user berdasarkan email

   const user = await User.findOne({email});

   if (!user) res.status(404).json({message: "Account not found"});

    //2. cocokan pass user
   const ifPasswordMatch = await bcrypt.compare(password, user.password);
   //console.log(ifPasswordMatch)
   if (!ifPasswordMatch) res.status(403).json({message: "Invalid Password"})

   //3. buat payload untuk token
   const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
   }

   //4. generate token
   const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d"});
   //res.json({payload, token});

   //5. set token ke cookie
   res.cookie("token", token).json({ message: "Login Succeeded", user: payload})
   
}

async function handleLoginSession (req, res) {
    const {email, password} = req.body;

    //1. cari user berdasarkan email
const user = await User.findOne({email});
if (!user) res.status(404).json({message: "Account not found"});

    //2. cocokan pass user
const ifPasswordMatch = await bcrypt.compare(password, user.password);
if (!ifPasswordMatch) res.status(403).json({message: "Invalid Password"});

    //3. Generate Session Id

    const newSession = new Session ({
        userId: user.id
    })
    const session = await newSession.save();
    //console.log(session);

    //4. Insert into DB session
    const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
       }
    
    res.cookie("session_Id", session.id).json({message: "Login Success",user: userData})


}

async function handleRegister (req, res) {
    const {name, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    });
    const user = await newUser.save();

    res.status(201).json({message: "User register success", data: user});
}


async function handleLogout (req,res) {
    //delete cookie dr DB
    const session_Id= req.cookies?.session_Id;
    await Session.findByIdAndDelete(session_Id);
    return res.send("Logout success")
}
module.exports = {handleLoginJWT, handleLoginSession, handleRegister, handleLogout}
