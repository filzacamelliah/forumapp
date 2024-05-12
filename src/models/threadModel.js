const mongoose = require("mongoose");
const  {Schema} = mongoose;



//Blueprint / Schema
 const threadSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: "User"},
    title: String, 
    content: String,
});

//Model / Table
const Thread = mongoose.model("Thread", threadSchema);

module.exports = Thread;