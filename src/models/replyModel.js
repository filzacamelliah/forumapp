const mongoose = require("mongoose");

const Schema = mongoose.Schema;


//Blueprint / Schema
 const replySchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: "Auth"},
    threadId: {type: Schema.Types.ObjectId, ref: "Thread"},
    threadId: String,
    title:String,
    content: String,
});

//Model / Table
const Reply = mongoose.model("Reply", replySchema);

module.exports = { Reply }