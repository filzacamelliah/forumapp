const express= require ("express");
const authRouters = express();
const authController = require("../controllers/authController.js")

authRouters.post("/register", authController.handleRegister);
authRouters.post("/login", (req, res) => res.send("Ini Register"));

module.exports = authRouters