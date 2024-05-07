const express= require ("express");
const mongoose = require("mongoose");
const app = express();
const authRouters = require ("./routers/authRouters.js");
const threadRouters = require ("./routers/threadRouters.js");
const replyRouters = require ("./routers/replyRouters.js");
const MONGO_DB_URL= require("./config/dburlConfig.js")
//mongoose.connect("mongodb+srv://filzacamelliah:SLs6bccjKmBIyS9U@filza.geaoocz.mongodb.net/?retryWrites=true&w=majority&appName=Filza");

mongoose.connect(MONGO_DB_URL);
//console.log(MONGO_DB_URL)

app.use(express.json())

app.use(authRouters);
app.use(threadRouters);
app.use(replyRouters);


//app.get("/", (req, res) => res.send("Hello!!!"));
app.listen(8000)