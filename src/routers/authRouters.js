const express= require ("express");
const authRouters = express();
const authController = require("../controllers/authController.js");


authRouters.post("/register", authController.handleRegister);
authRouters.post("/login", authController.handleLoginSession);
authRouters.get("/logout", authController.handleLogout);
module.exports = authRouters

//(req, res) => res.send("Ini Register")