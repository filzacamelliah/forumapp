const express= require ("express");
const replyRouters = express();
const replyController = require("../controllers/replyController.js");

replyRouters.get("/api/replies", async (req, res) => {
    return res.send("Ini data replies")
    });

replyRouters.post("/api/replies", replyController.createReply);
module.exports = replyRouters

