const express= require ("express");
const replyRouters = express();

replyRouters.get("/api/replies", (req, res) => res.send("Ini Reply"));

module.exports = replyRouters