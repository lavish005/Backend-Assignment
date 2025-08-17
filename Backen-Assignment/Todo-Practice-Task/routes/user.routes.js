const express = require("express");
const User = require("../models/user.model");
const { updateUser, createUser } = require("../controllers/user.controller");
const router = express.Router();

router.post("/", createUser);

router.get("/",async(req,res)=>{
  try {
    let users = await User.find();
    res.status(200).json({users})
  } catch (error) {
    res.status(400).json({message:error.message});
  }
})

router.delete("/user/:id",async (req,res)=>{
  try {
    const {id} = req.params;
    // let user = await User.findByIdAndDelete(id);
    let user = await User.deleteOne({_id:id});
    res.status(200).json({user,message:"user delted successfully"})
  } catch (error) {
    res.status(400).json({message:error.message});
  }
})

router.get("/bulk",async (req,res)=>{
  try {
    await bulkUserCreate();
    res.status(200).send("users uploaded");
  } catch (error) {
    res.status(500).json({message:error.message});
  }
})

router.put("/update/:id",updateUser)

module.exports = router;