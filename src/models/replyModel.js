const mongoose = require("mongoose");

const {Schema} = mongoose;


//Blueprint / Schema
 const replySchema = new Schema({
    //userId: {type: Schema.Types.ObjectId, ref: "User"},
    threadId: {type: Schema.Types.ObjectId, ref: "Thread"},
    title:String,
    content: String,
});

//Model / Table
const Reply = mongoose.model("Reply", replySchema);

module.exports = Reply;
