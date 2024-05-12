const Thread = require ("../models/threadModel");
const Session = require ("../models/sessionModel")
require("dotenv").config();
//const bcrypt = require ("bcrypt");

async function createThread (req, res) {
    const {title, content, userId} = req.body;

    const newThread= new Thread ({
        title,
        content,
        userId
    });
    const thread = await newThread.save();

    res.status(201).json({message: "Ini adalah data thread", data: thread});
}

    module.exports = {createThread};