const User = require("../models/User")
const crypto = require("crypto")




const deleteUser = async (req,res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("User has been deleted.")
  } catch (err) {
    res.status(500).json(err)
  }
}

const updateUser = async (req,res) => {
  if(req.body.password){
    req.body.password = crypto.createHash('sha256').update(req.body.password).digest('base64');
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        {
            new: true
        }
    )
    res.status(200).json(updatedUser)
  } catch (err) {
    res.status(500).json(err)
  }
}

const getUser = async (req,res) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
}

const getAllUser = async (req,res) => {
  try {
    const users = await User.find().limit(100)
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json(err)
  }
}


module.exports = {
    deleteUser,
    updateUser,
    getUser,
    getAllUser
}
