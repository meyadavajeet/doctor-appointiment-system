const userModel = require('../models/UserModel');

//register callback
const registerController = async (req, res, next) => {
  try {
    const newUser = await userModel(req.body);
    await newUser.save();
    return res.status(200).json({ success: true, data: newUser });
  } catch (err) {
    res.status(400).json({ success: false, error: err });
  }
}

//login callback
const loginController = async (req, res, next) => {

}

module.exports = { loginController, registerController };

