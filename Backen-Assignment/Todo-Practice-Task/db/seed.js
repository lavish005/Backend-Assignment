const User = require("../models/user.model");

const dummyUsers = [
  {
    name:"user 1",
    email:"user1@gmail.com",
    age:12
  },
  {
    name:"user 2",
    email:"user2@gmail.com",
    age:24
  },
  {
    name:"user 3",
    email:"user3@gmail.com",
    age:21
  },
  {
    name:"user 4",
    email:"user4@gmail.com",
    age:19
  },
  {
    name:"user 5",
    email:"user5@gmail.com",
    age:17
  },
]

async function bulkUserCreate(){
  try {
    const users = await User.insertMany(dummyUsers);
    console.log("users uploaded to DB");
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = bulkUserCreate;