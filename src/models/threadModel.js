const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Auth = require("./authModel.js")


//Blueprint / Schema
 const threadSchema = new Schema({
    title:String,
    content: String,
    userId: {type: Schema.Types.ObjectId, ref: "Auth"},
});

//Model / Table
const Thread = mongoose.model("Thread", threadSchema);

module.exports = { Thread }