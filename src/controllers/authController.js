const User = require ("../models/userModel");
const bcrypt = require ("bcrypt");

function handleLogin (req, res) {
    res.send("Login Handler nih!!!")
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

module.exports = {handleLogin, handleRegister}
