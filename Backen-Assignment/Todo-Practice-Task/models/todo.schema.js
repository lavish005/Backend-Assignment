const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task:{
    type:String,
    required:true,
    trim:true
  },
  status:{
    type:Boolean,
    default:false
  },
  // createdAt: new Date()
},{
  timestamps:true     // createdAt,updatedAt
}
)

const Todo = mongoose.model("Todo",todoSchema);
module.exports = Todo;