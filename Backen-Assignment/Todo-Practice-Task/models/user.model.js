const mongoose =  require("mongoose");

const userSchema = new mongoose.Schema({
  // name:String 
  name:{
    type:String,
    required:true,   //required will make attribute compulsory
    maxLength:16,    // maximum 16 characters are allowed
    trim:true        // remove white space
  },
  email:{
    type:String,
    required:true,
    unique:true         // one email can be used only one time
  },
  age:{
    type:Number,
    min:1               // age can't be less than 1
  }
})

const User = mongoose.model("User",userSchema);
module.exports = User;