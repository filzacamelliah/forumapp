const express= require ("express");
const threadRouters = express();

threadRouters.get("/api/threads", (req, res) => res.send("Ini Threads"));

module.exports = threadRouters