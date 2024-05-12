const express= require ("express");
const threadRouters = express();
//const jwt = require("jsonwebtoken");
const Session = require("../models/sessionModel");
const threadController = require("../controllers/threadController.js");


    threadRouters.post("/api/threads", threadController.createThread);
    threadRouters.get("/api/threads", async (req, res) => {
        return res.send("Ini data threads")
        });

module.exports = threadRouters