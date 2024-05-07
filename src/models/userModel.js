const mongoose = require("mongoose");
const  {Schema} = mongoose;



//Blueprint / Schema
 const userSchema = new Schema({
    name: String, 
    email: String,
    password: String,
});

//Model / Table
const User = mongoose.model("User", userSchema);

module.exports = User;