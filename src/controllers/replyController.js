const Reply = require ("../models/replyModel");
const Session = require ("../models/sessionModel")
require("dotenv").config();


async function createReply (req, res) {
    const {title, content, userId, threadId} = req.body;

    const newReply= new Reply ({
        title,
        content,
        userId,
        threadId,
    });
    const reply = await newReply.save();

    res.status(201).json({message: "Ini adalah data Replies", data: reply});
}

    module.exports = {createReply};