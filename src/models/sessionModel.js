const mongoose = require("mongoose");
const  {Schema} = mongoose;



//Blueprint / Schema
 const sessionSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User"}
});

//Model / Table
const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;