

const createUser = async (req, res) => {
  try {
    const {name,email,age} = req.body;
    // const user = await User.create({
    //   name:name,
    //   email:email,
    //   age:age
    // })
    const user = await User.create({
      name,
      email,
      age
    })
    res.status(201).json({user});
  } catch (error) {
    res.status(400).json({message:error.message});
  }
}

const updateUser = async (req,res)=>{
  try {
    const {id} = req.params;
    let result = await User.findByIdAndUpdate(id,{name:"updated name"});
    res.status(200).json({result});
  } catch (error) {
    res.status(500).json({message:error.message});
  }
}

module.exports = {createUser,updateUser}