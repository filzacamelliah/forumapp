const express= require ("express");
const authRouters = express();
const authController = require("../controllers/authController.js")

authRouters.post("/register", authController.handleRegister);
authRouters.get("/login", authController.handleLogin);

module.exports = authRouters

//(req, res) => res.send("Ini Register")